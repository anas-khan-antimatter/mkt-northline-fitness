"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dumbbell, Search, Clock, Users, Filter, Flame, Shield, Zap, Heart, Target, Waves } from "lucide-react";
import { CLASSES, type DaySlug } from "@/lib/data";

const DAY_ORDER: DaySlug[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_LABELS: Record<DaySlug, string> = {
  mon: "Monday", tue: "Tuesday", wed: "Wednesday",
  thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday",
};

const CATEGORIES = ["all", "strength", "hypertrophy", "conditioning", "strongman", "recovery", "olympic"];
const LEVELS = ["all", "beginner", "intermediate", "advanced"];

const CAT_ICONS: Record<string, typeof Dumbbell> = {
  strength: Dumbbell,
  hypertrophy: Target,
  conditioning: Flame,
  strongman: Shield,
  recovery: Heart,
  olympic: Waves,
};

function percentFull(cap: number, enrolled: number): number {
  return Math.min(100, Math.round((enrolled / cap) * 100));
}

export default function ProgramsPage() {
  const [activeDay, setActiveDay] = useState<DaySlug | "all">("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const [showFull, setShowFull] = useState(false);

  let filtered = CLASSES.filter((c) => {
    if (activeDay !== "all" && c.day !== activeDay) return false;
    if (activeCategory !== "all" && c.category !== activeCategory) return false;
    if (activeLevel !== "all" && c.level !== activeLevel) return false;
    if (!showFull && c.enrolled >= c.capacity) return false;
    return true;
  });

  // Group by day if showing all
  const grouped: Record<string, typeof CLASSES> = {};
  if (activeDay === "all") {
    for (const day of DAY_ORDER) {
      const dayClasses = filtered.filter((c) => c.day === day);
      if (dayClasses.length > 0) grouped[day] = dayClasses;
    }
  }

  return (
    <main className="min-h-screen pb-32 pt-28">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-primary/5 opacity-50 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,200,100,0.04),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            <Flame className="h-3.5 w-3.5" /> Schedule
          </span>
          <h1 className="font-anton text-5xl tracking-tight text-foreground sm:text-6xl md:text-7xl uppercase">
            Class Schedule
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Filter by day, category, or intensity level. All classes are coach-led
            with periodized programming. Spaces are limited — book ahead.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 space-y-4"
        >
          {/* Day pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveDay("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeDay === "all" ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" : "border border-white/10 text-muted-foreground hover:border-primary/40"
              }`}
            >
              All Days
            </button>
            {DAY_ORDER.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeDay === d ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" : "border border-white/10 text-muted-foreground hover:border-primary/40"
                }`}
              >
                {DAY_LABELS[d].slice(0, 3)}
              </button>
            ))}
          </div>

          {/* Category + Level + toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Category</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-all ${
                  activeCategory === cat ? "bg-primary/20 text-primary border border-primary/40" : "border border-white/5 text-muted-foreground hover:border-white/20"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
            <span className="mx-2 text-muted-foreground/30">|</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Level</span>
            {LEVELS.map((lv) => (
              <button
                key={lv}
                onClick={() => setActiveLevel(lv)}
                className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-all ${
                  activeLevel === lv ? "bg-primary/20 text-primary border border-primary/40" : "border border-white/5 text-muted-foreground hover:border-white/20"
                }`}
              >
                {lv === "all" ? "All" : lv}
              </button>
            ))}
            <label className="flex items-center gap-1.5 ml-2">
              <input
                type="checkbox"
                checked={showFull}
                onChange={(e) => setShowFull(e.target.checked)}
                className="accent-primary h-3 w-3"
              />
              <span className="text-[10px] font-medium text-muted-foreground">Show full</span>
            </label>
          </div>
        </motion.div>

        {/* Results */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-white/5 bg-card py-16 text-center"
          >
            <Search className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium text-foreground">No classes match your filters</p>
            <p className="text-xs text-muted-foreground">Try a different day or category</p>
          </motion.div>
        ) : activeDay !== "all" ? (
          /* Single day — flat grid */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cls, i) => (
              <ClassCard key={cls.id} cls={cls} index={i} />
            ))}
          </div>
        ) : (
          /* Grouped by day */
          <div className="space-y-10">
            {DAY_ORDER.map((day) => {
              const dayClasses = grouped[day];
              if (!dayClasses) return null;
              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                    <h3 className="font-heading text-base font-semibold tracking-wider text-foreground uppercase">
                      {DAY_LABELS[day]}
                    </h3>
                    <span className="text-[10px] text-muted-foreground">
                      {dayClasses.length} class{dayClasses.length !== 1 ? "es" : ""}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dayClasses.map((cls, i) => (
                      <ClassCard key={cls.id} cls={cls} index={i} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Not sure where to start?{" "}
            <a href="/workout-generator" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
              Use our workout generator
            </a>{" "}
            or{" "}
            <a href="/membership" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
              view membership plans
            </a>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

/* ─── Individual class card ─── */
function ClassCard({ cls, index }: { cls: typeof CLASSES[0]; index: number }) {
  const pct = percentFull(cls.capacity, cls.enrolled);
  const Icon = CAT_ICONS[cls.category] || Dumbbell;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Capacity bar */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity group-hover:opacity-100 opacity-0" />

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">{cls.name}</h4>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{cls.level}</span>
          </div>
        </div>
        {/* Capacity badge */}
        <div className="text-center">
          <span className={`text-xs font-bold ${pct >= 100 ? "text-destructive" : pct >= 80 ? "text-primary" : "text-muted-foreground"}`}>
            {cls.enrolled}/{cls.capacity}
          </span>
          <div className="mt-0.5 h-1.5 w-full max-w-10 rounded-full" style={{ background: `linear-gradient(90deg, ${pct >= 100 ? "oklch(0.65 0.25 30)" : "oklch(0.72 0.22 145)"} ${pct}%, transparent ${pct}%)` }} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3 text-primary/60" />
          {cls.time} • {cls.duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="h-3 w-3 text-primary/60" />
          {cls.coach}
        </span>
      </div>

      {/* Book button */}
      <button
        disabled={pct >= 100}
        className={`mt-3 w-full rounded-full py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
          pct >= 100
            ? "bg-destructive/20 text-destructive/60 cursor-not-allowed"
            : "bg-primary/15 text-primary hover:bg-primary/30 border border-primary/20"
        }`}
      >
        {pct >= 100 ? "Class Full" : "Book Now"}
      </button>
    </motion.div>
  );
}