/* ─── Northline Fitness — shared data store ─── */

/* ─── Programs / Class Schedule ─── */
export type DaySlug = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export interface ClassSlot {
  id: string;
  name: string;
  day: DaySlug;
  time: string;
  duration: string;
  coach: string;
  level: "all" | "beginner" | "intermediate" | "advanced";
  category: "strength" | "hypertrophy" | "conditioning" | "strongman" | "recovery" | "olympic";
  capacity: number;
  enrolled: number;
}

const DAYS: DaySlug[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_LABELS: Record<DaySlug, string> = {
  mon: "Monday", tue: "Tuesday", wed: "Wednesday",
  thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday",
};

export const CLASSES: ClassSlot[] = [
  // Monday
  { id: "mon-1", name: "Iron Circuit", day: "mon", time: "06:00", duration: "45m", coach: "Jenna Carter", level: "all", category: "conditioning", capacity: 16, enrolled: 12 },
  { id: "mon-2", name: "Strength Foundations", day: "mon", time: "09:00", duration: "60m", coach: "Marcus Thorne", level: "beginner", category: "strength", capacity: 12, enrolled: 8 },
  { id: "mon-3", name: "Hypertrophy Lab", day: "mon", time: "12:00", duration: "50m", coach: "Sofia Reyes", level: "intermediate", category: "hypertrophy", capacity: 15, enrolled: 14 },
  { id: "mon-4", name: "Strongman", day: "mon", time: "17:00", duration: "75m", coach: "Dmitri Volkov", level: "advanced", category: "strongman", capacity: 8, enrolled: 8 },
  { id: "mon-5", name: "Olympic Lifting", day: "mon", time: "18:30", duration: "60m", coach: "Aisha Patel", level: "intermediate", category: "olympic", capacity: 10, enrolled: 6 },
  // Tuesday
  { id: "tue-1", name: "Powerlifting", day: "tue", time: "06:00", duration: "75m", coach: "Marcus Thorne", level: "advanced", category: "strength", capacity: 12, enrolled: 11 },
  { id: "tue-2", name: "Mobility & Recovery", day: "tue", time: "10:00", duration: "45m", coach: "Lena Park", level: "all", category: "recovery", capacity: 20, enrolled: 7 },
  { id: "tue-3", name: "Strongwoman", day: "tue", time: "09:00", duration: "60m", coach: "Sofia Reyes", level: "all", category: "strength", capacity: 8, enrolled: 5 },
  { id: "tue-4", name: "HIIT / Conditioning", day: "tue", time: "12:30", duration: "40m", coach: "Jenna Carter", level: "all", category: "conditioning", capacity: 16, enrolled: 13 },
  { id: "tue-5", name: "Strength Foundations", day: "tue", time: "17:00", duration: "60m", coach: "Marcus Thorne", level: "beginner", category: "strength", capacity: 12, enrolled: 9 },
  // Wednesday
  { id: "wed-1", name: "Hypertrophy Lab", day: "wed", time: "06:00", duration: "50m", coach: "Sofia Reyes", level: "intermediate", category: "hypertrophy", capacity: 15, enrolled: 10 },
  { id: "wed-2", name: "Olympic Lifting", day: "wed", time: "09:00", duration: "60m", coach: "Aisha Patel", level: "intermediate", category: "olympic", capacity: 10, enrolled: 8 },
  { id: "wed-3", name: "Iron Circuit", day: "wed", time: "12:00", duration: "45m", coach: "Jenna Carter", level: "all", category: "conditioning", capacity: 16, enrolled: 15 },
  { id: "wed-4", name: "Strongman", day: "wed", time: "16:00", duration: "75m", coach: "Dmitri Volkov", level: "advanced", category: "strongman", capacity: 8, enrolled: 6 },
  { id: "wed-5", name: "Powerlifting", day: "wed", time: "18:00", duration: "75m", coach: "Marcus Thorne", level: "advanced", category: "strength", capacity: 12, enrolled: 10 },
  // Thursday
  { id: "thu-1", name: "Strength Foundations", day: "thu", time: "06:00", duration: "60m", coach: "Marcus Thorne", level: "beginner", category: "strength", capacity: 12, enrolled: 7 },
  { id: "thu-2", name: "Strongwoman", day: "thu", time: "09:00", duration: "60m", coach: "Sofia Reyes", level: "all", category: "strength", capacity: 8, enrolled: 6 },
  { id: "thu-3", name: "Mobility & Recovery", day: "thu", time: "14:00", duration: "45m", coach: "Lena Park", level: "all", category: "recovery", capacity: 20, enrolled: 4 },
  { id: "thu-4", name: "HIIT / Conditioning", day: "thu", time: "17:30", duration: "40m", coach: "Jenna Carter", level: "all", category: "conditioning", capacity: 16, enrolled: 14 },
  { id: "thu-5", name: "Hypertrophy Lab", day: "thu", time: "18:30", duration: "50m", coach: "Sofia Reyes", level: "intermediate", category: "hypertrophy", capacity: 15, enrolled: 12 },
  // Friday
  { id: "fri-1", name: "Powerlifting", day: "fri", time: "06:00", duration: "75m", coach: "Marcus Thorne", level: "advanced", category: "strength", capacity: 12, enrolled: 9 },
  { id: "fri-2", name: "Olympic Lifting", day: "fri", time: "09:00", duration: "60m", coach: "Aisha Patel", level: "intermediate", category: "olympic", capacity: 10, enrolled: 7 },
  { id: "fri-3", name: "Iron Circuit", day: "fri", time: "12:00", duration: "45m", coach: "Jenna Carter", level: "all", category: "conditioning", capacity: 16, enrolled: 11 },
  { id: "fri-4", name: "Strength Foundations", day: "fri", time: "16:00", duration: "60m", coach: "Marcus Thorne", level: "beginner", category: "strength", capacity: 12, enrolled: 5 },
  { id: "fri-5", name: "Strongman", day: "fri", time: "17:30", duration: "75m", coach: "Dmitri Volkov", level: "advanced", category: "strongman", capacity: 8, enrolled: 7 },
  // Saturday
  { id: "sat-1", name: "Strongwoman", day: "sat", time: "08:00", duration: "60m", coach: "Sofia Reyes", level: "all", category: "strength", capacity: 8, enrolled: 4 },
  { id: "sat-2", name: "Strength Foundations", day: "sat", time: "09:00", duration: "60m", coach: "Marcus Thorne", level: "beginner", category: "strength", capacity: 12, enrolled: 6 },
  { id: "sat-3", name: "HIIT / Conditioning", day: "sat", time: "10:30", duration: "40m", coach: "Jenna Carter", level: "all", category: "conditioning", capacity: 16, enrolled: 10 },
  { id: "sat-4", name: "Mobility & Recovery", day: "sat", time: "12:00", duration: "45m", coach: "Lena Park", level: "all", category: "recovery", capacity: 20, enrolled: 3 },
];

/* ─── Coaches ─── */
export interface Coach {
  slug: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  credentials: string[];
  stats: { label: string; value: string }[];
  initials: string;
  gradient: string;
}

export const COACHES: Coach[] = [
  {
    slug: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Head Strength Coach",
    specialties: ["Powerlifting", "Strongman", "Program Design", "Competition Prep"],
    bio: "Former national-level powerlifter with 12+ years of coaching. Marcus has programmed for NFL athletes, national-level strongmen, and everyday warriors. His philosophy: progressive overload executed with surgical precision.",
    credentials: ["CSCS", "USAAPL Coach", "Certified Strongman Coach", "BS Exercise Science"],
    stats: [
      { label: "Years Coaching", value: "12+" },
      { label: "Athletes Trained", value: "500+" },
      { label: "Best Squat", value: "725 lbs" },
    ],
    initials: "MT",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    slug: "sofia-reyes",
    name: "Sofia Reyes",
    role: "Director of Performance",
    specialties: ["Hypertrophy", "Strongwoman", "Athletic Conditioning", "Body Composition"],
    bio: "Exercise science degree, CSCS certified. Sofia bridges the gap between evidence-based training and old-school intensity. She's built a reputation for transforming physiques while building unshakable mental toughness.",
    credentials: ["CSCS", "MS Exercise Physiology", "Precision Nutrition L1"],
    stats: [
      { label: "Years Coaching", value: "9" },
      { label: "BodyX Transformations", value: "200+" },
      { label: "Client Retention", value: "94%" },
    ],
    initials: "SR",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "dmitri-volkov",
    name: "Dmitri Volkov",
    role: "Strongman & Power Coach",
    specialties: ["Strongman Events", "Explosive Power", "Injury Prevention", "Mobility"],
    bio: "International strongman competitor and coach. Dmitri brings Eastern European training methodology — high frequency, heavy compounds, and ruthless attention to technique. He doesn't just make you stronger; he makes you bulletproof.",
    credentials: ["Certified Strongman Coach", "FRC Mobility Specialist", "Kettlebell L2"],
    stats: [
      { label: "Competition Years", value: "15" },
      { label: "Log Press Max", value: "405 lbs" },
      { label: "Yoke Walk", value: "1,000 lbs" },
    ],
    initials: "DV",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    slug: "jenna-carter",
    name: "Jenna Carter",
    role: "Metabolic Conditioning Lead",
    specialties: ["HIIT", "Iron Circuit", "Endurance", "Metabolic Conditioning"],
    bio: "CrossFit Level 3 trainer and former collegiate athlete. Jenna's classes are engineered to maximize output in minimum time. She programs with a stopwatch in hand — every second matters.",
    credentials: ["CF-L3", "OPEX Coach", "CPR/AED"],
    stats: [
      { label: "Classes Taught", value: "3,000+" },
      { label: "Avg Class Rating", value: "4.9 / 5" },
      { label: "Member PRs Set", value: "400+" },
    ],
    initials: "JC",
    gradient: "from-red-500 to-pink-500",
  },
  {
    slug: "lena-park",
    name: "Lena Park",
    role: "Recovery & Mobility Specialist",
    specialties: ["Mobility", "Injury Rehab", "Flexibility", "Prehab"],
    bio: "Doctor of Physical Therapy with a singular focus on strength athletes. Lena keeps our members lifting heavy and moving well. She believes mobility is the foundation of every PR.",
    credentials: ["DPT", "FMS L2", "Dry Needling Certified"],
    stats: [
      { label: "Patients Treated", value: "1,200+" },
      { label: "Return-to-Lift Rate", value: "96%" },
      { label: "Years in PT", value: "11" },
    ],
    initials: "LP",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    slug: "aisha-patel",
    name: "Aisha Patel",
    role: "Olympic Lifting Coach",
    specialties: ["Olympic Lifting", "Technique Precision", "Speed & Power", "Weightlifting"],
    bio: "National-level weightlifting coach and former competitive lifter. Aisha's eye for technique is legendary — she can spot a 2cm barbell path deviation from across the gym. Every lift becomes more efficient under her guidance.",
    credentials: ["USAWF L2", "CSCS", "Sports Nutrition L1"],
    stats: [
      { label: "Competition Experience", value: "10 yrs" },
      { label: "Athlete PRs", value: "300+" },
      { label: "Best Snatch (Athlete)", value: "285 lbs" },
    ],
    initials: "AP",
    gradient: "from-violet-500 to-purple-600",
  },
];

/* ─── Membership Plans ─── */
export interface MembershipPlan {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;      /* per-month when billed annually */
  description: string;
  features: string[];
  limits: string[];    /* features NOT included */
  popular: boolean;
}

export const PLANS: MembershipPlan[] = [
  {
    name: "Striker",
    tagline: "For the dedicated athlete",
    monthly: 99,
    annual: 79,
    description: "Everything you need to train without limits. 24/7 access, full equipment, and a community that pushes you.",
    features: [
      "24/7 gym access",
      "All strength & cardio zones",
      "Locker & shower access",
      "Guest pass (2x/month)",
      "App-based check-in",
      "Free parking",
    ],
    limits: ["Classes & coaching", "Nutrition consultation", "Monthly 1-on-1 session"],
    popular: false,
  },
  {
    name: "Warrior",
    tagline: "Our most popular plan",
    monthly: 149,
    annual: 119,
    description: "Full access to classes, coaching, and the Northline community. The sweet spot for serious results.",
    features: [
      "24/7 gym access",
      "All strength & cardio zones",
      "Locker & shower access",
      "Guest pass (4x/month)",
      "Unlimited signature classes",
      "Team coaching sessions",
      "Nutrition starter consultation",
      "Monthly 1-on-1 session",
      "Exclusive member events",
    ],
    limits: ["Weekly 1-on-1 personal training", "Recovery suite access"],
    popular: true,
  },
  {
    name: "Legend",
    tagline: "The complete experience",
    monthly: 249,
    annual: 199,
    description: "Private coaching, recovery suite access, and priority everything. Maximum results, minimum friction.",
    features: [
      "Everything in Warrior",
      "Weekly 1-on-1 personal training",
      "Custom program design",
      "Recovery suite access (sauna, cold plunge)",
      "Priority class booking (48h early access)",
      "Monthly body composition scan",
      "Nutrition plan & quarterly review",
      "Exclusive Legend events & seminars",
      "VIP guest passes (6x/month)",
    ],
    limits: [],
    popular: false,
  },
];

/* ─── Workout Generator (rule-based fallback) ─── */
export type Goal = "strength" | "hypertrophy" | "conditioning" | "power";
export type Equipment = "full-gym" | "dumbbells" | "bodyweight" | "barbell" | "kettlebells";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  notes?: string;
}

export interface WorkoutPlan {
  title: string;
  goal: string;
  equipment: string;
  focus: string;
  warmup: string[];
  exercises: { exercise: string; sets: string; reps: string; notes?: string }[];
  cooldown: string[];
}

const WORKOUT_TEMPLATES: Record<string, { focus: string; warmup: string[]; exercises: Exercise[]; cooldown: string[] }> = {
  "strength-full-gym": {
    focus: "Compound strength — heavy compounds with progressive overload",
    warmup: ["5 min rower (moderate pace)", "Hip circles + leg swings", "Light bar warmup (5x squat, 5x bench, 5x deadlift)"],
    exercises: [
      { name: "Barbell Back Squat", sets: "5", reps: "5", notes: "Add 5 lbs from last session" },
      { name: "Barbell Bench Press", sets: "5", reps: "5", notes: "2-second pause on last rep" },
      { name: "Deadlift (Conventional)", sets: "4", reps: "6", notes: "Reset each rep" },
      { name: "Standing Overhead Press", sets: "4", reps: "8" },
      { name: "Weighted Pull-ups", sets: "3", reps: "8", notes: "Add belt if < 8 reps" },
    ],
    cooldown: ["Child's pose 60s", "Lat stretch 60s/side", "Chest stretch 60s/side"],
  },
  "strength-barbell": {
    focus: "Barbell-only strength — the core four",
    warmup: ["5 min jump rope", "Cat-cow 10x", "Bar warmup sets"],
    exercises: [
      { name: "Barbell Back Squat", sets: "5", reps: "5" },
      { name: "Barbell Bench Press", sets: "5", reps: "5" },
      { name: "Barbell Row", sets: "4", reps: "8" },
      { name: "Standing Overhead Press", sets: "4", reps: "8" },
    ],
    cooldown: ["Bent-over hamstring 60s/side", "Doorway chest stretch 60s"],
  },
  "strength-dumbbells": {
    focus: "Dumbbell strength — unilateral work & stability",
    warmup: ["Arm circles 30s each direction", "Bodyweight squats 15x", "Dumbbell halos 10x"],
    exercises: [
      { name: "DB Goblet Squat", sets: "4", reps: "10", notes: "Heaviest manageable" },
      { name: "DB Flat Bench Press", sets: "4", reps: "10", notes: "Control descent" },
      { name: "DB Single-Arm Row", sets: "3", reps: "12/side" },
      { name: "DB Lateral Raise", sets: "3", reps: "15" },
      { name: "DB Farmer Walk", sets: "3", reps: "30s", notes: "Heavy as possible" },
    ],
    cooldown: ["Thoracic spine rotation 60s/side", "Pigeon pose 60s/side"],
  },
  "hypertrophy-full-gym": {
    focus: "Bodybuilding-style — volume, time under tension, pump",
    warmup: ["5 min bike", "Band pull-aparts 15x", "Arm circles"],
    exercises: [
      { name: "Incline DB Press", sets: "4", reps: "12", notes: "3-second negative" },
      { name: "Machine Row", sets: "4", reps: "15", notes: "Squeeze at peak" },
      { name: "DB Shoulder Press", sets: "3", reps: "12" },
      { name: "Cable Lateral Raise", sets: "3", reps: "15" },
      { name: "EZ Bar Curl", sets: "3", reps: "15" },
      { name: "Tricep Rope Pushdown", sets: "3", reps: "15" },
      { name: "Leg Press", sets: "4", reps: "15", notes: "Deep stretch" },
    ],
    cooldown: ["Tricep stretch 60s/side", "Quad stretch 60s/side"],
  },
  "conditioning-any": {
    focus: "Metabolic conditioning — maximum output in minimal time",
    warmup: ["3 min bike easy", "Dynamic stretching 5 min", "Light jog 2 min"],
    exercises: [
      { name: "Kettlebell Swings", sets: "4", reps: "20", notes: "Every minute on the minute" },
      { name: "Box Jumps", sets: "4", reps: "12" },
      { name: "Battle Ropes", sets: "4", reps: "30s" },
      { name: "Burpees", sets: "4", reps: "15" },
      { name: "Med Ball Slams", sets: "4", reps: "15" },
    ],
    cooldown: ["Walking 3 min", "Full-body stretch"],
  },
  "power-bodyweight": {
    focus: "Power at home — explosive bodyweight movements",
    warmup: ["Jumping jacks 3 min", "Hip openers 10/side", "Cat-cow 10x"],
    exercises: [
      { name: "Plyo Push-ups", sets: "3", reps: "10" },
      { name: "Bulgarian Split Squats (BW)", sets: "3", reps: "12/side" },
      { name: "Burpees", sets: "4", reps: "12" },
      { name: "Pike Push-ups", sets: "3", reps: "10" },
      { name: "Lunges (explosive)", sets: "3", reps: "10/side" },
    ],
    cooldown: ["Downward dog 60s", "Hamstring stretch 60s/side"],
  },
  "hypertrophy-dumbbells": {
    focus: "Dumbbell hypertrophy — pump-focused home session",
    warmup: ["5 min jog in place", "DB halos 10x", "Bodyweight squats 15x"],
    exercises: [
      { name: "DB Goblet Squat", sets: "4", reps: "12" },
      { name: "DB Bench Press", sets: "4", reps: "12" },
      { name: "DB Bent-Over Row", sets: "4", reps: "12" },
      { name: "DB Lateral Raise", sets: "3", reps: "15" },
      { name: "DB Bicep Curl", sets: "3", reps: "15" },
      { name: "DB Overhead Tricep Extension", sets: "3", reps: "15" },
    ],
    cooldown: ["Tricep stretch 60s/side", "Quad stretch 60s/side"],
  },
};

export function generateWorkout(goal: Goal, equipment: Equipment): WorkoutPlan {
  const key = `${goal}-${equipment}`;
  const fallbackKeys = [
    key,
    `${goal}-full-gym`,
    `${goal}-dumbbells`,
    `${goal}-bodyweight`,
    "conditioning-any",
    "strength-full-gym",
  ];
  let template: typeof WORKOUT_TEMPLATES[string] | undefined;

  for (const k of fallbackKeys) {
    if (WORKOUT_TEMPLATES[k]) {
      template = WORKOUT_TEMPLATES[k];
      break;
    }
  }

  if (!template) {
    template = WORKOUT_TEMPLATES["strength-full-gym"]!;
  }

  const goalLabels: Record<Goal, string> = {
    strength: "Strength",
    hypertrophy: "Hypertrophy",
    conditioning: "Conditioning",
    power: "Power / Explosiveness",
  };
  const equipLabels: Record<Equipment, string> = {
    "full-gym": "Full Gym",
    dumbbells: "Dumbbells",
    bodyweight: "Bodyweight",
    barbell: "Barbell Only",
    kettlebells: "Kettlebells",
  };

  return {
    title: `${goalLabels[goal]} • ${equipLabels[equipment]}`,
    goal: goalLabels[goal],
    equipment: equipLabels[equipment],
    focus: template.focus,
    warmup: template.warmup,
    exercises: template.exercises.map((e, i) => ({
      exercise: e.name,
      sets: e.sets,
      reps: e.reps,
      notes: e.notes,
    })),
    cooldown: template.cooldown,
  };
}