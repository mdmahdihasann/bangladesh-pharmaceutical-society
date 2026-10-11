import { ArrowRight } from "lucide-react";
import { news } from "@/data/content";
import { NewsCard } from "@/components/cards/NewsCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NewsPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-bps">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title="Latest from the society" />
          <Reveal>
            <ButtonLink href="/news" variant="secondary">
              All news <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1} className="relative">
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
