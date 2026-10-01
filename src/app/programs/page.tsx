"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Zap,
  Shield,
  Flame,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    slug: "strength-foundations",
    icon: Dumbbell,
    title: "STRENGTH FOUNDATIONS",
    subtitle: "Raw Power · Compound Lifts · Progressive Overload",
    desc: "Build unshakeable strength with the core barbell lifts — squat, deadlift, overhead press, and bench. Periodized for every level from first-time lifter to intermediate athlete.",
    focus: ["Squat & Deadlift", "Overhead Press & Bench", "Accessory Work", "Progressive Overload"],
    schedule: "4 days / week",
    href: "/programs/strength-foundations",
  },
  {
    slug: "powerlifting",
    icon: Shield,
    title: "POWERLIFTING",
    subtitle: "Squat · Bench · Deadlift · Competition Prep",
    desc: "Squad, bench, deadlift focused programming with technique coaching, peaking cycles, and full competition prep. For lifters chasing a bigger total.",
    focus: ["Competition Squat", "Competition Bench", "Competition Deadlift", "Peaking Cycles"],
    schedule: "4-5 days / week",
    href: "/programs/powerlifting",
  },
  {
    slug: "hiit-conditioning",
    icon: Zap,
    title: "HIIT / CONDITIONING",
    subtitle: "Metabolic Circuits · Sprint Intervals · Explosive Power",
    desc: "High-intensity interval training designed to torch fat, build cardiovascular capacity, and develop explosive power. Every session is a battle.",
    focus: ["Sprint Intervals", "Metabolic Circuits", "Bodyweight Power", "Assault Bike & Rower"],
    schedule: "5 days / week",
    href: "/programs/hiit-conditioning",
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="relative px-6 overflow-hidden">
        {/* Diagonal hard-cut accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/[3%] diagonal-cut-lg" />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Programs
            </span>
            <h1 className="font-heading text-5xl font-bold tracking-tight mt-3 sm:text-7xl md:text-8xl leading-[1.05]">
              TRAIN WITH<br />
              <span className="text-safety heavy-underline">PURPOSE</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Every program is periodized, coached, and built on real results.
              Pick your path — then show up and do the work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="mt-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link
                href={p.href}
                className="group relative flex flex-col h-full border-2 border-white/10 bg-card transition-all duration-300 hover:border-primary/50 hover:glow-yellow diagonal-cut"
              >
                {/* Yellow top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60 group-hover:bg-primary transition-colors" />

                <div className="flex-1 p-8 flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center brutal-border bg-black/40 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {p.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                    {p.desc}
                  </p>

                  {/* Focus areas */}
                  <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                    {p.focus.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="h-1.5 w-1.5 bg-primary" />
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule + CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                      {p.schedule}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground group-hover:text-primary transition-colors">
                      View Program <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative border-2 border-primary/40 bg-black/40 p-10 sm:p-16 diagonal-cut-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <h2 className="font-heading text-3xl font-bold sm:text-5xl leading-tight">
              NOT SURE WHERE TO<br />
              <span className="text-safety">START?</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Book a free consultation. One of our coaches will assess your goals
              and build a plan that fits.
            </p>
            <a
              href="/checkin"
              className="group inline-flex items-center gap-2 mt-8 h-12 brutal-border bg-primary text-primary-foreground px-8 text-sm font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow"
            >
              Book Now <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}