import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function Button({
  children,
  href,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        bg-white 
        rounded-[50px] 
        px-6 
        py-3 
        inline-block
        text-center
        border-1
        border-[var(--blue)]
        drop-shadow-[0_2px_0_var(--blue)]
        hover:drop-shadow-none
        hover:translate-y-1
        transition-all
        duration-300
        ${className}
      `}
    >
      <h2 className="m-0">{children}</h2>
    </Link>
  );
}
