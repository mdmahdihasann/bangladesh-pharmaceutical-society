export const siteConfig = {
  name: "Bangladesh Pharmaceutical Society",
  shortName: "BPS",
  banglaName: "বাংলাদেশ ফার্মাসিউটিক্যাল সোসাইটি",
  tagline: "Advancing pharmacy. Protecting public health.",
  description:
    "Bangladesh Pharmaceutical Society (BPS) is the national professional body of registered pharmacists in Bangladesh — advancing pharmacy practice, education and research since 1972.",
  url: "https://www.bps-bd.org",
  founded: 1972,
  copyrightYear: 2026,
  contact: {
    email: "info@bps-bd.org",
    phone: "+880 2 0000 0000",
    address: "Dhaka, Bangladesh",
    hours: "Sun – Thu, 10:00 AM – 5:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

/** Unsplash helper — keeps image URLs consistent and sized. */
export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  pharmacy: "photo-1576602976047-174e57a47881",
  labTeam: "photo-1581093450021-4a7360e9a6b5",
  microscope: "photo-1582719471384-894fbb16e074",
  labCorridor: "photo-1579154204601-01588f351e67",
  pipette: "photo-1532187863486-abf9dbad1b69",
  vials: "photo-1576671081837-49000212a370",
  pills: "photo-1607619056574-7b8d3ee536b2",
  blister: "photo-1584308666744-24d5c474f2ae",
  blisters: "photo-1631549916768-4119b2e5f926",
  pillOrganizer: "photo-1563213126-a4273aed2016",
  pillsBlue: "photo-1628771065518-0d82f1938462",
  pillsOrange: "photo-1587854692152-cbe660dbde88",
  patientCare: "photo-1631815589968-fdb09a223b1e",
  healthWorker: "photo-1622253692010-333f2da6031d",
  surgeon: "photo-1550831107-1553da8c8464",
  doctorLaptop: "photo-1576091160550-2173dba999ef",
  conference: "photo-1540575467063-178a50c2df87",
  stage: "photo-1505373877841-8d25f7d46678",
  seminar: "photo-1524178232363-1fb2b075b655",
  students: "photo-1523240795612-9a054b0db644",
  lectureHall: "photo-1511578314322-379afb476865",
} as const;
