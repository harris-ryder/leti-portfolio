import { notFound } from "next/navigation";
import Image from "next/image";
import NavigationLayout from "../../components/navigation-layout";
import {
  PROJECTS,
  ProjectImage,
  ProjectText,
  ProjectTitle,
} from "../../data/projects/projects";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

function isProjectImage(
  item: ProjectImage | ProjectText | ProjectTitle
): item is ProjectImage {
  return "src" in item;
}

function isProjectTitle(
  item: ProjectImage | ProjectText | ProjectTitle
): item is ProjectTitle {
  return "title" in item;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;

  // Find project by matching the id
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Group content into columns based on newLine breaks
  const columns: Array<Array<ProjectImage | ProjectText | ProjectTitle>> = [];
  let currentColumn: Array<ProjectImage | ProjectText | ProjectTitle> = [];

  project.article.forEach((item, index) => {
    currentColumn.push(item);
    if (item.newLine || index === project.article.length - 1) {
      if (currentColumn.length > 0) {
        columns.push(currentColumn);
        currentColumn = [];
      }
    }
  });

  if (project.article.length === 0) {
    return (
      <NavigationLayout>
        <div className="h-full w-full flex flex-col justify-center items-center font-arial-italic font-light">
          <p>{project.description}</p>
          <p> "In progress."</p>
        </div>
      </NavigationLayout>
    );
  }

  return (
    <NavigationLayout>
      {/* Mobile/Tablet: Single column with vertical scroll */}
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10 lg:hidden">
        <div className="space-y-6">
          {project.article.map((item, index) => (
            <div key={index}>
              {isProjectImage(item) ? (
                <div className="w-full">
                  <div
                    className={item.fit === "cover" ? "relative w-full" : ""}
                  >
                    <Image
                      src={item.src}
                      alt={item.description}
                      width={800}
                      height={800}
                      className={`w-full ${
                        item.fit === "cover"
                          ? "object-cover h-full"
                          : "h-auto object-contain"
                      }`}
                      style={item.fit === "cover" ? { maxHeight: "500px" } : {}}
                    />
                  </div>
                  {item.description && (
                    <p className="text-xs font-arial-italic mt-2 text-gray-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ) : isProjectTitle(item) ? (
                <h2 className="font-arial font-bold tracking-wider">
                  {item.title}
                </h2>
              ) : (
                <p className="font-arial text-sm leading-relaxed">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Multi-column with horizontal scroll */}
      <div className="hidden lg:block w-full h-full min-h-0 overflow-x-auto overflow-y-hidden p-6 px-10">
        <div
          className="flex gap-8 h-full pb-12"
          style={{ minWidth: "min-content" }}
        >
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="flex-shrink-0 overflow-y-auto"
              style={{ width: "400px", maxWidth: "400px" }}
            >
              <div className="space-y-6">
                {column.map((item, index) => (
                  <div key={`${colIndex}-${index}`}>
                    {isProjectImage(item) ? (
                      <div>
                        <Image
                          src={item.src}
                          alt={item.description}
                          width={1200}
                          height={1600}
                          className={`w-full ${
                            item.fit === "cover"
                              ? "object-cover h-auto"
                              : "h-auto object-contain"
                          }`}
                          sizes="400px"
                        />
                        {item.description && (
                          <p className="text-xs font-arial-italic mt-2 text-gray-600">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ) : isProjectTitle(item) ? (
                      <h2 className="font-arial font-bold tracking-wider">
                        {item.title}
                      </h2>
                    ) : (
                      <p className="font-arial text-sm leading-relaxed">
                        {item.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavigationLayout>
  );
}
