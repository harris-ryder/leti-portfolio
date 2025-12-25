import Link from "next/link";
import Image from "next/image";

import ImageGallery from "./components/image-gallery";
import { HOME_IMAGES } from "./data/home";

export default function Home() {
  const firstImage = HOME_IMAGES[0];

  return (
    <div className="grid h-[100dvh] w-screen font-arial font-bold overflow-hidden">
      <div className="col-start-1 row-start-1 h-full w-full flex flex-col justify-between py-9 px-10 z-10 pointer-events-none tracking-wider">
        <div className="flex justify-between pointer-events-auto">
          <Link href="/">LETI RYDER</Link>
          <Link href="/">CV</Link>
        </div>
        <div className="flex justify-between pointer-events-auto">
          <Link href="/">PROJECTS</Link>
          <Link href="/">OTHER WORK</Link>
        </div>
      </div>

      {/* Server-rendered fallback image */}
      {firstImage && (
        <div className="col-start-1 row-start-1 place-self-center w-full h-full flex flex-col justify-center items-center gap-4 pointer-events-none">
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
            sizes={"100vw"}
            quality={90}
          />
          <p className="font-arial-italic font-normal">
            {firstImage.description}
          </p>
        </div>
      )}

      <ImageGallery images={HOME_IMAGES} />
    </div>
  );
}
