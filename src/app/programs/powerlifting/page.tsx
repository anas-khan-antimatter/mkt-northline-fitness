"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Shield, CheckCircle, Clock, Target, Zap } from "lucide-react";

export default function PowerliftingPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="px-6 mb-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All Programs
          </Link>
        </div>
      </div>

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
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Program
            </span>
            <h1 className="font-heading text-5xl font-bold tracking-tight mt-3 sm:text-7xl md:text-8xl leading-[1.05]">
              <span className="text-safety heavy-underline">POWERLIFTING</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Squat, bench, deadlift focused programming with technique coaching,
              peaking cycles, and full competition prep.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mt-16 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                PROGRAM OVERVIEW
              </h2>
              <div className="mt-2 h-1 w-16 bg-primary" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Designed for lifters chasing a bigger total. Our powerlifting program
                cycles through hypertrophy, strength, and peaking phases with
                precise technique work on the Big Three.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                WEEKLY STRUCTURE
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-primary/60" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { day: "MONDAY", focus: "Competition Squat (Heavy)", type: "Strength" },
                  { day: "TUESDAY", focus: "Competition Bench + Accessories", type: "Strength" },
                  { day: "THURSDAY", focus: "Deadlift (Speed/Heavy)", type: "Strength" },
                  { day: "FRIDAY", focus: "Squat (Light) + Bench (Volume)", type: "Hypertrophy" },
                  { day: "SATURDAY", focus: "Deadlift Accessories + Core", type: "Accessory" },
                ].map((d) => (
                  <div key={d.day} className="border border-white/10 bg-black/30 p-5">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{d.day}</span>
                    <p className="mt-1.5 text-sm font-semibold text-foreground">{d.focus}</p>
                    <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{d.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                COMPETITION PREP
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-primary/60" />
              <ul className="mt-4 space-y-3">
                {[
                  "12-week peaking cycle leading to meet day",
                  "Attempt selection strategy coaching",
                  "Mock meet simulations",
                  "Weigh-in & hydration protocols",
                  "Post-meet recovery programming",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-primary/30 bg-black/40 p-6 diagonal-cut">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-primary">Duration</span>
                    <span className="text-sm font-semibold text-foreground">12-16 weeks</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-primary">Schedule</span>
                    <span className="text-sm font-semibold text-foreground">4-5 days / week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-primary">Level</span>
                    <span className="text-sm font-semibold text-foreground">Intermediate - Advanced</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/checkin"
              className="group flex items-center justify-center gap-2 h-12 brutal-border bg-primary text-primary-foreground px-8 text-sm font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow"
            >
              Join This Program
            </Link>

            <Link
              href="/week"
              className="flex items-center justify-center gap-2 h-12 border-2 border-white/15 text-foreground text-sm font-bold uppercase tracking-[0.1em] transition-all hover:border-primary/50"
            >
              Calculate Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}