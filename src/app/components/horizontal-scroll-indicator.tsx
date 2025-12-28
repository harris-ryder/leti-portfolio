"use client";

import { useEffect, useRef } from "react";

export default function HorizontalScrollIndicator() {
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const findScrollContainer = () => {
      const container = document.querySelector(
        ".lg\\:block.h-full.w-full.overflow-x-auto"
      ) as HTMLElement;
      scrollContainerRef.current = container;
      return container;
    };

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const progressBar = progressBarRef.current;
      if (!container || !progressBar) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        const progress = Math.min((scrollLeft / maxScroll) * 100, 100);
        progressBar.style.width = `${progress}%`;
      } else {
        progressBar.style.width = "0%";
      }
    };

    const container = findScrollContainer();
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(container);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none hidden lg:block">
      <div
        ref={progressBarRef}
        className="h-full bg-black transition-all duration-75 ease-out"
        style={{
          width: "0%",
        }}
      />
    </div>
  );
}
