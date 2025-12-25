"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";

export interface ImageViewerProps {
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

  console.log("src", src);

  if (!src) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>No image available</p>
      </div>
    );
  }

  const config = deviceType === "sm" ? mobile : desktop;
  const sizePercentage = `${config.size}%`;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        src={src}
        style={{
          width: sizePercentage,
        }}
      />
      <p className="font-arial-italic font-normal">{description}</p>
    </div>
  );
}
