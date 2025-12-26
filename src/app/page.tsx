import Link from "next/link";
import Image from "next/image";

import ImageGallery from "./components/image-gallery";
import NavigationLayout from "./components/navigation-layout";
import { PROJECTS } from "./data/projects/projects";
import { ImageViewerProps } from "./components/image-viewer";

const HOME_IMAGES = PROJECTS.flatMap((project) =>
  project.homepageCovers.map((cover) => ({
    ...cover,
    projectId: project.id,
    projectDescription: project.description,
  }))
);

export default function Home() {
  const firstImage = HOME_IMAGES[0];

  console.log(HOME_IMAGES);

  return (
    <NavigationLayout>
      {/* Server-rendered fallback image */}
      {firstImage && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 pointer-events-none">
          <Image
            src={firstImage.src}
            alt={firstImage.src || "Gallery image"}
            width={1000}
            height={1000}
            style={{
              width: `${firstImage.width}%`,
              height: "auto",
              maxHeight: "calc(100vh - 120px)",
              objectFit: "contain",
            }}
            priority
            sizes={"100%"}
            quality={90}
          />
          <p className="font-arial-italic font-normal">
            {firstImage.projectDescription}
          </p>
        </div>
      )}

      <div className="w-full h-full pointer-events-auto z-10 relative">
        <ImageGallery images={HOME_IMAGES} />
      </div>
    </NavigationLayout>
  );
}
