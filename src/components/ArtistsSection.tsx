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

  return (
    <section className=" flex flex-col">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-[var(--blue)] px-4 md:px-8 py-6 md:py-8">
        <h2 className="col-span-1 md:col-span-2 lg:col-span-3 lg:self-center">
          Résidents
        </h2>
        <p className="col-span-1 md:col-span-4 lg:col-span-3">
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
              className={`${
                index % 3 !== 2 ? "md:border-r" : ""
              } border-[var(--blue)] flex flex-col`}
            >
              {/* Artist Image */}
              <div className="relative w-full overflow-hidden flex justify-center items-center h-[200px] md:h-[530px]">
                {artist.image ? (
                  <div
                    className="relative overflow-hidden bg-gray-100 w-[120px] h-[180px] md:w-[360px] md:h-[530px]"
                    style={{
                      borderRadius: "50%",
                      transform: "rotate(45deg)",
                    }}
                  >
                    <Image
                      src={urlFor(artist.image).width(600).height(800).url()}
                      alt={artist.image.alt || artist.name}
                      fill
                      className="object-cover"
                      style={{ transform: "rotate(-45deg) scale(1.3)" }}
                    />
                  </div>
                ) : (
                  <div
                    className="bg-gray-200 flex items-center justify-center w-[120px] h-[180px] md:w-[360px] md:h-[530px]"
                    style={{
                      borderRadius: "50%",
                      transform: "rotate(45deg)",
                    }}
                  >
                    <span
                      className="text-gray-400 text-2xl"
                      style={{ transform: "rotate(-45deg)" }}
                    >
                      {artist.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Artist Info */}
              <div className="flex flex-row justify-between items-center lg:flex-col lg:items-start lg:gap-2 border-t border-b border-[var(--blue)] px-4 py-3 md:p-6">
                <h2>{artist.name}</h2>
                <h4 className="text-[var(--blue)]">{artist.practice}</h4>
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
