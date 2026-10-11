import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { news } from "@/data/content";
import { img, siteConfig } from "@/data/site";
import { NewsCard } from "@/components/cards/NewsCard";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return news.map((post) => ({ slug: post.slug }));
}

const getPost = (slug: string) => news.find((post) => post.slug === slug);

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: img(post.image, 1200), width: 1200, height: 630 }],
    },
  };
}

export default function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  return (
    <Suspense fallback={<ArticleSkeleton />}>
      <NewsArticle params={params} />
    </Suspense>
  );
}

function ArticleSkeleton() {
  return (
    <div aria-hidden className="animate-pulse">
      <div className="bg-brand-950 pt-36 pb-40 sm:pt-44">
        <div className="container-bps max-w-4xl space-y-5">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="h-12 w-3/4 rounded-lg bg-white/10" />
          <div className="h-4 w-40 rounded bg-white/10" />
        </div>
      </div>
      <div className="container-bps -mt-28 max-w-5xl">
        <div className="aspect-[16/8] rounded-[2rem] bg-brand-100" />
      </div>
    </div>
  );
}

async function NewsArticle({ params }: Pick<PageProps<"/news/[slug]">, "params">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = news.filter((p) => p.slug !== post.slug).slice(0, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: [img(post.image, 1200)],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/bps-logo.jpeg` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <article>
        <header className="bg-brand-950 pt-36 pb-40 sm:pt-44">
          <div className="container-bps max-w-4xl">
            <Reveal>
              <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white">
                <ArrowLeft className="size-4" aria-hidden /> All news
              </Link>
              <span className="tag mt-8 flex w-fit bg-white/10 text-aqua-400 ring-white/10">{post.category}</span>
              <h1 className="mt-5 text-3xl leading-tight font-extrabold text-balance text-white sm:text-5xl">{post.title}</h1>
              <p className="mt-6 flex items-center gap-2 text-brand-200">
                <CalendarDays className="size-4" aria-hidden />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
            </Reveal>
          </div>
        </header>
        <div className="container-bps -mt-28 max-w-5xl">
          <Reveal className="relative aspect-[16/8] overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={img(post.image, 1800)} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          </Reveal>
        </div>
        <div className="container-bps max-w-3xl py-16">
          <p className="text-xl leading-relaxed font-medium text-ink">{post.excerpt}</p>
          <div className="prose-bps mt-8 text-lg">
            {post.body.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-surface py-20">
        <div className="container-bps">
          <h2 className="text-2xl font-extrabold">More from the newsroom</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <NewsCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
