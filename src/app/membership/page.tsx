import type { Metadata } from "next";
import { ArrowRight, Check, Plus } from "lucide-react";
import { applySteps, benefits, faqs, membershipTiers } from "@/data/content";
import { photos, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join Bangladesh Pharmaceutical Society. Explore member benefits, categories and fees, how to apply and frequently asked questions.",
  alternates: { canonical: "/membership" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MembershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        crumb="Membership"
        title="Grow with the community that grows the profession"
        text="Membership connects you with accredited learning, a national network and a voice in the future of pharmacy."
        image={photos.healthWorker}
      />

      {/* Benefits */}
      <section className="py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading align="center" title="Benefits that support your whole career" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="group flex h-full gap-5 rounded-3xl p-7 ring-1 ring-line transition-all duration-500 hover:bg-brand-700 hover:ring-brand-700">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-white/15 group-hover:text-white">
                    <Icon name={b.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink transition-colors group-hover:text-white">{b.title}</h3>
                    <p className="mt-1.5 text-muted transition-colors group-hover:text-brand-100">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="categories" className="scroll-mt-28 bg-surface py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading align="center" title="Choose the membership that fits you" />
          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {membershipTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2",
                    tier.highlight ? "bg-brand-700 text-white shadow-lift lg:-my-4 lg:py-12" : "bg-white ring-1 ring-line",
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3.5 left-8 rounded-full bg-aqua-400 px-3 py-1 text-xs font-bold text-brand-950">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className={cn("mt-2 text-sm", tier.highlight ? "text-brand-100" : "text-muted")}>{tier.text}</p>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                    <span className={cn("text-sm", tier.highlight ? "text-brand-200" : "text-muted")}>{tier.period}</span>
                  </p>
                  <ul className="mt-8 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm">
                        <Check className={cn("size-5 shrink-0", tier.highlight ? "text-aqua-400" : "text-brand-600")} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <ButtonLink href="#apply" variant={tier.highlight ? "light" : "primary"} className="w-full">
                      Apply as {tier.name}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Fees are indicative. Please confirm current rates with the secretariat at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Apply steps */}
      <section id="apply" className="scroll-mt-28 py-24 sm:py-32">
        <div className="container-bps">
          <SectionHeading title="Four simple steps to membership" />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applySteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.1} className="relative rounded-3xl bg-surface p-7 ring-1 ring-line">
                <span className="text-6xl font-extrabold text-brand-100">{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 flex justify-center">
            <ButtonLink href="/contact?subject=membership">
              Start your application <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-28 bg-surface py-24 sm:py-32">
        <div className="container-bps grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading title="Questions about membership" text="Can't find your answer? Our secretariat is happy to help." />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-2xl bg-white ring-1 ring-line open:ring-brand-200" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 group-open:rotate-45">
                      <Plus className="size-4" aria-hidden />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
