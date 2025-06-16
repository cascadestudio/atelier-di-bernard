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
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

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

  const handleMouseEnter = (eventId: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left + rect.width * 0.75,
      y: rect.top + rect.height / 2,
    });
    setHoveredEvent(eventId);
  };

  return (
    <section className="md:h-[calc(100vh-var(--header-height))] flex flex-col relative">
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
      <div className="flex-1 overflow-y-auto">
        {events.map((event, index) => (
          <a
            key={event._id}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`grid grid-cols-1 md:grid-cols-6 gap-4 px-4 md:px-8 py-6 md:py-8 lg:py-14 relative overflow-visible ${
              index < events.length - 1 ? "border-b border-[var(--blue)]" : ""
            } transition-all duration-300 group`}
            onMouseEnter={(e) => handleMouseEnter(event._id, e)}
            onMouseLeave={() => setHoveredEvent(null)}
            style={{
              backgroundImage:
                hoveredEvent === event._id && event.image
                  ? `url(${urlFor(event.image).width(800).height(400).url()})`
                  : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blue overlay when hovered */}
            {hoveredEvent === event._id && (
              <div className="absolute inset-0 bg-[var(--blue)] opacity-80 transition-opacity duration-300" />
            )}

            {/* Content with higher z-index */}
            <div className="relative z-10 col-span-1 md:col-span-4 lg:col-span-5">
              <h2
                className={`transition-colors duration-300 ${
                  hoveredEvent === event._id ? "text-white" : ""
                }`}
              >
                {event.title}
              </h2>
              <h4
                className={`hidden md:block text-base transition-colors duration-300 ${
                  hoveredEvent === event._id ? "text-white" : ""
                }`}
              >
                {event.artist}
              </h4>
            </div>
            <div className="relative z-10 col-span-1 md:col-span-2 lg:col-span-1 flex justify-between md:justify-end items-center">
              <h4
                className={`md:hidden transition-colors duration-300 ${
                  hoveredEvent === event._id ? "text-white" : ""
                }`}
              >
                {event.artist}
              </h4>
              <h4
                className={`transition-colors duration-300 ${
                  hoveredEvent === event._id
                    ? "text-white"
                    : "text-[var(--blue)]"
                }`}
              >
                <time>{event.date}</time>
              </h4>
            </div>
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

      {/* Portrait hover image - fixed positioning based on row position */}
      {hoveredEvent &&
        (() => {
          const event = events.find((e) => e._id === hoveredEvent);
          return event?.image ? (
            <div
              className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
              style={{
                left: hoverPosition.x,
                top: hoverPosition.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white shadow-xl border rounded-lg overflow-hidden">
                <Image
                  src={urlFor(event.image).width(192).height(288).url()}
                  alt={event.image.alt || event.title}
                  width={192}
                  height={288}
                  className="object-cover"
                />
              </div>
            </div>
          ) : null;
        })()}
    </section>
  );
}
