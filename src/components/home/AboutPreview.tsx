import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { stats } from "@/data/content";
import { img, photos } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  "Connected with regional & international pharmacy bodies",
  "Publisher of the BPS Pharmaceutical Journal",
  "Partner in the National Health Programme",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-bps grid items-center gap-16 lg:grid-cols-2">
        <Reveal direction="left" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:mr-16">
            <Image src={img(photos.microscope, 1200)} alt="Pharmacist researcher working with a microscope in a laboratory" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-2 hidden w-56 overflow-hidden rounded-3xl border-8 border-white shadow-lift sm:block">
            <div className="relative aspect-square">
              <Image src={img(photos.patientCare, 600)} alt="Pharmacist measuring a patient's blood pressure" fill sizes="224px" className="object-cover" />
            </div>
          </div>
          <div className="absolute top-8 -left-4 rounded-2xl bg-white p-5 shadow-lift ring-1 ring-line sm:-left-8">
            <p className="text-4xl font-extrabold tracking-tight text-brand-700 tabular-nums">1972</p>
            <p className="text-sm font-medium text-muted">Serving the nation</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              A united voice for pharmacists, <span className="text-brand-700">a safer future for patients.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Bangladesh Pharmaceutical Society is the organisation of the registered pharmacists of the country.
              Since 1972 we have worked to advance pharmacy and to make the pharmacist&apos;s role meaningful in
              the National Health Programme — from the community pharmacy counter to the hospital ward and the
              factory floor.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 font-medium text-ink">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-aqua-400/15 text-aqua-500">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <ButtonLink href="/about" className="mt-10">
              Our story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
      </div>

      <div className="container-bps mt-24">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-white p-8 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="text-4xl font-extrabold text-brand-700 sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 font-semibold text-ink">{s.label}</p>
                <p className="text-sm text-muted">{s.note}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
