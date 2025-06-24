import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-[var(--blue)] flex items-center justify-between z-10">
      <Link href="/" className="flex items-center gap-2 px-4 lg:px-8 py-1">
        <Image
          src="/images/banniere.png"
          alt="L'Atelier di Bernard - Bannière du logo"
          width={160}
          height={40}
          className="h-10 md:h-14 lg:h-16 w-auto self-start"
          priority
          sizes="(max-width: 768px) 40px, (max-width: 1024px) 56px, 64px"
        />
        <h4 className="lowercase">- atelier partagé -</h4>
      </Link>

      <nav className="flex items-center">
        <Link
          href="/events"
          className="text-[var(--blue)] border-l-[var(--blue)] border-l-1 px-1 lg:px-9 py-4 md:py-7 lg:py-6 w-16 md:w-32 lg:w-44"
        >
          <h4 className="text-center">Événements</h4>
        </Link>
        <Link
          href="/artists"
          className="px-1 lg:px-9 py-4 md:py-7 lg:py-6 bg-[var(--blue)] w-16 md:w-32 lg:w-44"
        >
          <h4 className="text-white text-center">Artistes</h4>
        </Link>
      </nav>
    </header>
  );
}
