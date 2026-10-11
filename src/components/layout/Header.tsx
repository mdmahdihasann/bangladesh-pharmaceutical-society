"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileOpen = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]));
  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar */}
      <div
        className={cn(
          "hidden overflow-hidden bg-brand-950 text-brand-100 transition-all duration-500 lg:block",
          scrolled ? "max-h-0" : "max-h-12",
        )}
      >
        <div className="container-bps flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="size-3.5" aria-hidden /> {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="size-3.5" aria-hidden /> {siteConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bangla text-[13px] text-brand-200">{siteConfig.banglaName}</span>
            <SocialIcons iconClassName="size-7 text-brand-200 hover:text-white" className="gap-0" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-500",
          solid ? "bg-white/90 shadow-[0_8px_30px_-12px_rgb(22_29_94/0.25)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <nav aria-label="Main" className="container-bps flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.name} — Home`}>
            <span className="relative size-12 overflow-hidden  bg-white ring-1 ring-black/5">
              <Image src="/images/bps-logo.jpeg" alt="" fill sizes="48px" className="object-cover" priority />
            </span>
            <span className="leading-tight">
              <span className={cn("block text-[15px] font-extrabold tracking-tight", solid ? "text-brand-800" : "text-white")}>
                Bangladesh Pharmaceutical
              </span>
              <span
                className={cn(
                  "block text-[11px] font-semibold tracking-[0.3em] uppercase",
                  solid ? "text-muted" : "text-brand-200",
                )}
              >
                Society · Est. 1972
              </span>
            </span>
          </Link>

          <ul className="hidden items-center xl:flex">
            {mainNav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-semibold whitespace-nowrap transition-colors",
                    solid ? "text-ink hover:text-brand-700" : "text-white/90 hover:text-white",
                    isActive(item.href) && (solid ? "text-brand-700" : "text-white"),
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" aria-hidden />
                  )}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-dot"
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full",
                        solid ? "bg-brand-700" : "bg-aqua-400",
                      )}
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute top-full left-1/2 w-80 -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="rounded-2xl bg-white p-2 shadow-lift ring-1 ring-line">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="group/item flex items-start justify-between gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
                          >
                            <span>
                              <span className="block text-sm font-semibold text-ink group-hover/item:text-brand-700">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-xs text-muted">{child.description}</span>
                            </span>
                            <ArrowUpRight
                              className="mt-0.5 size-4 shrink-0 text-brand-300 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-brand-700"
                              aria-hidden
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/membership#apply"
              className={cn(
                "hidden rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex",
                solid ? "bg-brand-700 text-white hover:bg-brand-800" : "bg-white text-brand-800 hover:bg-brand-50",
              )}
            >
              Become a Member
            </Link>
            <button
              type="button"
              onClick={() => setOpenPath(mobileOpen ? null : pathname)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={cn(
                "grid size-11 place-items-center rounded-full transition-colors xl:hidden",
                solid ? "bg-brand-50 text-brand-800" : "bg-white/10 text-white",
              )}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="h-[calc(100dvh-5rem)] overflow-y-auto bg-white xl:hidden"
          >
            <ul className="container-bps divide-y divide-line py-4">
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpenPath(null)}
                    className={cn(
                      "flex items-center justify-between py-4 text-lg font-semibold",
                      isActive(item.href) ? "text-brand-700" : "text-ink",
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="size-5 text-brand-300" aria-hidden />
                  </Link>
                  {item.children && (
                    <ul className="-mt-2 grid grid-cols-2 gap-2 pb-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpenPath(null)}
                            className="block rounded-lg bg-surface px-3 py-2 text-sm text-muted"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="container-bps pb-10">
              <Link
                href="/membership#apply"
                onClick={() => setOpenPath(null)}
                className="flex w-full items-center justify-center rounded-full bg-brand-700 py-3.5 font-semibold text-white"
              >
                Become a Member
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
