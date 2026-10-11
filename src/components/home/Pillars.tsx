import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tones = {
  brand: { icon: "bg-brand-700 text-white", bar: "bg-brand-700" },
  aqua: { icon: "bg-aqua-500 text-white", bar: "bg-aqua-500" },
  rose: { icon: "bg-rose-brand text-white", bar: "bg-rose-brand" },
  sun: { icon: "bg-sun-400 text-brand-950", bar: "bg-sun-400" },
};

export function Pillars() {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="container-bps relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            title="Four pillars that strengthen pharmacy in Bangladesh"
            text="Everything the society does is focused on better-trained pharmacists, better policy and better outcomes for patients."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link
                href={p.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-line transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <span className={cn("absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100", tones[p.tone].bar)} />
                <span className={cn("grid size-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6", tones[p.tone].icon)}>
                  <Icon name={p.icon} className="size-7" />
                </span>
                <h3 className="mt-7 text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
