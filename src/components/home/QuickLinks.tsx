import Link from "next/link";
import { ArrowUpRight, BookOpen, CalendarDays, GraduationCap, UserPlus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const links = [
  { icon: UserPlus, title: "Join BPS", text: "Become part of the national pharmacy community", href: "/membership" },
  { icon: GraduationCap, title: "CPD Programmes", text: "Accredited learning for every career stage", href: "/education" },
  { icon: CalendarDays, title: "Upcoming Events", text: "Conferences, workshops & webinars", href: "/events" },
  { icon: BookOpen, title: "BPS Journal", text: "Research in pharmaceutical sciences", href: "/publications" },
];

export function QuickLinks() {
  return (
    <section aria-label="Quick links" className="relative z-10 -mt-20">
      <div className="container-bps">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ icon: IconCmp, ...link }, i) => (
            <Reveal key={link.href} delay={i * 0.08} className="border-line not-last:border-b sm:[&:nth-child(odd)]:border-r lg:border-r lg:border-b-0 lg:last:border-r-0">
              <Link href={link.href} className="group relative flex h-full gap-4 p-7 transition-colors duration-500 hover:bg-brand-700">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <IconCmp className="size-6" aria-hidden />
                </span>
                <span>
                  <span className="flex items-center gap-1 font-bold text-ink transition-colors group-hover:text-white">
                    {link.title}
                    <ArrowUpRight className="size-4 opacity-0 transition-all group-hover:opacity-100" aria-hidden />
                  </span>
                  <span className="mt-1 block text-sm text-muted transition-colors group-hover:text-brand-100">{link.text}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
