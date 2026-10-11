import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { events } from "@/data/content";
import { img, photos } from "@/data/site";
import { EventRow } from "@/components/cards/EventRow";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming conferences, workshops, seminars and webinars organised by Bangladesh Pharmaceutical Society, including the National Pharmacy Convention.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const flagship = events.find((e) => e.type === "Conference") ?? sorted[0];

  const eventsJsonLd = events.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: e.date,
    description: e.text,
    image: img(e.image, 1200),
    eventAttendanceMode: e.location.startsWith("Online")
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: e.location.startsWith("Online")
      ? { "@type": "VirtualLocation", url: "https://www.bps-bd.org/events" }
      : { "@type": "Place", name: e.location, address: e.location },
    organizer: { "@type": "Organization", name: "Bangladesh Pharmaceutical Society" },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        crumb="Events"
       
        title="Where the pharmacy community meets"
        text="Conferences, workshops, seminars and webinars for pharmacists and students across Bangladesh."
        image={photos.stage}
      />

      {/* Flagship */}
      <section className="py-24 sm:py-32">
        <div className="container-bps">
          <Reveal>
            <article className="grid overflow-hidden rounded-[2rem] bg-brand-950 lg:grid-cols-2">
              <div className="relative min-h-72">
                <Image src={img(flagship.image, 1400)} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8 sm:p-12">
                <span className="tag bg-white/10 text-aqua-400 ring-white/10">Flagship event</span>
                <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">{flagship.title}</h2>
                <p className="mt-4 text-lg text-brand-100">{flagship.text}</p>
                <ul className="mt-8 space-y-3 text-brand-100">
                  <li className="flex items-center gap-3">
                    <CalendarDays className="size-5 text-aqua-400" aria-hidden />
                    <time dateTime={flagship.date}>{formatDate(flagship.date)}</time>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="size-5 text-aqua-400" aria-hidden />
                    {flagship.location}
                  </li>
                </ul>
                <Link
                  href={`/contact?subject=${flagship.slug}`}
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-all hover:-translate-y-0.5"
                >
                  Register interest <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading title="All upcoming events" />
          <ul className="mt-12 space-y-4">
            {sorted.map((event, i) => (
              <Reveal as="li" key={event.slug} delay={i * 0.08}>
                <div id={event.slug} className="scroll-mt-28">
                  <EventRow event={event} />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
