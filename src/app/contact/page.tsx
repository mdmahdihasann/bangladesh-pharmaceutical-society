import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { photos, siteConfig } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Bangladesh Pharmaceutical Society secretariat in Dhaka for membership, CPD, events and media enquiries.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: MapPin, label: "Address", value: siteConfig.contact.address },
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
  { icon: Clock, label: "Office hours", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="We'd love to hear from you"
        text="Questions about membership, CPD, events or partnerships? Send us a message and our secretariat will respond."
        image={photos.doctorLaptop}
      />

      <section className="py-24 sm:py-32">
        <div className="container-bps grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal direction="left">
            <h2 className="text-3xl font-extrabold tracking-tight">BPS Secretariat</h2>
            <p className="mt-3 text-muted">Reach us through any of the channels below.</p>
            <ul className="mt-8 space-y-4">
              {details.map(({ icon: IconCmp, ...d }) => (
                <li key={d.label} className="flex gap-4 rounded-2xl p-5 ring-1 ring-line">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
                    <IconCmp className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className="font-semibold text-ink hover:text-brand-700">
                        {d.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">{d.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <SocialIcons className="mt-8" iconClassName="size-11 bg-brand-50 text-brand-700 hover:bg-brand-700 hover:text-white" />
          </Reveal>

          <Reveal direction="right">
            <Suspense fallback={<div className="h-[520px] rounded-3xl bg-surface ring-1 ring-line" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <section aria-label="Map" className="pb-24 sm:pb-32">
        <div className="container-bps">
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-line">
            <iframe
              title="Map of Dhaka, Bangladesh"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="h-96 w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
