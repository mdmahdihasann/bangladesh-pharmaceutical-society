import type { Metadata } from "next";
import Image from "next/image";
import { Check, Eye, Target, UserRound, Users } from "lucide-react";
import { chapters, councilRoles, timeline } from "@/data/content";
import { img, photos, siteConfig } from "@/data/site";
import { ContactCta } from "@/components/home/ContactCta";
import { Partners } from "@/components/home/Partners";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bangladesh Pharmaceutical Society — our history since 1972, mission, vision, executive council and professional divisions.",
  alternates: { canonical: "/about" },
};

const objectives = [
  "Advance the science and practice of pharmacy in Bangladesh",
  "Make the pharmacist's role meaningful in the National Health Programme",
  "Uphold professional ethics and standards of practice",
  "Promote continuing education and research",
  "Represent pharmacists nationally and internationally",
  "Educate the public on the safe and rational use of medicines",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Five decades of advancing pharmacy in Bangladesh"
        text={`Founded in ${siteConfig.founded}, Bangladesh Pharmaceutical Society is the organisation of the registered pharmacists of the country.`}
        image={photos.labCorridor}
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="container-bps grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
              Born with a nation, growing with its health system
            </h2>
            <div className="prose-bps mt-6 text-lg">
              <p>
                Bangladesh Pharmaceutical Society was established in 1972, soon after the independence of
                Bangladesh, to unite the pharmacists of the new nation and to advance the interests of the
                profession.
              </p>
              <p>
                Headquartered in Dhaka, the society works to advance pharmacy and to make the role of pharmacists
                meaningful in the National Health Programme. It publishes the <strong>BPS Pharmaceutical
                Journal</strong> and works with regional and international pharmacy bodies.
              </p>
              <p>
                Today our members serve in community pharmacies, hospitals, a world-class pharmaceutical industry,
                regulatory bodies and universities across the country.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" className="grid grid-cols-2 gap-4">
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={img(photos.labTeam, 800)} alt="Pharmaceutical scientists working together in a laboratory" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={img(photos.pharmacy, 800)} alt="A modern community pharmacy" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section id="mission" className="scroll-mt-28 bg-surface py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading align="center" title="Mission, vision & objectives" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-3xl bg-brand-700 p-10 text-white">
              <Target className="size-10 text-aqua-400" aria-hidden />
              <h3 className="mt-6 text-2xl font-bold">Our mission</h3>
              <p className="mt-3 text-lg leading-relaxed text-brand-100">
                To advance the profession of pharmacy and maximise the contribution of pharmacists to the health of
                the people of Bangladesh through education, advocacy and excellence in practice.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl bg-white p-10 ring-1 ring-line">
              <Eye className="size-10 text-brand-700" aria-hidden />
              <h3 className="mt-6 text-2xl font-bold">Our vision</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                A nation where every person has access to safe, effective and affordable medicines — and to the
                expertise of a qualified pharmacist.
              </p>
            </Reveal>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 0.05} className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-line">
                <Check className="mt-0.5 size-5 shrink-0 text-aqua-500" strokeWidth={2.5} aria-hidden />
                <span className="font-medium text-ink">{o}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading title="A journey of service" />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-6">
            <span className="absolute top-7 right-0 left-0 hidden h-0.5 bg-brand-100 md:block" aria-hidden />
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.1} className="relative">
                <span className="relative grid size-14 place-items-center rounded-full bg-brand-700 text-white ring-8 ring-white">
                  <span className="size-2.5 rounded-full bg-aqua-400" />
                </span>
                <p className="mt-5 text-2xl font-extrabold text-brand-700">{t.year}</p>
                <h3 className="mt-1 font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Council */}
      <section id="council" className="scroll-mt-28 bg-brand-950 py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading
            invert
            title="Executive Council"
            text="The society is governed by an elected Executive Council that sets its strategic direction. Council members serve on a voluntary basis."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {councilRoles.map((role, i) => (
              <Reveal as="li" key={role} delay={i * 0.05}>
                <div className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                  <span className="grid size-16 place-items-center rounded-2xl bg-brand-700 text-brand-200 transition-colors group-hover:bg-aqua-500 group-hover:text-white">
                    <UserRound className="size-8" aria-hidden />
                  </span>
                  <p className="mt-5 text-lg font-bold text-white">{role}</p>
                  <p className="text-sm text-brand-300">Executive Council</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Chapters */}
      <section id="chapters" className="scroll-mt-28 py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading
            title="Communities within the society"
            text="Members connect through practice-based divisions and interest groups that run their own programmes."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <article className="h-full rounded-3xl p-7 ring-1 ring-line transition-all duration-500 hover:-translate-y-1 hover:shadow-soft hover:ring-brand-200">
                  <Users className="size-7 text-brand-700" aria-hidden />
                  <h3 className="mt-5 text-lg font-bold">{c.name}</h3>
                  <p className="mt-2 text-muted">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <ContactCta />
    </>
  );
}
