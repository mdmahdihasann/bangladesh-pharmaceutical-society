import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Clock, MonitorPlay } from "lucide-react";
import { cpdProgrammes } from "@/data/content";
import { img, photos } from "@/data/site";
import { ContactCta } from "@/components/home/ContactCta";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "CPD & Education",
  description:
    "Accredited continuing professional development (CPD) for pharmacists in Bangladesh — clinical pharmacy, AMR, GMP, regulatory affairs and research.",
  alternates: { canonical: "/education" },
};

const formats = [
  { title: "Workshops", text: "Hands-on, case-based sessions in small groups." },
  { title: "Webinars", text: "Live online learning you can join from anywhere." },
  { title: "Seminars", text: "Expert talks on emerging topics and policy." },
  { title: "Certificate courses", text: "Structured multi-week programmes with assessment." },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        crumb="CPD & Education"
        title="Lifelong learning for modern pharmacists"
        text="Practical, accredited programmes designed with leading academics and practitioners to keep you confident in practice."
        image={photos.lectureHall}
      />

      <section className="py-24 sm:py-32">
        <div className="container-bps grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left" className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image src={img(photos.students, 1200)} alt="Pharmacy students collaborating in a library" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <div>
            <SectionHeading
              title="Learn the way that works for you"
              text="Every BPS CPD activity awards a certificate with credit hours for your professional portfolio."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {formats.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 0.08} className="rounded-2xl bg-surface p-5 ring-1 ring-line">
                  <h3 className="font-bold text-brand-800">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted">{f.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading title="Featured CPD tracks" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cpdProgrammes.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={img(p.image, 800)} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">{p.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-muted">{p.text}</p>
                    <div className="mt-5 flex items-center gap-5 border-t border-line pt-4 text-sm font-medium text-brand-800">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4 text-brand-400" aria-hidden /> {p.hours} CPD hours
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MonitorPlay className="size-4 text-brand-400" aria-hidden /> {p.mode}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <ButtonLink href="/events">
              See scheduled sessions <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
