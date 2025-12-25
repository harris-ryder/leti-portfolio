"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";

export interface ImageViewerProps {
  src: string;
  description?: string;
  width: number;
  priority?: boolean;
}

export default function ImageViewer({
  src,
  description,
  width,
  priority = false,
}: ImageViewerProps) {
  const { isLargerThan } = useDeviceType();

  if (!src) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>No image available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <Image
        src={src}
        alt={description || "Gallery image"}
        width={1000}
        height={1000}
        style={{
          width: isLargerThan("sm") ? `${width}%` : "100%",
          height: "auto",
          maxHeight: "calc(100vh - 120px)",
          objectFit: "contain",
        }}
        priority={priority}
        sizes={isLargerThan("sm") ? `${width}vw` : "100vw"}
        quality={90}
      />
      <p className="fixed bottom-[100px] left-1/2 -translate-x-1/2 font-arial-italic font-normal">
        {description}
      </p>
    </div>
  );
}
