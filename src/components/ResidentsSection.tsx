"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { artistsQuery } from "@/sanity/queries";

interface Artist {
  _id: string;
  name: string;
  practice: string;
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
}

export default function ResidentsSection() {
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

  return (
    <section className=" flex flex-col">
      {/* Header */}
      <div className="border-b border-[var(--blue)] px-4 md:px-8 py-6 md:py-8">
        <h2 className="mb-4">Résidents</h2>
        <p className="text-sm d:text-base">
          L&apos;atelier accueille une grande diversité de pratiques : peinture,
          sérigraphie, architecture, design, développement web ou encore stop
          motion. Cette cohabitation favorise les échanges, les collaborations
          et une effervescence créative au quotidien.
        </p>
      </div>

      {/* Artists Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {artists.map((artist, index) => (
            <div
              key={artist._id}
              className={`border-b border-[var(--blue)] ${
                index % 3 !== 2 ? "md:border-r" : ""
              } border-[var(--blue)]  py-6 md:py-8 flex flex-col`}
            >
              {/* Artist Image */}
              <div className="relative w-full aspect-square mb-4 overflow-hidden">
                {artist.image ? (
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={urlFor(artist.image).width(400).height(400).url()}
                      alt={artist.image.alt || artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-2xl">
                      {artist.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Artist Info */}
              <div className="text-center border-t border-b border-[var(--blue)] py-4">
                <h3 className="mb-2">{artist.name}</h3>
                <h4 className="text-[var(--blue)] uppercase">
                  {artist.practice}
                </h4>
              </div>
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
