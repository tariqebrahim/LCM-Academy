import { OfferingItem, ScheduleItem, WhyUsItem } from '../types';

export const ACADEMY_INFO = {
  name: 'LCM Academy',
  fullName: 'Little Creative Minds Academy',
  tagline: 'Where Little Minds Grow with Love, Creativity & Confidence',
  foundedYear: 2016,
  ageRange: '5 Months to 5 Years',
  hours: 'Mon – Thurs: 07:30 – 17:30 | Fri: 07:30 – 17:00',
  halfDayHours: '07:30 – 13:00',
  fullDayHours: 'Mon – Thurs: 07:30 – 17:30 | Fri: 07:30 – 17:00',
  phone: '0711429700',
  email: 'info@lcmacademy.co.za',
  address: '08 Couch Crescent, Parow, Cape Town 7500',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=08+Couch+Crescent,+Parow,+Cape+Town+7500&t=&z=16&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=08+Couch+Crescent,+Parow,+Cape+Town+7500',
  logoUrl: '/assets/aistudio/81429_ebfad173.png',
  socials: {
    instagram: 'https://www.instagram.com/lcm_academy?cplk=MXRrbzd2aGJwczZvaA==',
    facebook: 'https://www.facebook.com/share/1HKfH2Warb/',
    whatsapp: 'https://wa.me/message/T7TNEXZVLUQMI1',
  },
  owner: {
    name: 'Tasneem',
    title: 'Founder & Head ECD Practitioner',
    photoUrl: '/assets/aistudio/85476_d1e853f7.jpg',
    qualifications: 'ECD Qualified Practitioner · 3rd Dan Black Belt (Shotokan/Karate)',
    experience: '10+ Years in Early Childhood Development · Nearly 20 Years Karate Experience',
  }
};

export const WHAT_WE_OFFER: OfferingItem[] = [
  {
    id: 'meals',
    title: 'Meals Included',
    shortDesc: 'Breakfast and lunch are included in your fees.',
    fullDesc: 'We believe nourishing little bodies fuels curious minds. Wholesome, balanced breakfast and freshly prepared hot lunches are included in your monthly fees so your child stays energized and thriving all day.',
    badge: 'Included in Fees',
    color: 'yellow',
    icon: 'Utensils',
    includedInFees: true,
  },
  {
    id: 'learn-play',
    title: 'Learn Through Play',
    shortDesc: 'Children learn through play, sensory activities, creative time and stories.',
    fullDesc: 'Play is child’s work. Our hands-on learning environment features sensory exploration, open-ended creative arts, interactive puppet and story circles, and problem-solving games that spark lifelong curiosity.',
    badge: 'Core Pedagogy',
    color: 'coral',
    icon: 'Sparkles',
    includedInFees: true,
  },
  {
    id: 'ncf-syllabus',
    title: 'Syllabus Aligned with NCF',
    shortDesc: 'Our programme follows the National Curriculum Framework (NCF), taught through play.',
    fullDesc: 'Our academic and developmental milestones are carefully mapped to the South African National Curriculum Framework (NCF), giving children the structured cognitive and motor skills needed for seamless Grade R transition.',
    badge: 'NCF Aligned',
    color: 'blue',
    icon: 'BookOpen',
    includedInFees: true,
  },
  {
    id: 'kiddies-karate',
    title: 'Kiddies Karate',
    shortDesc: 'Karate lessons for children, as part of the daily programme.',
    fullDesc: 'Led by experienced martial arts practitioners, our gentle Kiddies Karate develops balance, gross motor coordination, spatial discipline, and self-esteem through fun, age-appropriate drills woven directly into the daily routine.',
    badge: 'Daily Programme',
    color: 'coral',
    icon: 'Award',
    includedInFees: true,
  },
  {
    id: 'potty-training',
    title: 'Potty Training Support',
    shortDesc: 'We work with you to reinforce potty training at home and at daycare.',
    fullDesc: 'No stress, gentle milestone pacing. We partner closely with parents to mirror routines, reward progress, and build toilet confidence without tears or pressure, in a clean and nurturing setting.',
    badge: 'Family Partnership',
    color: 'green',
    icon: 'Baby',
    includedInFees: true,
  },
  {
    id: 'aftercare',
    title: 'Aftercare & Extra Murals',
    shortDesc: 'Aftercare and extra murals are available. Extra murals run when at least 5 children enrol.',
    fullDesc: 'Extended afternoon care allows working parents total peace of mind. We provide calm guided free play, afternoon snacks, and elective extra murals that launch whenever 5 or more children enrol.',
    badge: 'Flexible Hours',
    color: 'purple',
    icon: 'Clock',
    includedInFees: false,
  },
  {
    id: 'self-defence',
    title: 'Self-Defence Extra Mural',
    shortDesc: 'Self-defence (karate-inclined), taught by a qualified instructor.',
    fullDesc: 'An empowering extra-mural discipline taught by our 3rd Dan black belt instructor with nearly 20 years of karate experience, focusing on body awareness, boundaries, confidence, and basic self-defence reflexes.',
    badge: 'Extra Mural',
    color: 'sky',
    icon: 'Shield',
    includedInFees: false,
  },
  {
    id: 'daily-programme',
    title: 'Daily Programme',
    shortDesc: 'Work cycle, circle time, sensory play, outside play, story time, music and movement, nap time and snack time.',
    fullDesc: 'A rhythmic, predictable day that balances focused cognitive work cycles with energetic outdoor exploration, soothing nap breaks, and social meal times.',
    badge: 'Structured Routine',
    color: 'blue',
    icon: 'Calendar',
    includedInFees: true,
  },
];

export interface AppBenefitItem {
  id: string;
  title: string;
  desc?: string;
  fullText: string;
  icon: string;
  color: string;
}

export const PARENT_APP_INFO = {
  heading: 'Stay connected with our free app.',
  subtext: 'Our app is free for parents. The cost is included in your fees.',
  badge: 'Included in Fees',
  benefits: [
    {
      id: 'signin-out',
      title: 'Sign in and out',
      desc: "record your child's arrival and departure.",
      fullText: "Sign in and out: record your child's arrival and departure.",
      icon: 'LogIn',
      color: 'emerald',
    },
    {
      id: 'daily-record',
      title: 'Daily record',
      desc: 'meals, moods, toilet visits, and formula or nappies given.',
      fullText: 'Daily record: meals, moods, toilet visits, and formula or nappies given.',
      icon: 'ClipboardCheck',
      color: 'blue',
    },
    {
      id: 'in-app-chat',
      title: 'In-app chat with teachers.',
      fullText: 'In-app chat with teachers.',
      icon: 'MessageSquare',
      color: 'amber',
    },
    {
      id: 'photos-videos',
      title: "Photos and video updates of your child's day.",
      fullText: "Photos and video updates of your child's day.",
      icon: 'Camera',
      color: 'rose',
    },
    {
      id: 'secure-pickups',
      title: 'Secure pickups',
      desc: 'extra security for additional pickups.',
      fullText: 'Secure pickups: extra security for additional pickups.',
      icon: 'ShieldCheck',
      color: 'purple',
    },
    {
      id: 'end-of-day',
      title: 'End-of-day summary.',
      fullText: 'End-of-day summary.',
      icon: 'CheckCircle2',
      color: 'emerald',
    },
    {
      id: 'billing-summary',
      title: 'Billing summary.',
      fullText: 'Billing summary.',
      icon: 'Receipt',
      color: 'blue',
    },
    {
      id: 'one-click-away',
      title: "Your child's class, one click away.",
      fullText: "Your child's class, one click away.",
      icon: 'Smartphone',
      color: 'sky',
    },
  ],
};

export const DAILY_SCHEDULE: ScheduleItem[] = [
  {
    title: 'Warm Welcome & Nutritious Breakfast',
    description: 'Gentle morning arrival, hand washing, check-in, and a wholesome warm breakfast included in tuition.',
    category: 'meal',
    badge: 'Morning Routine',
  },
  {
    title: 'Circle Time & Greetings',
    description: 'Welcome songs, weather chart, day discussion, feelings check-in, vocabulary building, and social bonding.',
    category: 'routine',
    badge: 'Social & Emotional',
  },
  {
    title: 'NCF Work Cycle & Learn Through Play',
    description: 'Cognitive developmental activities, fine-motor puzzles, counting, sensory exploration, and early literacy aligned with the National Curriculum Framework (NCF).',
    category: 'learning',
    badge: 'Core Curriculum',
    highlight: true,
  },
  {
    title: 'Morning Snack & Sensory Play',
    description: 'Fresh fruit and healthy snack time, followed by texture discovery, water/sand exploration, and playdough sensory bins.',
    category: 'meal',
    badge: 'Sensory & Nutrition',
  },
  {
    title: 'Kiddies Karate & Music and Movement',
    description: 'Engaging gross-motor development, gentle martial arts focus led by our black belt instructor, rhythm, coordination, and body awareness.',
    category: 'activity',
    badge: 'Included in Tuition',
    highlight: true,
  },
  {
    title: 'Outside Play & Gross Motor Fun',
    description: 'Supervised garden play, climbing, balance beams, tricycle riding, obstacle games, and healthy fresh-air socialization.',
    category: 'activity',
    badge: 'Physical Wellness',
  },
  {
    title: 'Wholesome Cooked Lunch',
    description: 'Nutritious hot cooked lunch included in fees, social table manners, and self-feeding encouragement in a loving environment.',
    category: 'meal',
    badge: 'Included in Tuition',
  },
  {
    title: 'Story Time & Rest / Nap Time',
    description: 'Soothing story book reading, soft lullabies, dim lighting, and restorative quiet rest on individual sanitized cots.',
    category: 'rest',
    badge: 'Rest & Reset',
  },
  {
    title: 'Afternoon Refresh, Potty & Snack Time',
    description: 'Gentle waking, hygiene routine, potty training reinforcement with positive encouragement, and fresh afternoon snacks.',
    category: 'routine',
    badge: 'Daily Routine',
  },
  {
    title: 'Aftercare & Extra Murals / Self-Defence',
    description: 'Creative arts and craft stations, guided free play, and elective extra murals (such as self-defence extra murals, running with 5+ enrolments).',
    category: 'activity',
    badge: 'Afternoon Care',
  },
];

export const WHY_CHOOSE_US: WhyUsItem[] = [
  {
    id: 'exp',
    title: '10+ Years of Experience',
    description: 'Ten years of experience caring for children, since 2016.',
    highlight: true,
    icon: 'Award',
  },
  {
    id: 'first-aid',
    title: 'First-Aid Qualified',
    description: 'Our staff are first-aid qualified, ensuring immediate, calm, and certified response to any childhood scrape or emergency.',
    icon: 'Heart',
  },
  {
    id: 'qualified-educators',
    title: 'Qualified Educators',
    description: 'Educators are qualified in Early Childhood Development (ECD), bringing evidence-based teaching and emotional warmth.',
    icon: 'BookOpen',
  },
  {
    id: 'small-classes',
    title: 'Small Classes',
    description: 'Small classes give every child one-on-one attention, ensuring no milestone is missed and every voice is heard.',
    highlight: true,
    icon: 'Smile',
  },
  {
    id: 'from-5-months',
    title: 'Experienced from 5 Months',
    description: 'We care for children from 5 months to 5 years, providing specialized infant care up to school readiness.',
    icon: 'Baby',
  },
  {
    id: 'ready-for-grade-r',
    title: 'Ready for Grade R',
    description: 'We prepare your child for Grade R. Our curriculum builds school readiness, phonics, number sense, and independence.',
    highlight: true,
    icon: 'Sparkles',
  },
  {
    id: 'owners-background',
    title: "Owner's Background",
    description: 'Our owner is ECD-qualified with 10 years of ECD experience, a 3rd Dan black belt, and nearly 20 years of karate experience.',
    icon: 'Award',
  },
];

export const AGE_GROUPS = [
  {
    title: 'Little Seedlings',
    range: '5 – 12 Months',
    focus: 'Tummy time, sensory stimulation, cuddles, gentle sleep schedules, and first milestone tracking in a secure, home-based nursery.',
    color: 'border-amber-200 bg-amber-50/60 text-amber-900',
  },
  {
    title: 'Tiny Explorers',
    range: '1 – 2 Years',
    focus: 'First words, motor coordination, sensory bins, musical movement, social sharing, and responsive caregiver bonding.',
    color: 'border-sky-200 bg-sky-50/60 text-sky-900',
  },
  {
    title: 'Creative Sprouts',
    range: '2 – 3 Years',
    focus: 'Potty training collaboration with parents, language explosion, expressive art, circle time songs, and interactive play.',
    color: 'border-emerald-200 bg-emerald-50/60 text-emerald-900',
  },
  {
    title: 'Junior Achievers',
    range: '3 – 4 Years',
    focus: 'NCF foundational concepts, Kiddies Karate introduction, creative storytelling, independence, and emotional regulation.',
    color: 'border-rose-200 bg-rose-50/60 text-rose-900',
  },
  {
    title: 'Grade R Pioneers',
    range: '4 – 5 Years',
    focus: 'Full school readiness, pre-literacy, numeracy, self-reliance, pencil grip, Kiddies Karate, and optional self-defence extra murals.',
    color: 'border-indigo-200 bg-indigo-50/60 text-indigo-900',
  },
];

export interface PricingPlan {
  id: string;
  plan: string;
  originalPrice: string;
  specialPrice: string;
  specialPeriod: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  note?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'registration-single',
    plan: 'Registration, Single Child',
    originalPrice: '',
    specialPrice: 'R1 500',
    specialPeriod: '',
    isPopular: true,
    features: [
      'Administrative & enrolment processing',
    ],
  },
  {
    id: 'registration-siblings',
    plan: 'Registration, Siblings',
    originalPrice: '',
    specialPrice: 'R2 500',
    specialPeriod: '',
    features: [
      'Administrative & enrolment processing',
    ],
  },
];

export const PRICING_NOTICE =
  'IMPORTANT: The figures above are provisional. The academy will send an updated fee document. Final prices will be provided in writing upon application.';

export const TOUR_OPTIONS = [
  'Academy Tour (General)',
  'Registration, Single Child',
  'Registration, Siblings',
] as const;

export const TOUR_TIME_SLOTS = [
  '10:00 – 10:30',
  '10:30 – 11:00',
  '11:00 – 11:30',
  '11:30 – 12:00',
] as const;

export interface SaturdayDateOption {
  value: string;
  label: string;
}

export function getUpcomingSaturdays(count = 12): SaturdayDateOption[] {
  const results: SaturdayDateOption[] = [];
  const now = new Date();
  const candidate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayOfWeek = candidate.getDay(); // 0 = Sun ... 6 = Sat
  let daysUntilSaturday = (6 - dayOfWeek + 7) % 7;

  // If today is Saturday and it's already 11:00 or later, start from next Saturday
  if (daysUntilSaturday === 0 && now.getHours() >= 11) {
    daysUntilSaturday = 7;
  }

  candidate.setDate(candidate.getDate() + daysUntilSaturday);

  for (let i = 0; i < count; i++) {
    const year = candidate.getFullYear();
    const month = String(candidate.getMonth() + 1).padStart(2, '0');
    const day = String(candidate.getDate()).padStart(2, '0');
    const value = `${year}-${month}-${day}`;
    const label = candidate.toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    results.push({ value, label });
    candidate.setDate(candidate.getDate() + 7);
  }

  return results;
}

