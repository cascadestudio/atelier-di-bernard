"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white border-b border-[var(--blue)] flex items-center justify-between z-10 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "h-[var(--header-height-scrolled)]"
          : "h-[var(--header-height)]"
      }`}
    >
      <Link
        href="/"
        className="flex items-center gap-2 px-4 lg:px-8 py-1 transition-all duration-300 ease-in-out"
      >
        <div className="relative flex items-center gap-2 min-w-0">
          {/* Banniere - visible when not scrolled */}
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              isScrolled
                ? "opacity-0 absolute left-0 pointer-events-none scale-95"
                : "opacity-100 relative scale-100"
            }`}
          >
            <Image
              src="/images/banniere.png"
              alt="L'Atelier di Bernard - Bannière du logo"
              width={160}
              height={40}
              className="h-10 md:h-14 lg:h-16 w-auto"
              priority
              sizes="(max-width: 768px) 40px, (max-width: 1024px) 56px, 64px"
            />
          </div>

          {/* Logo - visible when scrolled */}
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              isScrolled
                ? "opacity-100 relative scale-100"
                : "opacity-0 absolute left-0 pointer-events-none scale-95"
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="L'Atelier di Bernard - Logo"
              width={120}
              height={120}
              className="h-8 md:h-10 lg:h-12 w-auto"
              priority
              sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
            />
          </div>

          {/* Text - visible when not scrolled */}
          <h4
            className={`lowercase transition-all duration-300 ease-in-out whitespace-nowrap ${
              isScrolled
                ? "opacity-0 max-w-0 overflow-hidden ml-0"
                : "opacity-100 max-w-full ml-2"
            }`}
          >
            - atelier partagé -
          </h4>
        </div>
      </Link>

      <nav className="flex items-center h-full">
        <Link
          href="#events"
          className="text-[var(--blue)] border-l-[var(--blue)] border-l-1 px-1 lg:px-9 w-16 md:w-32 lg:w-44 h-full flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <h4 className="text-center">Événements</h4>
        </Link>
        <Link
          href="#artists"
          className="px-1 lg:px-9 bg-[var(--blue)] w-16 md:w-32 lg:w-44 h-full flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <h4 className="text-white text-center">Résident·e·s</h4>
        </Link>
      </nav>
    </header>
  );
}
