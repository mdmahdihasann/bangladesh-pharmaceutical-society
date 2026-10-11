import { partners } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const tones = [
  "from-brand-500 to-brand-700",
  "from-aqua-400 to-aqua-500",
  "from-rose-brand to-brand-500",
  "from-brand-400 to-aqua-500",
  "from-sun-400 to-rose-brand",
  "from-aqua-500 to-brand-600",
];

export function Partners() {
  return (
    <section aria-labelledby="divisions-heading" className="relative isolate overflow-hidden bg-brand-950 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 size-[32rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -right-32 -bottom-40 size-[28rem] rounded-full bg-aqua-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-bps grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-aqua-400 uppercase ring-1 ring-white/10">
            <span className="size-1.5 rounded-full bg-aqua-400" />
            Our network
          </span>
          <h2 id="divisions-heading" className="mt-6 text-3xl leading-[1.12] font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]">
            Divisions &amp; chapters that power{" "}
            <span className="text-aqua-400">the profession</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-brand-100/80">
            From hospital wards to factory floors and university labs, our specialist wings bring pharmacists
            together around the work they do every day.
          </p>
          <p className="mt-10 flex items-baseline gap-3 border-t border-white/10 pt-8">
            <span className="text-5xl font-extrabold tracking-tight text-white tabular-nums">{partners.length}</span>
            <span className="text-sm font-medium text-brand-200">specialist divisions working nationwide</span>
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08] hover:ring-white/20">
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40",
                    tones[i % tones.length],
                  )}
                />
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105",
                      tones[i % tones.length],
                    )}
                  >
                    <Icon name={p.icon} className="size-6" />
                  </span>
                  <span className="text-xs font-semibold text-white/30 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
