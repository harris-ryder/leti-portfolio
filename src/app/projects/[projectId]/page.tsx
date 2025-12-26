import { notFound } from "next/navigation";
import NavigationLayout from "../../components/navigation-layout";
import { PROJECTS } from "../data/projects";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  
  // Find project by matching the description as a slug
  const project = PROJECTS.find((p) => 
    p.description.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === projectId
  );

  if (!project) {
    notFound();
  }

  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10">
        <div className="min-h-full flex justify-center items-center">
          <div className="max-w-4xl w-full">
            <h1 className="text-4xl font-arial mb-8 text-center">
              {project.description}
            </h1>
            
            <div className="aspect-video w-full mb-8">
              <img
                src={project.src}
                alt={project.description}
                className="w-full h-full object-contain"
              />
            </div>
            
            <p className="text-center font-arial-italic text-lg">
              Project details coming soon...
            </p>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}