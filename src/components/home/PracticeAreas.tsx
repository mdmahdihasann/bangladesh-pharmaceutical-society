import Image from "next/image";
import { practiceAreas } from "@/data/content";
import { img } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PracticeAreas() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/3 size-[36rem] rounded-full bg-brand-600/25 blur-3xl" />
      <div className="container-bps relative">
        <SectionHeading
          invert
          title="Wherever medicines matter, a pharmacist is there"
          text="BPS brings together pharmacists from every sector of the profession through dedicated divisions and chapters."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.1}>
              <article className="group relative isolate aspect-[3/4] overflow-hidden rounded-3xl bg-brand-950">
                <div className="absolute inset-[3px] overflow-hidden rounded-[21px]">
                  <Image
                    src={img(area.image, 800)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 from-10% via-brand-950/50 to-brand-950/10 transition-colors duration-500 group-hover:from-brand-800" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                    <p className="overflow-hidden text-sm leading-relaxed text-brand-100">
                      <span className="block pt-3">{area.text}</span>
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
