import { photos } from "./site";
import type { IconName } from "@/components/ui/Icon";

export const stats = [
  { value: 54, suffix: "+", label: "Years of service", note: "Founded in 1972" },
  { value: 25000, suffix: "+", label: "Registered pharmacists", note: "Across Bangladesh" },
  { value: 8, suffix: "", label: "Divisional chapters", note: "Nationwide network" },
  { value: 120, suffix: "+", label: "CPD hours yearly", note: "Workshops & webinars" },
] as const;

export const pillars = [
  {
    icon: "GraduationCap",
    title: "Education & CPD",
    text: "Continuing professional development, accredited workshops and webinars that keep pharmacists at the forefront of practice.",
    href: "/education",
    tone: "brand",
  },
  {
    icon: "Megaphone",
    title: "Advocacy & Policy",
    text: "A strong, unified voice for the profession in national health policy, drug regulation and pharmacy legislation.",
    href: "/about#mission",
    tone: "aqua",
  },
  {
    icon: "HeartPulse",
    title: "Public Health",
    text: "Campaigns on rational use of medicines, antimicrobial resistance and safe self-care for communities.",
    href: "/publications#public",
    tone: "rose",
  },
  {
    icon: "Microscope",
    title: "Research & Journal",
    text: "Publishing the BPS Pharmaceutical Journal and fostering research across academia and industry.",
    href: "/publications",
    tone: "sun",
  },
] as const;

export const practiceAreas = [
  {
    title: "Community Pharmacy",
    text: "Supporting pharmacists who are the most accessible healthcare professionals in every neighbourhood.",
    image: photos.pharmacy,
  },
  {
    title: "Hospital & Clinical",
    text: "Advancing clinical pharmacy services, medication safety and patient-centred care in hospitals.",
    image: photos.patientCare,
  },
  {
    title: "Pharmaceutical Industry",
    text: "Upholding GMP, quality assurance and innovation in one of Asia's fastest-growing pharma sectors.",
    image: photos.labTeam,
  },
  {
    title: "Academia & Research",
    text: "Connecting faculties, researchers and students to strengthen pharmacy education and discovery.",
    image: photos.microscope,
  },
] as const;

export const chapters = [
  { name: "Young Pharmacists Group", text: "Mentorship, leadership and career development for early-career pharmacists." },
  { name: "Hospital Pharmacy Division", text: "Clinical services, formulary management and medication safety." },
  { name: "Industrial Pharmacy Division", text: "Manufacturing, quality, regulatory affairs and exports." },
  { name: "Community Pharmacy Division", text: "Retail practice standards and model pharmacy initiatives." },
  { name: "Academic & Research Forum", text: "Teaching excellence, research collaboration and publications." },
  { name: "Pharmacy Students' Wing", text: "Bridging students with the profession through events and internships." },
] as const;

export const councilRoles = [
  "President",
  "Senior Vice President",
  "Vice President",
  "Secretary General",
  "Joint Secretary",
  "Treasurer",
  "Organising Secretary",
  "Scientific Secretary",
] as const;

export const timeline = [
  { year: "1972", title: "Society founded", text: "Established in Dhaka to unite registered pharmacists of the newly independent nation." },
  { year: "1976", title: "First national seminar", text: "Hosted the first nationwide seminar on pharmacy practice and professional standards." },
  { year: "1982", title: "Policy advocacy", text: "Members contributed expert input on medicine quality, pricing and access." },
  { year: "1990s", title: "Journal & international ties", text: "BPS Pharmaceutical Journal grows; ties with international pharmacy bodies strengthen." },
  { year: "2020s", title: "Modern practice", text: "Focus on clinical pharmacy, CPD and digital health for a new generation." },
] as const;

export const membershipTiers = [
  {
    name: "Student",
    price: "৳500",
    period: "per year",
    text: "For undergraduate pharmacy students at recognised universities.",
    features: ["Student events & competitions", "Mentorship programme", "Discounted conference fees", "E-newsletter"],
    highlight: false,
  },
  {
    name: "Full Member",
    price: "৳2,000",
    period: "per year",
    text: "For registered pharmacists (Category A) with the national pharmacy council.",
    features: [
      "Voting rights at the AGM",
      "Accredited CPD programmes",
      "BPS Pharmaceutical Journal access",
      "Member rates for all events",
      "Divisions & chapters network",
    ],
    highlight: true,
  },
  {
    name: "Life Member",
    price: "৳15,000",
    period: "one-time",
    text: "Lifetime commitment for registered pharmacists who want to give back.",
    features: ["All Full Member benefits", "Lifetime recognition", "Priority committee nominations", "Exclusive life-member gatherings"],
    highlight: false,
  },
] as const;

export const benefits = [
  { icon: "BadgeCheck", title: "Professional recognition", text: "Be part of the national voice of pharmacists." },
  { icon: "GraduationCap", title: "Accredited CPD", text: "Earn credits through workshops, webinars and seminars." },
  { icon: "BookOpen", title: "Journal access", text: "Read and publish in the BPS Pharmaceutical Journal." },
  { icon: "Users", title: "Network", text: "Connect with peers across hospitals, industry and academia." },
  { icon: "Globe", title: "Global exposure", text: "Pathways to regional and international pharmacy events." },
  { icon: "Award", title: "Awards & grants", text: "Recognition for excellence and research support." },
] as const;

export const applySteps = [
  { title: "Choose a category", text: "Pick Student, Full or Life membership." },
  { title: "Prepare documents", text: "Pharmacist registration certificate, NID and a recent photograph." },
  { title: "Submit application", text: "Fill in the form and pay the membership fee." },
  { title: "Get verified", text: "Receive your BPS membership ID within 2–3 weeks." },
] as const;

export const faqs = [
  {
    q: "Who can become a member of BPS?",
    a: "Pharmacists registered with the national pharmacy council can become Full or Life members. Pharmacy students at recognised universities can join as Student members.",
  },
  {
    q: "How long does verification take?",
    a: "Applications are usually verified within 2–3 weeks after all documents and fees are received.",
  },
  {
    q: "Do CPD programmes count towards professional development records?",
    a: "Yes. Every BPS CPD activity issues a certificate stating the credit hours earned, which you can keep in your professional portfolio.",
  },
  {
    q: "Can I upgrade from Full to Life membership?",
    a: "Yes. Contact the secretariat and pay the difference; your membership ID stays the same.",
  },
  {
    q: "Is there a discount for young pharmacists?",
    a: "Pharmacists within two years of graduation receive a reduced first-year fee through the Young Pharmacists Group.",
  },
] as const;

export const cpdProgrammes = [
  {
    category: "Clinical",
    title: "Clinical Pharmacy Essentials",
    text: "Patient assessment, therapeutic drug monitoring and medication reviews.",
    hours: 12,
    mode: "Hybrid",
    image: photos.patientCare,
  },
  {
    category: "Public Health",
    title: "Antimicrobial Stewardship",
    text: "Practical AMR strategies for hospitals and community pharmacies.",
    hours: 6,
    mode: "Online",
    image: photos.pipette,
  },
  {
    category: "Industry",
    title: "GMP & Quality Systems",
    text: "Current good manufacturing practice, validation and data integrity.",
    hours: 10,
    mode: "In-person",
    image: photos.labCorridor,
  },
  {
    category: "Regulatory",
    title: "Regulatory Affairs & Exports",
    text: "Dossier preparation, CTD format and international registrations.",
    hours: 8,
    mode: "Online",
    image: photos.doctorLaptop,
  },
  {
    category: "Practice",
    title: "Patient Counselling Skills",
    text: "Communication, adherence support and safe self-medication advice.",
    hours: 4,
    mode: "In-person",
    image: photos.pillOrganizer,
  },
  {
    category: "Research",
    title: "Research Methods & Writing",
    text: "From study design to publishing in peer-reviewed journals.",
    hours: 8,
    mode: "Hybrid",
    image: photos.students,
  },
] as const;

export type BpsEvent = {
  slug: string;
  title: string;
  date: string;
  day: string;
  month: string;
  location: string;
  type: "Conference" | "Workshop" | "Webinar" | "Seminar";
  text: string;
  image: string;
};

export const events: BpsEvent[] = [
  {
    slug: "national-pharmacy-convention-2026",
    title: "National Pharmacy Convention 2026",
    date: "2026-12-12",
    day: "12",
    month: "Dec",
    location: "BPS Convention Hall, Demo Road, Dhaka",
    type: "Conference",
    text: "The flagship annual gathering of pharmacists, policy makers and industry leaders.",
    image: photos.conference,
  },
  {
    slug: "world-pharmacists-day-seminar",
    title: "Antimicrobial Resistance: Pharmacists in Action",
    date: "2026-11-21",
    day: "21",
    month: "Nov",
    location: "Online · BPS Live",
    type: "Webinar",
    text: "A national webinar during World AMR Awareness Week on stewardship in practice.",
    image: photos.pipette,
  },
  {
    slug: "clinical-pharmacy-workshop",
    title: "Hands-on Clinical Pharmacy Workshop",
    date: "2026-11-08",
    day: "08",
    month: "Nov",
    location: "BPS Training Centre, Demo Campus, Dhaka",
    type: "Workshop",
    text: "Case-based learning on medication reviews and therapeutic drug monitoring.",
    image: photos.seminar,
  },
  {
    slug: "young-pharmacists-leadership-summit",
    title: "Young Pharmacists Leadership Summit",
    date: "2026-10-30",
    day: "30",
    month: "Oct",
    location: "BPS Regional Office, Demo City",
    type: "Seminar",
    text: "Career pathways, leadership and innovation for early-career pharmacists.",
    image: photos.lectureHall,
  },
];

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Press Release" | "Society News" | "Public Health" | "Education";
  image: string;
  body: string[];
};

export const news: NewsPost[] = [
  {
    slug: "world-pharmacists-day-2026",
    title: "BPS celebrates World Pharmacists Day 2026 across all divisions",
    excerpt:
      "Rallies, free health camps and seminars highlighted the pharmacist's role in strengthening Bangladesh's health system.",
    date: "2026-09-25",
    category: "Society News",
    image: photos.healthWorker,
    body: [
      "Bangladesh Pharmaceutical Society marked World Pharmacists Day with programmes in every divisional city, bringing together pharmacists, students and members of the public.",
      "Free health camps offered blood pressure checks, medicine counselling and awareness sessions on the safe use of antibiotics.",
      "Speakers emphasised the need to expand hospital and clinical pharmacy services so that every patient benefits from a pharmacist's expertise.",
    ],
  },
  {
    slug: "statement-on-antibiotic-misuse",
    title: "Statement on the rational use of antibiotics",
    excerpt:
      "BPS urges stronger enforcement of prescription-only sales and public awareness to tackle antimicrobial resistance.",
    date: "2026-09-10",
    category: "Press Release",
    image: photos.blisters,
    body: [
      "Antimicrobial resistance is one of the most serious public health threats facing Bangladesh. BPS calls on all stakeholders to work together.",
      "The society recommends strict adherence to prescription-only dispensing of antibiotics, continuous pharmacist training and targeted public campaigns.",
      "BPS stands ready to support the national drug regulatory and health authorities in implementing the national action plan.",
    ],
  },
  {
    slug: "cpd-portal-launch",
    title: "New CPD calendar announced for 2026–27",
    excerpt:
      "Over 120 hours of accredited learning across clinical, industrial, regulatory and research tracks.",
    date: "2026-08-18",
    category: "Education",
    image: photos.students,
    body: [
      "The CPD committee has published a comprehensive calendar of workshops, webinars and seminars for the 2026–27 session.",
      "Programmes span clinical pharmacy, antimicrobial stewardship, GMP, regulatory affairs and research methodology.",
      "Members receive priority registration and discounted fees for all CPD activities.",
    ],
  },
  {
    slug: "medicine-safety-campaign",
    title: "“Know Your Medicine” public awareness campaign launched",
    excerpt:
      "A nationwide campaign helping families store, use and dispose of medicines safely.",
    date: "2026-07-30",
    category: "Public Health",
    image: photos.pillsBlue,
    body: [
      "The campaign provides easy-to-understand guidance in Bangla on reading labels, completing antibiotic courses and safe disposal of expired medicines.",
      "Community pharmacists across the country are distributing leaflets and offering free counselling.",
      "BPS invites pharmacy students to volunteer as campaign ambassadors in their communities.",
    ],
  },
];

export const partners: { name: string; text: string; icon: IconName }[] = [
  { name: "Divisional Chapters", text: "Local leadership and member services across every division of Bangladesh.", icon: "MapPinned" },
  { name: "Young Pharmacists Group", text: "Mentoring, networking and leadership for early-career pharmacists.", icon: "Sprout" },
  { name: "Hospital Pharmacy Division", text: "Clinical practice, medication safety and ward-based pharmaceutical care.", icon: "Hospital" },
  { name: "Industrial Pharmacy Division", text: "Manufacturing quality, regulatory affairs and GMP excellence.", icon: "Factory" },
  { name: "Academic & Research Forum", text: "Teaching, research collaboration and scholarly publishing.", icon: "FlaskConical" },
  { name: "Pharmacy Students' Wing", text: "Bringing students into the profession through events and outreach.", icon: "GraduationCap" },
];

export const publications = [
  {
    title: "BPS Pharmaceutical Journal",
    text: "The official peer-reviewed journal of the society, publishing original research, reviews and short communications in pharmaceutical sciences.",
    tag: "Journal",
    image: photos.vials,
  },
  {
    title: "BPS Newsletter",
    text: "Quarterly updates on society activities, policy developments and member achievements.",
    tag: "Newsletter",
    image: photos.stage,
  },
  {
    title: "Practice Guidelines",
    text: "Standards and good practice guides for community, hospital and industrial pharmacy.",
    tag: "Guidelines",
    image: photos.blister,
  },
] as const;

export const publicResources = [
  { title: "Safe use of antibiotics", text: "Why you must complete the full course and never share antibiotics." },
  { title: "Storing medicines at home", text: "Keep medicines cool, dry and out of reach of children." },
  { title: "Disposing expired medicines", text: "Return unused medicines to your pharmacy instead of throwing them away." },
  { title: "Ask your pharmacist", text: "Questions to ask before you start any new medicine." },
] as const;
