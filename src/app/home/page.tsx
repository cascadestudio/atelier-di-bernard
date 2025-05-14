import Header from "@/components/Header";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="h-screen pt-[49px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-[var(--pink)] flex flex-col justify-end px-4">
          <h3 className="text-[var(--blue)]">L&apos;Atelier di Bernard</h3>
          <h1>Un espace collectif de création</h1>
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
          <Carousel />
        </div>
      </div>
    </main>
  );
}
