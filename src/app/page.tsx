import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCta } from "@/components/home/ContactCta";
import { EventsPreview } from "@/components/home/EventsPreview";
import { Hero } from "@/components/home/Hero";
import { MembershipCta } from "@/components/home/MembershipCta";
import { NewsPreview } from "@/components/home/NewsPreview";
import { Partners } from "@/components/home/Partners";
import { Pillars } from "@/components/home/Pillars";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { QuickLinks } from "@/components/home/QuickLinks";

export default function HomePage() {
  return (
    <>
      {/* Who we are */}
      <Hero />
      <QuickLinks />
      <AboutPreview />
      {/* What we do and where */}
      <Pillars />
      <PracticeAreas />
      <Partners />
      {/* What's happening */}
      <EventsPreview />
      <NewsPreview />
      {/* Get involved */}
      <MembershipCta />
      <ContactCta />
    </>
  );
}
