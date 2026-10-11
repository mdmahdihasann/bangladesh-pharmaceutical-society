import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { img, photos } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function MembershipCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-bps">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-16 sm:px-14 sm:py-20">
            <Image src={img(photos.healthWorker, 1600)} alt="" fill sizes="100vw" className="-z-20 object-cover object-right opacity-30 mix-blend-luminosity" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-800 via-brand-700/95 to-brand-700/40" />
            {/* Logo-inspired geometry */}
            <div className="pointer-events-none absolute -right-20 -bottom-24 -z-10 hidden size-96 rounded-full border-[28px] border-white/10 lg:block" />
            <div className="pointer-events-none absolute top-10 right-56 -z-10 hidden size-24 rounded-xl border-[10px] border-white/10 lg:block" />

            <div className="max-w-2xl">
              <h2 className="text-3xl leading-tight font-extrabold text-balance text-white sm:text-5xl">
                Your profession. Your society. Your voice.
              </h2>
              <p className="mt-5 text-lg text-brand-100">
                Join thousands of pharmacists who are shaping the future of healthcare in Bangladesh. Access accredited
                CPD, the BPS journal, member rates for events and a nationwide professional network.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/membership#apply" variant="light">
                  Apply now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </ButtonLink>
                <ButtonLink href="/membership#categories" variant="ghost">
                  View categories & fees
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
