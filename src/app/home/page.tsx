import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="h-screen pt-[49px]">
        <div className="w-full h-1/2 bg-[var(--pink)] flex flex-col justify-end px-4">
          <h3 className="text-[var(--blue)]">L&apos;Atelier di Bernard</h3>
          <h1>Un espace collectif de création</h1>
        </div>
      </div>
    </main>
  );
}
