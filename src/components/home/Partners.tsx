import { partners } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const tones = [
  "bg-brand-700 text-white",
  "bg-aqua-500 text-white",
  "bg-rose-brand text-white",
  "bg-sun-400 text-brand-950",
];

type Partner = (typeof partners)[number];

function Row({ items, reverse }: { items: Partner[]; reverse?: boolean }) {
  const loop = [...items, ...items];

  return (
    <ul
      className={cn(
        "flex w-max animate-marquee py-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
        reverse && "[animation-direction:reverse]",
      )}
    >
      {loop.map((p, i) => (
        <li key={`${p.name}-${i}`} aria-hidden={i >= items.length} className="mr-5 w-[19rem] shrink-0">
          <div className="flex h-full items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-soft ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200">
            <span
              className={cn(
                "grid size-12 shrink-0 place-items-center rounded-xl",
                tones[partners.indexOf(p) % tones.length],
              )}
            >
              <Icon name={p.icon} className="size-6" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-bold text-ink">{p.name}</span>
              <span className="mt-0.5 line-clamp-2 block text-sm leading-snug text-muted">{p.text}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Partners() {
  const half = Math.ceil(partners.length / 2);
  const rowTwo = [...partners.slice(half), ...partners.slice(0, half)];

  return (
    <section aria-labelledby="divisions-heading" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <Reveal className="container-bps mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-700 uppercase ring-1 ring-brand-100">
          <span className="size-1.5 rounded-full bg-aqua-500" />
          Our network
        </span>
        <h2 id="divisions-heading" className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-balance text-ink sm:text-4xl">
          Divisions &amp; chapters <span className="text-brand-700">across the nation</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">
          Specialist wings that bring pharmacists together around the work they do every day.
        </p>
      </Reveal>

      <div className="group relative mt-12 space-y-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row items={partners} />
        <Row items={rowTwo} reverse />
      </div>
    </section>
  );
}
