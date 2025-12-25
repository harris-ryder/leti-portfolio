"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";

export interface ImageViewerProps {
  src: string;
  description?: string;
  width: number;
}

export default function ImageViewer({
  src,
  description,
  width,
}: ImageViewerProps) {
  const { deviceType } = useDeviceType();

  console.log("src", src);

  if (!src) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>No image available</p>
      </div>
    );
  }

  const sizePercentage = deviceType === "sm" ? "100%" : `${width}%`;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        src={src}
        style={{
          width: `${width}%`,
        }}
      />
      <p className="font-arial-italic font-normal">{description}</p>
    </div>
  );
}
