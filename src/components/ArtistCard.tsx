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

  const cardContent = (
    <>
      {/* Artist Image */}
      <div className="relative w-full flex justify-center items-center aspect-square lg:h-[530px] lg:aspect-auto flex-1">
        <div className="relative w-full h-[105%] lg:w-[360px] lg:h-[530px] overflow-hidden bg-[--background]">
          <div className="pod_image">
            <svg
              viewBox="0 0 810 810"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full z-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M342.941 690.825C269.987 707.143 202.158 695.855 157.898 651.595C113.639 607.336 102.35 539.507 118.668 466.553C135.002 393.528 179.093 314.604 246.849 246.849C314.604 179.093 393.528 135.002 466.553 118.668C539.507 102.35 607.336 113.639 651.595 157.898C695.855 202.158 707.144 269.987 690.826 342.941C674.492 415.966 630.401 494.889 562.645 562.645C494.89 630.401 415.966 674.491 342.941 690.825ZM161.434 648.06C246.686 733.312 424.732 693.488 559.11 559.109C693.488 424.731 733.312 246.686 648.06 161.434C562.808 76.1816 384.762 116.006 250.384 250.384C116.006 384.762 76.1818 562.808 161.434 648.06Z"
                fill="#FEF9F3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M342.068 686.922C269.905 703.063 203.68 691.72 160.727 648.767C117.774 605.815 106.431 539.589 122.572 467.426C138.716 395.249 182.375 316.98 249.677 249.677C316.979 182.375 395.249 138.716 467.426 122.572C539.589 106.431 605.814 117.774 648.767 160.727C691.72 203.68 703.063 269.905 686.922 342.068C670.778 414.245 627.119 492.515 559.817 559.817C492.514 627.119 414.245 670.778 342.068 686.922ZM161.434 648.06C246.686 733.312 424.732 693.488 559.11 559.11C693.488 424.732 733.312 246.686 648.06 161.434C562.808 76.182 384.762 116.006 250.384 250.384C116.006 384.763 76.1818 562.808 161.434 648.06Z"
                fill="black"
              />
            </svg>
            <div className="pod_image_hold">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={artist.image?.alt || artist.name}
                  fill
                  className="object-cover"
                  style={{ transform: "rotate(-45deg) scale(1.3)" }}
                />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 text-3xl">
                    {artist.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
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
