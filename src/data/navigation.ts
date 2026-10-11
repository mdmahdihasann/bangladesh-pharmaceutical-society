export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about", description: "Our story since 1972" },
      { label: "Mission & Vision", href: "/about#mission", description: "What drives the society" },
      { label: "Executive Council", href: "/about#council", description: "Leadership & governance" },
      { label: "Divisions & Chapters", href: "/about#chapters", description: "Practice-area networks" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Why Join", href: "/membership", description: "Benefits of being a member" },
      { label: "Categories & Fees", href: "/membership#categories", description: "Find the right tier" },
      { label: "How to Apply", href: "/membership#apply", description: "Simple 4-step process" },
      { label: "FAQs", href: "/membership#faq", description: "Common questions" },
    ],
  },
  { label: "CPD & Education", href: "/education" },
  { label: "Events", href: "/events" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  society: [
    { label: "About BPS", href: "/about" },
    { label: "Executive Council", href: "/about#council" },
    { label: "Divisions & Chapters", href: "/about#chapters" },
    { label: "Contact Us", href: "/contact" },
  ],
  members: [
    { label: "Why Join", href: "/membership" },
    { label: "Categories & Fees", href: "/membership#categories" },
    { label: "CPD Programmes", href: "/education" },
    { label: "Membership FAQs", href: "/membership#faq" },
  ],
  resources: [
    { label: "Events Calendar", href: "/events" },
    { label: "BPS Pharmaceutical Journal", href: "/publications" },
    { label: "News & Press", href: "/news" },
    { label: "Public Health Resources", href: "/publications#public" },
  ],
} as const;
