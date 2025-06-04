import Image from "next/image";

export default function PresentationSection() {
  return (
    <section className="md:h-[calc(100vh-var(--header-height))] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-[var(--blue)] px-4 md:px-8 py-6 md:py-8 lg:py-14">
        <h2 className="col-span-1 md:col-span-2 lg:col-span-3 lg:self-center">
          Le lieu
        </h2>
        <p className="col-span-1 md:col-span-4 lg:col-span-3">
          L&apos;Atelier di Bernard est né d&apos;un collectif
          d&apos;architectes et d&apos;artistes locaux réunis par la volonté de
          donner vie à un lieu ancré dans son quartier et sa ville, Marseille.
          <br />
          C&apos;est à la fois un lieu de travail pour artistes et
          professionnels mais aussi un espace culturel à travers ses expositions
          et ateliers participatifs.
          <br />
        </p>
      </div>
      <div className="relative aspect-square md:aspect-auto md:flex-1 w-full border-b border-[var(--blue)] px-4 md:px-8 py-6 md:py-8 lg:py-14">
        <div className="relative w-full h-full">
          <Image
            src="/images/presentation-atelier.jpg"
            alt="Présentation de l'Atelier di Bernard"
            fill
            className="object-cover border border-[var(--blue)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
