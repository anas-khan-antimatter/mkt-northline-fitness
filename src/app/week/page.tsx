"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Calculator,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Flame,
} from "lucide-react";
import { useState } from "react";

/* ─── Plan definitions ─── */
interface Plan {
  name: string;
  price: number;
  sessionsPerWeek: number;
  tagline: string;
  features: string[];
  bestFor: string;
}

const plans: Plan[] = [
  {
    name: "ANVIL",
    price: 79,
    sessionsPerWeek: 2,
    tagline: "Twice a week. Maximum intensity.",
    features: [
      "2 coached sessions per week",
      "Open gym 24/7",
      "Programmed workouts",
      "Nutrition starter guide",
    ],
    bestFor: "Consistency with a busy schedule",
  },
  {
    name: "IRON",
    price: 99,
    sessionsPerWeek: 3,
    tagline: "Three days. Full access.",
    features: [
      "3 coached sessions per week",
      "Open gym 24/7",
      "Programmed workouts",
      "Monthly progress review",
      "Access to all classes",
    ],
    bestFor: "Steady strength & conditioning progress",
  },
  {
    name: "STEEL",
    price: 129,
    sessionsPerWeek: 4,
    tagline: "Four days. Maximum output.",
    features: [
      "4 coached sessions per week",
      "Open gym 24/7",
      "Programmed workouts",
      "Bi-weekly progress review",
      "Access to all classes",
      "Recovery & mobility programming",
    ],
    bestFor: "Serious athletes & rapid results",
  },
  {
    name: "TITAN",
    price: 169,
    sessionsPerWeek: 5,
    tagline: "Five days. No limits.",
    features: [
      "5 coached sessions per week",
      "Open gym 24/7",
      "Unlimited classes",
      "Weekly 1-on-1 coaching",
      "Custom nutrition plan",
      "Priority event registration",
    ],
    bestFor: "Elite performance & competition prep",
  },
];

/* ─── Goal mapping ─── */
const goalDescriptions: Record<string, string> = {
  "General Fitness": "A balanced approach to overall health and conditioning.",
  "Strength": "Focus on raw power and compound lift progression.",
  "Weight Loss": "High-calorie-burn sessions with metabolic focus.",
  "Athletic Performance": "Sport-specific training for speed, power, agility.",
  "Competition Prep": "Peaking cycles, technique work, and mock meets.",
};

export default function WeekPage() {
  const [daysPerWeek, setDaysPerWeek] = useState<number>(3);
  const [goal, setGoal] = useState<string>("General Fitness");
  const [showResults, setShowResults] = useState(false);

  function recommend(): Plan {
    // Find the plan matching or just above the selected days
    const match = [...plans].sort((a, b) => a.sessionsPerWeek - b.sessionsPerWeek);
    for (const p of match) {
      if (p.sessionsPerWeek >= daysPerWeek) return p;
    }
    return plans[plans.length - 1];
  }

  const recommended = recommend();
  const goalDesc = goalDescriptions[goal] || "";

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="relative px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/[3%] diagonal-cut-lg" />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-14 w-14 items-center justify-center brutal-border bg-black/40 mb-6">
              <Calculator className="h-7 w-7 text-primary" />
            </div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Membership
            </span>
            <h1 className="font-heading text-5xl font-bold tracking-tight mt-3 sm:text-7xl md:text-8xl leading-[1.05]">
              FIND YOUR<br />
              <span className="text-safety heavy-underline">PLAN</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Tell us how often you want to train and what you want to achieve.
              We will match you to the right membership — no guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            {/* Controls */}
            <div className="lg:col-span-2 space-y-8">
              {/* Days per week slider */}
              <div className="border-2 border-primary/40 bg-black/40 p-8 diagonal-cut">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    Training Days / Week
                  </span>
                </div>

                <div className="mt-4">
                  <input
                    type="range"
                    min={1}
                    max={6}
                    value={daysPerWeek}
                    onChange={(e) => {
                      setDaysPerWeek(Number(e.target.value));
                      setShowResults(false);
                    }}
                    className="w-full h-2 appearance-none bg-primary/30 rounded-none accent-primary cursor-pointer"
                  />
                </div>

                <div className="mt-6 flex items-center justify-center">
                  <span className="font-heading text-6xl font-bold text-primary">
                    {daysPerWeek}
                  </span>
                  <span className="ml-2 text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    days / wk
                  </span>
                </div>

                <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                </div>
              </div>

              {/* Goal selector */}
              <div className="border-2 border-primary/30 bg-black/40 p-8 diagonal-cut">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    Your Goal
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {Object.keys(goalDescriptions).map((g) => (
                    <label
                      key={g}
                      className={`flex items-center gap-3 p-3 cursor-pointer border transition-colors ${
                        goal === g
                          ? "border-primary bg-primary/10"
                          : "border-white/10 bg-black/30 hover:border-primary/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="goal"
                        value={g}
                        checked={goal === g}
                        onChange={(e) => {
                          setGoal(e.target.value);
                          setShowResults(false);
                        }}
                        className="sr-only"
                      />
                      <div className={`h-3 w-3 rounded-full ${
                        goal === g ? "bg-primary" : "border-2 border-white/30"
                      }`} />
                      <span className="text-sm font-bold uppercase tracking-[0.08em] text-foreground">
                        {g}
                      </span>
                    </label>
                  ))}
                </div>

                {goalDesc && (
                  <p className="mt-4 text-xs italic text-muted-foreground">
                    {goalDesc}
                  </p>
                )}
              </div>

              {/* Calculate button */}
              <button
                onClick={() => setShowResults(true)}
                className="group flex items-center justify-center gap-2 h-14 brutal-border bg-primary text-primary-foreground px-10 text-base font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow w-full"
              >
                <Calculator className="h-5 w-5" />
                Calculate My Plan
              </button>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {showResults ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Recommended plan card */}
                  <div className="border-2 border-primary bg-black/40 overflow-hidden diagonal-cut-lg relative">
                    {/* Glow */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-3xl" />
                    <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />

                    {/* Header */}
                    <div className="bg-primary/10 border-b border-primary/30 px-8 py-6 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                          Recommended
                        </span>
                        <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mt-1">
                          {recommended.name}
                        </h2>
                      </div>
                      <div className="text-center">
                        <span className="font-heading text-4xl font-bold text-primary">
                          ${recommended.price}
                        </span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground mt-0.5">
                          / month
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-8 space-y-6">
                      <p className="text-sm font-semibold tracking-wide text-muted-foreground">
                        {recommended.tagline}
                      </p>

                      <div className="border-t border-white/10 pt-5">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary block mb-3">
                          What is included
                        </span>
                        <ul className="space-y-3">
                          {recommended.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-white/10 pt-5">
                        <div className="flex items-center gap-3">
                          <Flame className="h-5 w-5 text-primary" />
                          <span className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                            Best for: {recommended.bestFor}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-5">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary block mb-2">
                          Your inputs
                        </span>
                        <div className="flex flex-wrap gap-3">
                          <div className="brutal-border bg-black/50 px-4 py-2">
                            <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                              Days / Week
                            </span>
                            <span className="font-heading text-lg font-bold text-primary">
                              {daysPerWeek}
                            </span>
                          </div>
                          <div className="brutal-border bg-black/50 px-4 py-2">
                            <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                              Goal
                            </span>
                            <span className="font-heading text-lg font-bold text-primary">
                              {goal}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href="/checkin"
                        className="group flex items-center justify-center gap-2 h-12 brutal-border bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow"
                      >
                        Join {recommended.name} Plan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Other plans comparison */}
                  <div className="mt-12">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary block mb-6">
                      Compare All Plans
                    </span>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {plans.map((p) => (
                        <div
                          key={p.name}
                          className={`border-2 bg-black/40 p-6 text-center ${
                            p.name === recommended.name
                              ? "border-primary"
                              : "border-white/10"
                          }`}
                        >
                          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                            {p.name}
                          </span>
                          <div className="mt-2">
                            <span className="font-heading text-2xl font-bold text-primary">
                              ${p.price}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              /mo
                            </span>
                          </div>
                          <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                            {p.sessionsPerWeek} days / wk
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Empty state */
                <div className="border-2 border-white/10 bg-black/40 p-12 text-center diagonal-cut-lg">
                  <div className="flex h-16 w-16 items-center justify-center brutal-border bg-black/60 mx-auto mb-6">
                    <Calculator className="h-8 w-8 text-primary/60" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary block">
                    No Plan Selected Yet
                  </span>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
                    Set your training frequency and goal above, then hit
                    <strong className="text-primary">Calculate My Plan</strong>.
                    We will match you instantly.
                  </p>
                  <div className="mt-6 flex items-center gap-2 justify-center">
                    <div className="h-2 w-2 bg-primary" />
                    <div className="h-2 w-2 border-2 border-white/20" />
                    <div className="h-2 w-2 border-2 border-white/20" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Fine print */}
      <section className="mt-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative border-2 border-primary/30 bg-black/40 p-10 sm:p-14 diagonal-cut-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 blur-3xl" />

            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-4xl">
              ALL PLANS INCLUDE
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
              {[
                "24/7 gym access",
                "On-site coaching",
                "Programmed workouts",
                "Locker rooms & showers",
                "Free parking",
                "No annual contract",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 border border-white/10 bg-black/30 p-3">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs italic text-muted-foreground">
              * Prices shown are for month-to-month. Annual plans available at 15% discount.
              Veterans, students, and first responders receive additional 10% off.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}