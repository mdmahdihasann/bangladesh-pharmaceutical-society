import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/content";
import { img, photos } from "@/data/site";
import { NewsCard } from "@/components/cards/NewsCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Press",
  description: "Latest news, press releases and public health updates from Bangladesh Pharmaceutical Society.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const [featured, ...rest] = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        crumb="News"
        title="News, statements & stories"
        text="Updates from the society, press releases and public health campaigns."
        image={photos.seminar}
      />

      <section className="py-24 sm:py-32">
        <div className="container-bps">
          <Reveal>
            <article className="group relative grid overflow-hidden rounded-[2rem] ring-1 ring-line lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image src={img(featured.image, 1400)} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="tag self-start">{featured.category}</span>
                <h2 className="mt-5 text-3xl leading-tight font-extrabold text-balance">
                  <Link href={`/news/${featured.slug}`} className="after:absolute after:inset-0 group-hover:text-brand-700">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-lg text-muted">{featured.excerpt}</p>
                <div className="mt-8 flex items-center justify-between">
                  <time dateTime={featured.date} className="text-sm text-muted">
                    {formatDate(featured.date)}
                  </time>
                  <span className="grid size-12 place-items-center rounded-full bg-brand-700 text-white transition-transform group-hover:-rotate-45">
                    <ArrowRight className="size-5" aria-hidden />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <NewsCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
