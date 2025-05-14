"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
const images = [
  "/images/hero-image-1.jpg",
  "/images/hero-image-2.jpg",
  "/images/hero-image-3.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div
          key={currentIndex}
          className="h-full bg-[var(--pink)] animate-progress"
          style={{ animationDuration: `${duration}ms` }}
        ></div>
      </div>
    </div>
  );
}
