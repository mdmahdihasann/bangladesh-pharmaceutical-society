import {
  Award,
  BadgeCheck,
  BookOpen,
  Factory,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartPulse,
  Hospital,
  MapPinned,
  Megaphone,
  Microscope,
  Sprout,
  Users,
  type LucideProps,
} from "lucide-react";

const icons = {
  Award,
  BadgeCheck,
  BookOpen,
  Factory,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartPulse,
  Hospital,
  MapPinned,
  Megaphone,
  Microscope,
  Sprout,
  Users,
};

export type IconName = keyof typeof icons;

/** Renders a lucide icon by name so content data can stay serialisable. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
