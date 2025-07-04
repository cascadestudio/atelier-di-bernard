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
    ${artist.externalLink ? "cursor-pointer" : ""}
  `;

  const imageUrl = artist.image
    ? urlFor(artist.image).width(600).height(800).url()
    : null;

  console.log("Artist:", artist.name, "ImageUrl:", imageUrl);

  const cardContent = (
    <>
      {/* Artist Image */}
      <div className="relative w-full aspect-square lg:h-[530px] lg:aspect-auto flex-1">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={artist.image?.alt || artist.name}
            className="w-full h-full object-cover"
            width={600}
            height={800}
          />
        ) : (
          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
            <span className="text-gray-500 text-3xl">
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
      className={cardClasses + " pod group"}
    >
      {cardContent}
    </a>
  ) : (
    <div className={cardClasses + " pod group"}>{cardContent}</div>
  );
}
