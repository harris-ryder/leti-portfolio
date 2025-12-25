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
  const { deviceType } = useDeviceType();

  if (!src) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>No image available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div
        style={{
          width: "100%",
          maxHeight: "calc(100vh - 120px)",
          position: "relative",
          aspectRatio: "16 / 9",
        }}
      >
        <Image
          src={src}
          alt={description || "Gallery image"}
          fill
          style={{ objectFit: "contain" }}
          priority={priority}
          sizes={deviceType === "sm" ? "100vw" : `${width}vw`}
          quality={90}
        />
      </div>
      <p className="font-arial-italic font-normal">{description}</p>
    </div>
  );
}
