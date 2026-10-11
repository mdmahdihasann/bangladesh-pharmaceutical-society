"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { img, photos } from "@/data/site";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: photos.pharmacy,
    title: "The professional home of every pharmacist in Bangladesh",
    text: "Uniting pharmacists across community, hospital, industry and academia to raise standards of practice and protect public health.",
    cta: { label: "Discover BPS", href: "/about" },
  },
  {
    image: photos.labTeam,
    title: "Continuing education for a profession on the move",
    text: "Accredited CPD workshops, webinars and seminars designed by pharmacists, for pharmacists.",
    cta: { label: "Explore CPD", href: "/education" },
  },
  {
    image: photos.conference,
    title: "Shaping the future of pharmacy, together",
    text: "Join leaders, researchers and practitioners in Dhaka this December for our flagship annual convention.",
    cta: { label: "View events", href: "/events" },
  },
];

const INTERVAL = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();
  const slide = slides[index];

  useEffect(() => {
    if (!playing || reduce) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [index, playing, reduce]);

  return (
    <section aria-roledescription="carousel" aria-label="Highlights" className="relative isolate flex min-h-[100svh] overflow-hidden bg-brand-950">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: reduce ? 1 : 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <Image src={img(slide.image, 2200)} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-900/75 to-brand-900/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-brand-950/80 to-transparent" />

      <div className="container-bps flex flex-col justify-center pt-36">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              show: { transition: { staggerChildren: 0.12 } },
              exit: { opacity: 0, y: -16, transition: { duration: 0.35 } },
            }}
            className="max-w-3xl"
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-6xl xl:text-7xl"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl"
            >
              {slide.text}
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href={slide.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-800 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
              >
                {slide.cta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white ring-1 ring-white/40 transition-colors hover:bg-white/10"
              >
                Become a member
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-4 pb-32">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className="group relative h-1 w-14 overflow-hidden rounded-full bg-white/25 sm:w-20"
            >
              <span
                key={i === index ? `active-${index}` : "idle"}
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-white",
                  i === index ? "w-full" : "w-0",
                  i === index && playing && !reduce && "animate-progress",
                )}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="ml-2 grid size-9 place-items-center rounded-full text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
          >
            {playing ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
          </button>
        </div>
      </div>
    </section>
  );
}
