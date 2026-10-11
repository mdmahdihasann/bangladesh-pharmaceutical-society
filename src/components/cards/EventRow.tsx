import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { BpsEvent } from "@/data/content";
import { img } from "@/data/site";
import { cn } from "@/lib/utils";

const typeTone: Record<BpsEvent["type"], string> = {
  Conference: "bg-brand-100 text-brand-800",
  Workshop: "bg-aqua-400/15 text-aqua-500",
  Webinar: "bg-rose-brand/10 text-rose-brand",
  Seminar: "bg-sun-400/20 text-amber-700",
};

export function EventRow({ event }: { event: BpsEvent }) {
  return (
    <article className="group relative grid items-center gap-5 rounded-3xl bg-white p-4 ring-1 ring-line transition-all duration-500 hover:shadow-lift hover:ring-brand-200 sm:grid-cols-[auto_1fr_auto] sm:gap-7 sm:p-5">
      <div className="flex items-center gap-5">
        <div className="grid size-20 shrink-0 place-items-center rounded-2xl bg-brand-700 text-center text-white transition-colors duration-500 group-hover:bg-brand-800">
          <time dateTime={event.date}>
            <span className="block text-3xl leading-none font-extrabold">{event.day}</span>
            <span className="mt-1 block text-xs font-semibold tracking-widest uppercase">{event.month}</span>
          </time>
        </div>
        <div className="relative hidden h-20 w-28 overflow-hidden rounded-2xl md:block">
          <Image src={img(event.image, 400)} alt="" fill sizes="112px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
      <div>
        <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold", typeTone[event.type])}>
          {event.type}
        </span>
        <h3 className="mt-2 text-lg leading-snug font-bold text-ink">
          <Link href={`/events#${event.slug}`} className="after:absolute after:inset-0">
            {event.title}
          </Link>
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-4 shrink-0 text-brand-400" aria-hidden />
          {event.location}
        </p>
      </div>
      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-700 group-hover:text-white max-sm:hidden">
        <ArrowRight className="size-5 transition-transform group-hover:-rotate-45" aria-hidden />
      </span>
    </article>
  );
}
