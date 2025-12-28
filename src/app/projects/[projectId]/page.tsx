import { notFound } from "next/navigation";
import Image from "next/image";
import NavigationLayout from "../../components/navigation-layout";
import { PROJECTS, ProjectContent } from "../../data/projects/projects";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

function ColumnScroller({
  elements,
  columnWidth = 400,
  columnGap = 48,
}: {
  elements: ProjectContent[];
  columnWidth?: number;
  columnGap?: number;
}) {
  return (
    <>
      {/* Mobile/Tablet: Single column with vertical scroll */}
      <div className="h-full w-full overflow-y-auto p-6 px-10 lg:hidden">
        <div className="space-y-6">
          {elements.map((el, i) => {
            if (el.type === "newColumn") {
              return null;
            }

            if (el.type === "title") {
              return (
                <h2
                  key={i}
                  className="font-arial font-bold tracking-wider text-2xl"
                >
                  {el.title}
                </h2>
              );
            }

            if (el.type === "image") {
              return (
                <figure key={i}>
                  <Image
                    src={el.src}
                    alt={el.description ?? ""}
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                  {el.description && (
                    <figcaption className="text-xs font-arial-italic mt-2 text-gray-600">
                      {el.description}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (el.type === "text") {
              return (
                <div key={i} className="space-y-1">
                  {el.text.map((line, idx) => (
                    <p key={idx} className="font-arial text-sm leading-relaxed">
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Desktop: Multi-column with horizontal scroll */}
      <div className="hidden lg:block h-full w-full overflow-x-auto overflow-y-hidden px-10">
        <div
          className="h-full box-border py-8"
          style={{
            columnWidth,
            columnGap,
            columnFill: "auto",
            minWidth: "min-content",
          }}
        >
          {elements.map((el, i) => {
            if (el.type === "newColumn") {
              return (
                <div
                  key={i}
                  className="w-0 h-0"
                  style={{ breakBefore: "column" }}
                  aria-hidden="true"
                />
              );
            }

            if (el.type === "title") {
              return (
                <h2
                  key={i}
                  className="mb-5 font-arial font-bold tracking-wider text-2xl"
                  style={{ breakInside: "avoid" }}
                >
                  {el.title}
                </h2>
              );
            }

            if (el.type === "image") {
              return (
                <figure
                  key={i}
                  className="mb-6"
                  style={{ breakInside: "avoid" }}
                >
                  <Image
                    src={el.src}
                    alt={el.description ?? ""}
                    width={1200}
                    height={1600}
                    className="block h-auto w-full object-contain"
                    style={{
                      maxHeight: "calc(100vh - 140px)",
                      maxWidth: el.columnWidth ? `${el.columnWidth}px` : "100%",
                    }}
                  />
                  {el.description && (
                    <figcaption className="mt-2 text-xs font-arial-italic text-gray-600">
                      {el.description}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (el.type === "text") {
              return (
                <div
                  key={i}
                  className="mb-6 inline-block"
                  style={{
                    breakInside: "avoid",
                    maxWidth: el.maxWidth ? `${el.maxWidth}px` : "100%",
                  }}
                >
                  {el.text.map((line, idx) => (
                    <p
                      key={idx}
                      className="m-0 font-arial text-sm leading-relaxed"
                    >
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;

  // Find project by matching the id
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Handle empty projects
  if (project.article.length === 0) {
    return (
      <NavigationLayout>
        <div className="h-full w-full flex flex-col justify-center items-center font-arial-italic font-light">
          <p>{project.description}</p>
          <p>In progress.</p>
        </div>
      </NavigationLayout>
    );
  }

  return (
    <NavigationLayout>
      <ColumnScroller elements={project.article} />
    </NavigationLayout>
  );
}
