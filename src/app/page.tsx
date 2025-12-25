import Link from "next/link";
import Image from "next/image";

import ImageGallery from "./components/image-gallery";
import { HOME_IMAGES } from "./data/home";
import NavigationLayout from "./components/navigation-layout";

export default function Home() {
  const firstImage = HOME_IMAGES[0];

  return (
    <NavigationLayout>
      {/* Server-rendered fallback image */}
      {firstImage && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 pointer-events-none">
          <Image
            src={firstImage.src}
            alt={firstImage.description || "Gallery image"}
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
            {firstImage.description}
          </p>
        </div>
      )}

      <div className="w-full h-full pointer-events-auto z-10 relative">
        <ImageGallery images={HOME_IMAGES} />
      </div>
    </NavigationLayout>
  );
}
