"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Dumbbell,
  ArrowRight,
  Flame,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Star,
  Menu,
  X,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useState } from "react";

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Join", href: "#join" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[6%] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <Dumbbell className="h-5 w-5 text-primary" />
          </div>
          <span className="font-heading text-xl font-bold tracking-wide text-foreground">
            NORTHLINE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#join"
          className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 md:inline-flex"
        >
          Start Today <ChevronRight className="h-4 w-4" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/[6%] bg-background px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
              >
                Start Today <ChevronRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 pt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Flame className="h-3.5 w-3.5" /> Open 24 / 7
        </div>

        <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          Forge Your{" "}
          <span className="text-fire inline-block">Strength</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Northline is where discipline meets community. Elite equipment,
          world-class coaching, and a culture built for those who show up.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#join"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            Claim Free Trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#programs"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-8 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-white/[4%]"
          >
            View Programs
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Stats bar ─── */
const stats = [
  { value: "12K+", label: "Active Members" },
  { value: "50+", label: "Expert Trainers" },
  { value: "15K sqft", label: "Training Floor" },
  { value: "99%", label: "Satisfaction" },
];

function StatsBar() {
  return (
    <section className="border-y border-white/[6%] bg-black/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[6%] md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <span className="font-heading text-3xl font-bold text-primary md:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Programs ─── */
const programs = [
  {
    icon: Dumbbell,
    title: "Strength Foundations",
    desc: "Build raw strength with compound lifts, progressive overload, and structured programming for every level.",
  },
  {
    icon: Zap,
    title: "HIIT / Conditioning",
    desc: "Metabolic circuits, sprints, and high-intensity intervals to torch fat and build explosive power.",
  },
  {
    icon: Shield,
    title: "Powerlifting",
    desc: "Squat, bench, deadlift focused. Technique coaching, peaking cycles, and competition prep included.",
  },
  {
    icon: Flame,
    title: "Athletic Development",
    desc: "Sport-specific training — speed, agility, mobility, and core — designed for performance athletes.",
  },
];

function Programs() {
  return (
    <section
      id="programs"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Train With Purpose
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Every program is periodized, coached, and built on real results.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[8%] bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trainers ─── */
const trainers = [
  {
    name: "Marcus Chen",
    role: "Head Strength Coach",
    bio: "Former competitive powerlifter. 10+ years programming for elite and novice athletes.",
  },
  {
    name: "Sofia Reyes",
    role: "HIIT & Conditioning",
    bio: "Certified S&C specialist. Known for metabolic sessions that redefine your limits.",
  },
  {
    name: "James Okafor",
    role: "Mobility & Recovery",
    bio: "Doctor of Physical Therapy. Keeps you training — not sidelined.",
  },
  {
    name: "Aisha Patel",
    role: "Olympic Lifting",
    bio: "National-level weightlifting coach. Technique precision and explosive power specialist.",
  },
];

function Trainers() {
  return (
    <section
      id="trainers"
      className="py-24 px-6 bg-black/20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Your Coaches
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Train With The Best
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Our team has coached Olympians, first-time lifters, and everyone in
            between.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/[8%] bg-card p-8 transition-colors hover:border-primary/20"
            >
              {/* Avatar placeholder — initials */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-lg font-bold text-primary font-heading">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-heading text-lg font-semibold">{t.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t.role}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
const tiers = [
  {
    name: "Essential",
    price: "49",
    period: "/month",
    features: [
      "24/7 gym access",
      "Locker & shower",
      "Onboarding session",
      "App workout tracker",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "89",
    period: "/month",
    features: [
      "Everything in Essential",
      "12 trainer sessions / mo",
      "Custom program design",
      "Nutrition guidance",
      "Priority class booking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "149",
    period: "/month",
    features: [
      "Everything in Pro",
      "Unlimited training",
      "Recovery & mobility work",
      "Monthly body comp scan",
      "Exclusive events access",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Membership
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Pick Your Path
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            No hidden fees. Cancel anytime. Start with a free trial.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-all ${
                t.popular
                  ? "border-primary/40 bg-primary/[4%] shadow-lg shadow-primary/10"
                  : "border-white/[8%] bg-card hover:border-white/20"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold">${t.price}</span>
                <span className="text-sm text-muted-foreground">{t.period}</span>
              </div>
              <ul className="mt-8 flex flex-col gap-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={`mt-8 flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  t.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-white/15 text-foreground hover:border-primary/50 hover:bg-white/[4%]"
                }`}
              >
                {t.popular ? "Start Free Trial" : "Choose Plan"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial / Quote ─── */
function Testimonial() {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />
          <blockquote className="font-heading text-2xl font-bold leading-snug tracking-tight sm:text-4xl">
            &ldquo;Northline didn&apos;t just change my body — it changed my
            standard for what a gym could be.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="h-4 w-px bg-white/15" />
            <span className="text-sm font-medium text-muted-foreground">
              — Derek T., Member since 2022
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA / Join ─── */
function Join() {
  return (
    <section
      id="join"
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[3%] via-primary/[6%] to-background" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Join Northline
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Ready To Forge Your Strength?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Claim a 7-day free trial with full gym access, a coaching session,
            and zero commitment.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
            >
              Claim Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs text-muted-foreground">
              No card required &bull; Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/[6%] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <Dumbbell className="h-5 w-5 text-primary" />
            <span className="font-heading text-base font-bold tracking-wide">
              NORTHLINE FITNESS
            </span>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <li>
              <a href="#programs" className="hover:text-foreground transition-colors">
                Programs
              </a>
            </li>
            <li>
              <a href="#trainers" className="hover:text-foreground transition-colors">
                Trainers
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-foreground transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#join" className="hover:text-foreground transition-colors">
                Join
              </a>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Northline Fitness. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonial />
        <Join />
      </main>
      <Footer />
    </>
  );
}