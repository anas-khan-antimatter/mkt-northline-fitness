"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shuffle, Dumbbell, RefreshCw, Clock, Target } from "lucide-react";

interface WOD {
  date: string;
  title: string;
  type: string;
  duration?: string;
  rounds?: string;
  movements?: string[];
  repScheme?: string;
  reps?: string;
  cap?: string;
  minute?: { set: string; note: string };
  scheme?: string;
  note: string;
}

export default function WODPage() {
  const [wod, setWod] = useState<WOD | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchWOD() {
    setLoading(true);
    try {
      const res = await fetch("/api/wod");
      const data = await res.json();
      setWod(data);
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWOD();
  }, []);

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
              <Dumbbell className="h-7 w-7 text-primary" />
            </div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Daily WOD
            </span>
            <h1 className="font-heading text-5xl font-bold tracking-tight mt-3 sm:text-7xl md:text-8xl leading-[1.05]">
              WORKOUT OF<br />
              <span className="text-safety heavy-underline">THE DAY</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A new brutal workout every time. No repeats. No excuses.
            </p>

            <button
              onClick={fetchWOD}
              disabled={loading}
              className="group inline-flex items-center gap-2 mt-8 h-12 brutal-border bg-primary text-primary-foreground px-8 text-sm font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow disabled:opacity-50"
            >
              <Shuffle className="h-4 w-4 transition-transform group-hover:rotate-180" />
              {loading ? "Generating..." : "Shuffle"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* WOD Card */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-3xl">
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <RefreshCw className="h-8 w-8 text-primary animate-spin" />
            </div>
          ) : wod ? (
            <motion.div
              key={wod.title + wod.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-2 border-primary/40 bg-black/40 overflow-hidden diagonal-cut-lg"
            >
              {/* Top bar */}
              <div className="bg-primary/10 border-b border-primary/30 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    {wod.date}
                  </span>
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground mt-1">
                    {wod.title}
                  </h2>
                </div>
                <div className="brutal-border bg-black/60 px-4 py-2">
                  <span className="font-heading text-xl font-bold text-primary">{wod.type}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                {/* Duration/Cap */}
                <div className="flex flex-wrap gap-6">
                  {wod.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{wod.duration}</span>
                    </div>
                  )}
                  {wod.cap && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Cap: {wod.cap}</span>
                    </div>
                  )}
                  {wod.rounds && (
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{wod.rounds}</span>
                    </div>
                  )}
                  {wod.repScheme && (
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{wod.repScheme}</span>
                    </div>
                  )}
                </div>

                {/* Movements */}
                {wod.movements && wod.movements.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 block">
                      Movements
                    </span>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {wod.movements.map((m) => (
                        <div key={m} className="border border-white/10 bg-black/30 px-4 py-3 flex items-center gap-3">
                          <div className="h-2 w-2 bg-primary" />
                          <span className="text-sm font-semibold text-foreground">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* EMOM minute */}
                {wod.minute && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 block">
                      Each Minute
                    </span>
                    <div className="border border-primary/20 bg-primary/5 p-5">
                      <p className="text-sm font-semibold text-foreground">{wod.minute.set}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{wod.minute.note}</p>
                    </div>
                  </div>
                )}

                {/* Reps / Scheme */}
                {wod.reps && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2 block">
                      Rep Scheme
                    </span>
                    <span className="inline-block brutal-border bg-black/40 px-4 py-2 font-heading text-xl font-bold text-primary">
                      {wod.reps}
                    </span>
                  </div>
                )}
                {wod.scheme && !wod.reps && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2 block">
                      Scheme
                    </span>
                    <span className="inline-block brutal-border bg-black/40 px-4 py-2 font-heading text-xl font-bold text-primay">
                      {wod.scheme}
                    </span>
                  </div>
                )}

                {/* Note */}
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm italic text-muted-foreground">
                    💪 {wod.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              Failed to load workout. Try shuffling again.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}