"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";
import Link from "next/link";

export interface ImageViewerProps {
  src: string;
  description?: string;
  width: number;
  priority?: boolean;
  onImageClick: () => void;
}

export default function ImageViewer({
  src,
  description,
  width,
  priority = false,
  onImageClick,
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
        onClick={onImageClick}
        src={src}
        alt={description || "Gallery image"}
        width={1000}
        height={1000}
        style={{
          width: isLargerThan("sm") ? `${width}%` : "100%",
          height: "auto",
          maxHeight: "calc(100vh - 120px)",
          objectFit: "contain",
          cursor: "pointer",
          border: "1px solid red",
        }}
        priority={priority}
        sizes={isLargerThan("sm") ? `${width}vw` : "100vw"}
        quality={90}
      />

      <Link
        href="/"
        className="fixed bottom-[100px] left-1/2 -translate-x-1/2 font-arial-italic font-normal group"
      >
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {description}
      </Link>
    </div>
  );
}
