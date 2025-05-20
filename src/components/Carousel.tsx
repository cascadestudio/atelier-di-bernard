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
  const [progress, setProgress] = useState(0);
  const [resetting, setResetting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const duration = 3000; // ms to fill bar
  const pause = 500; // ms to hold at 100%
  const tick = duration / 100;
  const resetDur = 300; // ms for bar reset animation
  const fadeDur = 600; // ms for image fade

  // handle bar & slide timing
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count <= 100) {
        setProgress(count);
      } else if (count === 101) {
        // just hit 100% → start resetting
        setResetting(true);
      } else if (count >= 100 + pause / tick) {
        // Start transition before changing slide
        setTransitioning(true);

        // Save current index for crossfade
        setPrevIndex(currentIndex);

        // after pause, advance slide
        setTimeout(() => {
          setCurrentIndex((i) => (i + 1) % images.length);
          setProgress(0);
          setResetting(false);
          setLoaded(false); // trigger fade-in

          // End transition after new slide is displayed
          setTimeout(() => {
            setTransitioning(false);
          }, fadeDur * 0.7);
        }, fadeDur * 0.3);

        count = 0;
      }
    }, tick);

    return () => clearInterval(interval);
  }, [currentIndex, tick]);

  const key = `slide-${currentIndex}`;

  return (
    <div className="relative w-full h-full flex flex-col lg:gap-52">
      {/* Image container with fade */}
      <div className="relative flex-grow h-[195px] overflow-hidden border border-[var(--blue)]">
        {/* Current image with fade in */}
        <div
          className="absolute inset-0 transition-opacity duration-600"
          style={{
            opacity: loaded ? 1 : 0,
            transitionDuration: `${fadeDur}ms`,
          }}
        >
          <Image
            key={key}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            onLoadingComplete={() => setLoaded(true)}
            priority
          />
        </div>

        {/* Previous image that fades out (crossfade effect) */}
        {transitioning && (
          <div
            className="absolute inset-0 transition-opacity duration-600"
            style={{
              opacity: transitioning ? 0 : 1,
              transitionDuration: `${fadeDur}ms`,
            }}
          >
            <Image
              src={images[prevIndex]}
              alt={`Previous slide ${prevIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Progress bar + counters */}
      <div className="mt-4 flex items-center h-[15px]">
        <h3 className="text-[var(--blue)] text-sm font-medium">
          {String(currentIndex + 1).padStart(2, "0")}
        </h3>

        <div className="mx-4 flex-1 relative h-[9px]">
          <div className="absolute inset-0 rounded-full border border-[var(--blue)] bg-white overflow-hidden shadow-[0_2px_0_var(--blue)]">
            <div
              className="h-full bg-[var(--pink)] rounded-full"
              style={{
                width: `${progress}%`,
                transition: resetting
                  ? `width ${resetDur}ms ease-out`
                  : `width ${tick}ms linear`,
              }}
            />
          </div>
        </div>

        <h3 className="text-[var(--blue)] text-sm font-medium">
          {String(images.length).padStart(2, "0")}
        </h3>
      </div>
    </div>
  );
}
