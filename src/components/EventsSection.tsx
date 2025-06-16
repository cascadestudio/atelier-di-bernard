import Link from "next/link";

interface Event {
  id: string;
  title: string;
  artist: string;
  date: string;
  slug?: string;
}

// Sample events data - you can replace this with your actual data source
const events: Event[] = [
  {
    id: "1",
    title: "EXPOSITION 1",
    artist: "THÉOTIME DUPAS",
    date: "30 MARS 2023",
    slug: "exposition-1",
  },
  {
    id: "2",
    title: "EXPOSITION 2",
    artist: "THÉOTIME DUPAS",
    date: "30 MARS 2023",
    slug: "exposition-2",
  },
  {
    id: "3",
    title: "EXPOSITION 3",
    artist: "THÉOTIME DUPAS",
    date: "30 MARS 2023",
    slug: "exposition-3",
  },
  {
    id: "4",
    title: "EXPOSITION 4",
    artist: "THÉOTIME DUPAS",
    date: "30 MARS 2023",
    slug: "exposition-4",
  },
  {
    id: "5",
    title: "EXPOSITION 5",
    artist: "THÉOTIME DUPAS",
    date: "30 MARS 2023",
    slug: "exposition-5",
  },
];

export default function EventsSection() {
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
      <div className="flex-1 overflow-y-auto">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`grid grid-cols-1 md:grid-cols-6 gap-4 px-4 md:px-8 py-6 md:py-8 lg:py-14 ${
              index < events.length - 1 ? "border-b border-[var(--blue)]" : ""
            } hover:bg-gray-50 transition-colors duration-200`}
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
          </div>
        ))}
      </div>
    </section>
  );
}
