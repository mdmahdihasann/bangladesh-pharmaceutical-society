import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { SocialIcons } from "@/components/ui/SocialIcons";

const columns = [
  { title: "The Society", links: footerNav.society },
  { title: "Members", links: footerNav.members },
  { title: "Resources", links: footerNav.resources },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-brand-600/30 blur-3xl" />

      <div className="container-bps relative grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-3">
          <Link href="/" className="group flex items-center gap-4">
            <span className="shrink-0 rounded-2xl bg-white p-2 shadow-lg ring-4 shadow-black/30 ring-white/15 transition-transform group-hover:scale-105">
              <span className="relative block size-16 sm:size-20">
                <Image src="/images/bps-logo.jpeg" alt="" fill sizes="80px" className="object-contain" />
              </span>
            </span>
            <span>
              <span className="block text-lg leading-tight font-extrabold text-white">{siteConfig.name}</span>
              <span className="font-bangla block text-sm text-brand-300">{siteConfig.banglaName}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-brand-200">
            The national professional body of pharmacists in Bangladesh, working with regional and international
            pharmacy bodies.
          </p>
          <SocialIcons className="mt-6" iconClassName="size-10 bg-white/10 text-white hover:bg-white hover:text-brand-800" />
        </div>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-[0.12em] text-white uppercase">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-brand-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold tracking-[0.12em] text-white uppercase">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-aqua-400" aria-hidden />
              {siteConfig.contact.address}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-aqua-400" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-aqua-400" aria-hidden />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-aqua-400" aria-hidden />
              {siteConfig.contact.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-bps flex flex-col items-center justify-between gap-3 py-6 text-sm text-brand-300 sm:flex-row">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Advancing pharmacy since {siteConfig.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
