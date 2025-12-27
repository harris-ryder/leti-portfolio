"use client";

import Image from "next/image";
import { useDeviceType } from "../hooks/use-device-type";
import Link from "next/link";
import { cn } from "../utils";

export interface ImageViewerProps {
  src: string;
  projectDescription: string;
  projectId?: string;
  desktopWidth: number;
  mobileWidth: number;
  priority?: boolean;
  onImageClick?: () => void;
}

export default function ImageViewer({
  src,
  projectDescription,
  projectId,
  desktopWidth,
  mobileWidth,
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
        {projectDescription}
      </Link>
      <div className="flex-1 w-full min-h-0 flex items-center justify-center">
        <Image
          onClick={onImageClick}
          src={src}
          alt={projectDescription || "Gallery image"}
          width={1000}
          height={1000}
          style={{
            width: isLargerThan("sm") ? `${desktopWidth}%` : `${mobileWidth}%`,
            maxHeight: "100%",
            height: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
          priority={priority}
          sizes={isLargerThan("sm") ? `${desktopWidth}%` : `${mobileWidth}%`}
        />
      </div>

      <Link
        href={projectId ? `/projects/${projectId}` : "/"}
        className={cn(
          "font-arial-italic font-normal group pb-12 cursor-default",
          projectId && "hover:underline cursor-pointer"
        )}
      >
        {projectDescription}
      </Link>
    </div>
  );
}
