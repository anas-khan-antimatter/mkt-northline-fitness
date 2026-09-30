"use client";

import { motion } from "framer-motion";
import { COACHES } from "@/lib/data";
import { Dumbbell, Target, Shield, Flame, Heart, Zap, Linkedin, Instagram } from "lucide-react";

const COACH_ICONS = [ Dumbbell, Target, Shield, Flame, Heart, Zap ];

export default function CoachesPage() {
  return (
    <main className="min-h-screen pb-32 pt-28">
      <div className="fixed inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_70%_40%_at_30%_20%,rgba(0,200,100,0.03),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            <Dumbbell className="h-3.5 w-3.5" /> Team
          </span>
          <h1 className="font-anton text-5xl tracking-tight text-foreground sm:text-6xl md:text-7xl uppercase">
            Built by <span className="text-fire">Iron</span>, Led by Experts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Every coach at Northline has walked the path — competition experience,
            advanced credentials, and a genuine investment in your progress. Meet the
            people who will transform the way you train.
          </p>
        </motion.div>

        {/* Fast-specialty filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 flex flex-wrap justify-center gap-1.5"
        >
          {["All", "Strength", "Hypertrophy", "Conditioning", "Mobility", "Olympic", "Strongman"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase hover:border-primary/30 hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Coach cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Avatar hero */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${coach.gradient} opacity-30`} />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
                  <div className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${coach.gradient} shadow-2xl shadow-primary/20`}>
                    <span className="font-anton text-3xl tracking-wide text-white">{coach.initials}</span>
                  </div>
                </div>
                {/* Decorative top-right icon */}
                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm">
                  {[Dumbbell, Target, Shield, Flame, Heart, Zap][i % 6] && Object.assign(document.createElement("div"), { className: "h-4 w-4 text-primary" })}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {coach.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {coach.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {coach.bio}
                </p>

                {/* Specialty tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {coach.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Credentials */}
                <div className="mt-4 space-y-1">
                  {coach.credentials.map((c) => (
                    <span key={c} className="flex items-center gap-1 text-[11px] text-muted-foreground/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      {c}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
                  {coach.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <span className="block font-heading text-sm font-bold text-primary">
                        {s.value}
                      </span>
                      <span className="block text-[8px] tracking-wider text-muted-foreground uppercase">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-4 flex justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Ready to train with the best?{" "}
            <a href="/membership" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
              Choose your membership
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}