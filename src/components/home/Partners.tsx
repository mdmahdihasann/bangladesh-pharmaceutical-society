import { partners } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const tones = [
  "bg-brand-50 text-brand-700",
  "bg-aqua-400/15 text-aqua-500",
  "bg-rose-brand/10 text-rose-brand",
  "bg-sun-400/20 text-brand-900",
];

type Partner = (typeof partners)[number];

function Row({ items, reverse }: { items: Partner[]; reverse?: boolean }) {
  const loop = [...items, ...items];

  return (
    <ul
      className={cn(
        "flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
        reverse && "[animation-direction:reverse]",
      )}
    >
      {loop.map((p, i) => (
        <li
          key={`${p.name}-${i}`}
          aria-hidden={i >= items.length}
          className="mr-4 flex shrink-0 items-center gap-3 rounded-2xl bg-surface py-3 pr-6 pl-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
        >
          <span className={cn("grid size-10 place-items-center rounded-xl", tones[partners.indexOf(p) % tones.length])}>
            <Icon name={p.icon} className="size-5" />
          </span>
          <span className="font-semibold whitespace-nowrap text-ink">{p.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function Partners() {
  const half = Math.ceil(partners.length / 2);
  const rotated = [...partners.slice(half), ...partners.slice(0, half)];

  return (
    <section aria-label="Our divisions and chapters" className="bg-white py-20 sm:py-24">
      <p className="text-center text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        Our divisions &amp; chapters
      </p>
      <div className="group mt-8 space-y-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Row items={partners} />
        <Row items={rotated} reverse />
      </div>
    </section>
  );
}
