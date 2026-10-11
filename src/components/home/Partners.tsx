import { partners } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const tones = [
  "bg-brand-50 text-brand-700",
  "bg-aqua-400/15 text-aqua-500",
  "bg-rose-brand/10 text-rose-brand",
  "bg-sun-400/20 text-brand-900",
];

export function Partners() {
  const loop = [...partners, ...partners];

  return (
    <section aria-label="Our divisions and chapters" className="border-y border-line bg-white py-14">
      <p className="text-center text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        Our divisions &amp; chapters
      </p>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              aria-hidden={i >= partners.length}
              className="mr-4 flex shrink-0 items-center gap-3 rounded-2xl bg-white py-3 pr-6 pl-3 ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft hover:ring-brand-200"
            >
              <span className={cn("grid size-10 place-items-center rounded-xl", tones[i % tones.length])}>
                <Icon name={p.icon} className="size-5" />
              </span>
              <span className="font-semibold whitespace-nowrap text-ink">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
