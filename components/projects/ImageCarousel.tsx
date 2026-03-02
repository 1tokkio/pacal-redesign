"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

export default function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = images.length;

  const go = useCallback(
    (index: number) => {
      if (isAnimating || total <= 1) return;
      setIsAnimating(true);
      setCurrent((index + total) % total);
      setTimeout(() => setIsAnimating(false), 350);
    },
    [isAnimating, total]
  );

  const prev = useCallback(() => go(current - 1), [go, current]);
  const next = useCallback(() => go(current + 1), [go, current]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // No images → placeholder
  if (total === 0) {
    return (
      <div className="w-full aspect-[16/7] bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center gap-4">
        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Building2 className="w-12 h-12 text-primary" />
        </div>
        <p className="text-text-muted text-sm">Sin imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/7] bg-gray-900 overflow-hidden group select-none">
      {/* Images */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-350 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`${projectName} - imagen ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
          />
        </div>
      ))}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

      {/* Navigation arrows — only if more than 1 image */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm
                       hover:bg-white/40 text-white flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm
                       hover:bg-white/40 text-white flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`rounded-full transition-all duration-200 focus:outline-none ${
                i === current
                  ? "w-6 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}

      {/* Counter badge */}
      {total > 1 && (
        <div className="absolute top-4 right-4 z-30 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
          {current + 1} / {total}
        </div>
      )}
    </div>
  );
}
