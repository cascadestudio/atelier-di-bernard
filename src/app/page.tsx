import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFCDC9] flex flex-col">
      <header className="border-b border-white py-1 md:py-2 lg:py-3 px-4 md:px-5 lg:px-6 flex items-center">
        <Image
          src="/images/banniere.png"
          alt="Banniere"
          width={904}
          height={1286}
          className="h-12 md:h-16 lg:h-32 w-auto self-start"
        />
      </header>
      <div className="flex flex-col items-center justify-center flex-1">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={1405}
          height={1651}
          className="h-24 md:h-32 lg:h-48 w-auto"
        />
        <h1 className="text-white text-center text-stroke-blue mt-6 md:mt-9 drop-shadow-[0_2px_0_var(--blue)] lg:drop-shadow-[0_7px_0_var(--blue)]">
          L&apos;Atelier di Bernard, <br />
          un lieu de création partagé
        </h1>
        <h3 className="text-[var(--blue)] text-center mt-3 md:mt-4">
          97 rue Jean de Bernardy, 13001 Marseille
        </h3>
        <Button href="/home" className="mt-6 md:mt-14 lg:mt-14">
          Entrer
        </Button>
      </div>
    </main>
  );
}
