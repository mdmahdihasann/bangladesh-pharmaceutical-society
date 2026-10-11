import type { Metadata } from "next";
import Image from "next/image";
import { FileText, ShieldCheck } from "lucide-react";
import { publicResources, publications } from "@/data/content";
import { img, photos, siteConfig } from "@/data/site";
import { ContactCta } from "@/components/home/ContactCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "The BPS Pharmaceutical Journal, BPS newsletter, practice guidelines and public health resources from Bangladesh Pharmaceutical Society.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        crumb="Publications"
        title="Research, guidance and resources"
        text="From peer-reviewed science to practical guides for patients — knowledge that strengthens pharmacy practice."
        image={photos.vials}
      />

      <section className="py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading title="What we publish" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {publications.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-950">
                    <Image src={img(p.image, 800)} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-bold tracking-[0.2em] text-aqua-500 uppercase">{p.tag}</span>
                    <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-brand-50 p-8 sm:flex-row sm:items-center">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white">
              <FileText className="size-7" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-bold text-brand-900">Submit to the BPS Pharmaceutical Journal</h3>
              <p className="text-muted">
                Original research, reviews and short communications are welcome. Send your enquiry to{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand-700 hover:underline">
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="public" className="scroll-mt-28 bg-surface py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading
            title="Use medicines safely"
            text="Simple advice from your pharmacists to help you and your family get the most from your medicines."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publicResources.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <article className="h-full rounded-3xl bg-white p-7 ring-1 ring-line">
                  <ShieldCheck className="size-8 text-aqua-500" aria-hidden />
                  <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-muted">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
