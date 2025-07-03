import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export interface Artist {
  _id: string;
  name: string;
  practice: string;
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  externalLink?: string;
}

interface ArtistCardProps {
  artist: Artist;
  index: number;
  totalArtists: number;
}

export default function ArtistCard({
  artist,
  index,
  totalArtists,
}: ArtistCardProps) {
  const cardClasses = `
    flex-shrink-0 w-[80%] md:w-[40%] lg:w-auto
    lg:flex-shrink
    border-[var(--blue)] flex flex-col items-stretch
    ${index < totalArtists - 1 ? "border-r" : ""}
    ${index % 3 !== 2 ? "lg:border-r" : ""}
    ${artist.externalLink ? "hover:bg-gray-50 transition-colors cursor-pointer" : ""}
  `;

  const cardContent = (
    <>
      {/* Artist Image */}
      <div className="relative w-full overflow-hidden flex justify-center items-center aspect-square lg:h-[530px] lg:aspect-auto flex-1">
        {artist.image ? (
          <div
            className="relative overflow-hidden bg-gray-100 w-[70%] h-[105%] lg:w-[360px] lg:h-[530px]"
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
            className="bg-gray-200 flex items-center justify-center w-[70%] h-[105%] lg:w-[360px] lg:h-[530px]"
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
      <div className="flex flex-row justify-between items-center lg:flex-col lg:items-start lg:gap-2 border-t border-b border-[var(--blue)] px-4 py-3 md:p-6 flex-shrink-0">
        <h2>{artist.name}</h2>
        <h4 className="text-[var(--blue)]">{artist.practice}</h4>
      </div>
    </>
  );

  return artist.externalLink ? (
    <a
      href={artist.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
      aria-label={`Visit ${artist.name}'s website`}
    >
      {cardContent}
    </a>
  ) : (
    <div className={cardClasses}>{cardContent}</div>
  );
}
