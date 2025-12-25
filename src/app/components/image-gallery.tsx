"use client";

import { useState } from "react";
import ImageViewer, { ImageViewerProps } from "./image-viewer";

interface ImageGalleryProps {
  images: ImageViewerProps[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  return (
    <div
      className="col-start-1 row-start-1 place-self-center"
      onClick={() =>
        setProjectIndex((prevIndex) => (prevIndex + 1) % images.length)
      }
    >
      <ImageViewer {...images[projectIndex]} />
    </div>
  );
}
