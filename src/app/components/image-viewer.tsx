"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";
import Link from "next/link";

export interface ImageViewerProps {
  src: string;
  description?: string;
  width: number;
  priority?: boolean;
  onImageClick?: () => void;
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
    <div className="w-full max-h-full h-full flex flex-col items-center">
      <Link
        href="/"
        className={
          "font-arial-italic font-normal group hover:underline pb-12 opacity-0 pointer-events-none"
        }
      >
        {description}
      </Link>
      <div className="flex-1 w-full min-h-0 flex items-center justify-center">
        <Image
          onClick={onImageClick}
          src={src}
          alt={description || "Gallery image"}
          width={1000}
          height={1000}
          style={{
            width: isLargerThan("sm") ? `${width}%` : "100%",
            maxHeight: "100%",
            height: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
          priority={priority}
          sizes={isLargerThan("sm") ? `${width}%` : "100%"}
        />
      </div>

      <Link
        href="/"
        className={"font-arial-italic font-normal group hover:underline pb-12"}
      >
        {description}
      </Link>
    </div>
  );
}
