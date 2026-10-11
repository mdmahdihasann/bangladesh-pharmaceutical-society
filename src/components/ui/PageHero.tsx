import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { img } from "@/data/site";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  title: string;
  text: string;
  image: string;
  crumb: string;
};

export function PageHero({ title, text, image, crumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <Image src={img(image, 2000)} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-900/90 to-brand-800/40" />

      <div className="container-bps">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-brand-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-4" aria-hidden />
            <span aria-current="page" className="text-white">{crumb}</span>
          </nav>
          <h1 className="max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
