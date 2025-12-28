"use client";

import { useEffect, useRef } from "react";

export default function VerticalScrollIndicator() {
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const findScrollContainer = () => {
      const container = document.querySelector(
        ".lg\\:hidden.h-full.w-full.overflow-y-auto"
      ) as HTMLElement;
      scrollContainerRef.current = container;
      return container;
    };

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const progressBar = progressBarRef.current;
      if (!container || !progressBar) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll > 0) {
        const progress = Math.min((scrollTop / maxScroll) * 100, 100);
        progressBar.style.height = `${progress}%`;
      } else {
        progressBar.style.height = "0%";
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
    <div className="fixed top-0 bottom-0 right-0 w-[2px] bg-transparent z-50 pointer-events-none lg:hidden">
      <div
        ref={progressBarRef}
        className="w-full bg-black transition-all duration-75 ease-out"
        style={{
          height: "0%",
        }}
      />
    </div>
  );
}