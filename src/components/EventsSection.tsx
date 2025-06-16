"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { eventsQuery } from "@/sanity/queries";

interface Event {
  _id: string;
  title: string;
  artist: string;
  date: string;
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  url: string;
}

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await client.fetch(eventsQuery);
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="md:h-[calc(100vh-var(--header-height))] flex flex-col">
      {/* Header section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-[var(--blue)] px-4 md:px-8 py-6 md:py-8 lg:py-14">
        <h2 className="col-span-1 md:col-span-1 lg:col-span-2 lg:self-center">
          ÉVÉNEMENTS
        </h2>
        <p className="col-span-1 md:col-span-4 lg:col-span-3">
          À l&apos;atelier nous organisons des évènements à l&apos;initiative
          des résidents ou de personnes extérieures : vernissages, expositions,
          ateliers participatifs.
        </p>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-end items-center">
          <Link
            href="/evenements"
            className="text-[var(--blue)] hover:underline font-medium"
          >
            TOUT VOIR
          </Link>
        </div>
      </div>

      {/* Events list */}
      <div className="flex-1 overflow-y-auto relative">
        {events.map((event, index) => (
          <a
            key={event._id}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`grid grid-cols-1 md:grid-cols-6 gap-4 px-4 md:px-8 py-6 md:py-8 lg:py-14 block ${
              index < events.length - 1 ? "border-b border-[var(--blue)]" : ""
            } hover:bg-gray-50 transition-colors duration-200 group`}
            onMouseEnter={() => setHoveredEvent(event._id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <div className="col-span-1 md:col-span-4 lg:col-span-5">
              <h3 className="text-lg md:text-xl font-medium mb-2">
                {event.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {event.artist}
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-start md:justify-end items-center">
              <time className="text-sm md:text-base font-medium text-[var(--blue)]">
                {event.date}
              </time>
            </div>

            {/* Hover image - positioned relative to the row */}
            {hoveredEvent === event._id && event.image && (
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white shadow-lg border rounded-lg overflow-hidden w-48">
                  <Image
                    src={urlFor(event.image).width(192).height(128).url()}
                    alt={event.image.alt || event.title}
                    width={192}
                    height={128}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            )}
          </a>
        ))}

        {/* Empty state */}
        {events.length === 0 && (
          <div className="flex items-center justify-center h-32">
            <p className="text-gray-500">
              No events found. Add some events in Sanity Studio.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
