import { Landmark } from "lucide-react";
import { partners } from "@/data/content";

export function Partners() {
  const loop = [...partners, ...partners];

  return (
    <section aria-label="Affiliations and partners" className="border-y border-line bg-surface py-10">
      <p className="text-center text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        Affiliations & collaborating bodies
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold whitespace-nowrap text-brand-800 ring-1 ring-line"
            >
              <Landmark className="size-4 text-brand-400" aria-hidden />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
