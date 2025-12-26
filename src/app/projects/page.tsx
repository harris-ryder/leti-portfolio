import Image from "next/image";
import Link from "next/link";
import NavigationLayout from "../components/navigation-layout";
import { PROJECTS } from "./data/projects";

export default function Projects() {
  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10">
        <div className="min-h-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.id}`}
              className="group cursor-pointer pointer-events-auto"
            >
              <div className="aspect-square overflow-hidden mb-3">
                <Image
                  src={project.src}
                  alt={project.description}
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-arial-italic font-light text-sm text-center">
                {project.description}
              </p>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}
