import Image from "next/image";

import ImageGallery from "./components/image-gallery";
import NavigationLayout from "./components/navigation-layout";
import { PROJECTS } from "./data/projects/projects";

const HOME_IMAGES = PROJECTS.flatMap((project) =>
  project.homepageCovers.map((cover) => ({
    ...cover,
    projectId: project.id,
    projectDescription: project.description,
  }))
);

export default function Home() {
  const homeImages = [
    ...HOME_IMAGES,
    {
      projectDescription: "Pidgin 33 Cover Design",
      src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/misc/1.webp",
      desktopWidth: 50,
      mobileWidth: 100,
    },
    {
      projectDescription: "Life Drawing",
      src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/misc/4.webp",
      desktopWidth: 50,
      mobileWidth: 80,
    },
  ];
  const firstImage = homeImages[0];

  return (
    <NavigationLayout>
      {/* Server-rendered fallback image */}
      {firstImage && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 pointer-events-none">
          <Image
            src={firstImage.src}
            alt={firstImage.src || "Gallery image"}
            width={2000}
            height={2000}
            style={{
              width: `${firstImage.desktopWidth}%`,
              height: "auto",
              maxHeight: "calc(100vh - 120px)",
              objectFit: "contain",
            }}
            priority
            sizes={"100%"}
            quality={90}
          />
        </div>
      )}

      <div className="w-full h-full pointer-events-auto z-10 relative">
        <ImageGallery images={homeImages} />
      </div>
    </NavigationLayout>
  );
}
