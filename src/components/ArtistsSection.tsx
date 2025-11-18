"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { artistsQuery } from "@/sanity/queries";
import ArtistCard, { Artist } from "./ArtistCard";

export default function ArtistsSection() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const fetchedArtists = await client.fetch(artistsQuery);
        setArtists(fetchedArtists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    }

    fetchArtists();
  }, []);

  // Group artists into rows (3 per row on desktop)
  const artistRows: Artist[][] = [];
  for (let i = 0; i < artists.length; i += 3) {
    artistRows.push(artists.slice(i, i + 3));
  }

  return (
    <section id="artists" className="flex flex-col scroll-mt-20">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 border-b border-[var(--blue)] px-4 md:px-8 py-6 md:py-8">
        <h2 className="col-span-1 md:col-span-2 lg:col-span-3 lg:self-center">
          résident·e·s
        </h2>
        <p className="col-span-1 md:col-span-4 lg:col-span-3">
          L&apos;atelier accueille une grande diversité de pratiques : peinture,
          sérigraphie, architecture, design, développement web ou encore stop
          motion. Cette cohabitation favorise les échanges, les collaborations
          et une effervescence créative au quotidien.
        </p>
      </div>

      {/* Artists Grid */}
      <div>
        {/* Mobile/Tablet: Horizontal scroll */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide gap-0">
          {artists.map((artist, index) => (
            <ArtistCard
              key={artist._id}
              artist={artist}
              index={index}
              totalArtists={artists.length}
            />
          ))}
        </div>
        
        {/* Desktop: Grid with snap points for each row */}
        <div className="hidden lg:block">
          {artistRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="lg:grid lg:grid-cols-3 lg:gap-0"
            >
              {row.map((artist, artistIndex) => {
                const globalIndex = rowIndex * 3 + artistIndex;
                return (
                  <ArtistCard
                    key={artist._id}
                    artist={artist}
                    index={globalIndex}
                    totalArtists={artists.length}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {artists.length === 0 && (
          <div className="flex items-center justify-center h-32">
            <p className="text-gray-500">Chargement des artistes...</p>
          </div>
        )}
      </div>
    </section>
  );
}
