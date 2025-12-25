"use client";

import { useState, useEffect, useRef } from "react";
import ImageViewer, { ImageViewerProps } from "./image-viewer";
import { cn } from "../utils";

interface ImageGalleryProps {
  images: ImageViewerProps[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextImage = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClick = () => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Go to next image
    goToNextImage();
    
    // Restart timer
    timerRef.current = setTimeout(goToNextImage, 3000);
  };

  // Set up auto-advance timer
  useEffect(() => {
    timerRef.current = setTimeout(goToNextImage, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [projectIndex, images.length]);

  return (
    <div
      className="w-full h-full col-start-1 row-start-1 place-self-center cursor-pointer relative bg-white"
      onClick={handleClick}
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
