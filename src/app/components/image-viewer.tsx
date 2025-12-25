"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";

interface ImageViewerProps {
  src: string;
  description?: string;
  desktop: {
    size: number;
    constraint: "width" | "height";
  };
  mobile: {
    size: number;
    constraint: "width" | "height";
  };
}

export default function ImageViewer({
  src,
  description,
  desktop,
  mobile,
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
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src={src}
        alt={description || "Image"}
        className="object-contain"
        width={deviceType === "sm" ? desktop.size : mobile.size}
        height={deviceType === "sm" ? desktop.size : mobile.size}
      />
      <p className="font-arial-italic">{description}</p>
    </div>
  );
}
