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
        md:px-10
        lg:px-16
        py-3
        md:py-5
        inline-block
        text-center
        border-1
        border-[var(--blue)]
        shadow-[0_2px_0_var(--blue)]
        lg:shadow-[0_7px_0_var(--blue)]
        hover:shadow-none
        hover:translate-y-1
        transition-all
        duration-300
        ${className}
      `}
    >
      <h2 className="m-0 lg:text-2xl">{children}</h2>
    </Link>
  );
}
