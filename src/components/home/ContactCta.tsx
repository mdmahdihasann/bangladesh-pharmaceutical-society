import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const channels = [
  { icon: Mail, label: "Email us", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Call the secretariat", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
];

export function ContactCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-bps">
        <Reveal className="grid items-center gap-10 rounded-[2rem] bg-surface p-8 ring-1 ring-line sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="grid size-14 place-items-center rounded-2xl bg-aqua-500 text-white">
              <MessageCircle className="size-7" aria-hidden />
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Have a question for the society?
            </h2>
            <p className="mt-3 max-w-lg text-lg text-muted">
              Membership, CPD, partnerships or media enquiries — our secretariat is happy to help.
            </p>
            <ButtonLink href="/contact" className="mt-8">
              Contact us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </div>
          <ul className="grid gap-4">
            {channels.map(({ icon: IconCmp, ...c }) => (
              <li key={c.label}>
                <a href={c.href} className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-line transition-all hover:ring-brand-300 hover:shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <IconCmp className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{c.label}</span>
                    <span className="block font-semibold text-ink">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
