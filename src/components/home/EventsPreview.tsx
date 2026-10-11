import { ArrowRight } from "lucide-react";
import { events } from "@/data/content";
import { EventRow } from "@/components/cards/EventRow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EventsPreview() {
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-bps grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            title="Learn, connect and grow with your profession"
            text="From our flagship national convention to hands-on workshops and national webinars — there is always something happening at BPS."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/events" variant="secondary" className="mt-8">
              Full event calendar <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
        <ul className="space-y-4">
          {upcoming.map((event, i) => (
            <Reveal as="li" key={event.slug} delay={i * 0.1} direction="right">
              <EventRow event={event} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
