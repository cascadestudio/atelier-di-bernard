import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFCDC9] flex flex-col">
      <header className="border-b border-white py-1 px-4 flex items-center h-14">
        <Image
          src="/images/banniere.png"
          alt="Banniere"
          width={126}
          height={89}
          className="h-12 w-auto self-start"
        />
      </header>
      <div className="flex flex-col items-center justify-center flex-1">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={193}
          height={165}
          className="h-24 w-auto"
        />
        <h1 className="text-white text-center text-stroke-blue mt-6 drop-shadow-[0_2px_0_var(--blue)]">
          L&apos;Atelier di Bernard, <br />
          un lieu de création partagé
        </h1>
        <h3 className="text-[var(--blue)] text-center mt-3">
          97 rue Jean de Bernardy, 13001 Marseille
        </h3>
        <Button href="/" className="mt-6">
          Entrer
        </Button>
      </div>
    </main>
  );
}
