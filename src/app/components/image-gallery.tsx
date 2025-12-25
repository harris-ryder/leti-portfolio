"use client";

import { useState } from "react";
import ImageViewer, { ImageViewerProps } from "./image-viewer";
import { cn } from "../utils";

interface ImageGalleryProps {
  images: ImageViewerProps[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  return (
    <div
      className="w-full h-full col-start-1 row-start-1 place-self-center cursor-pointer relative bg-white"
      onClick={() =>
        setProjectIndex((prevIndex) => (prevIndex + 1) % images.length)
      }
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            index === projectIndex ? "block" : "hidden",
            "w-full h-full"
          )}
        >
          <ImageViewer {...image} priority={index < 3} />
        </div>
      ))}
    </div>
  );
}
