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
    <div className="w-full h-full py-14">
      <div className="w-full h-full flex flex-col justify-center items-center pt-18">
        <div className="flex-1 w-full flex justify-center items-center">
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
            }}
            priority={priority}
            sizes={isLargerThan("sm") ? `${width}vw` : "100vw"}
            quality={90}
          />
        </div>

        <Link
          href="/"
          className={
            "font-arial-italic font-normal group hover:underline pb-12"
          }
        >
          {description}
        </Link>
      </div>
    </div>
  );
}
