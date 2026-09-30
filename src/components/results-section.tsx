"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const results = [
  {
    name: "Alex R.",
    stat: "-32 lbs",
    statLabel: "Body fat lost",
    quote:
      "I'd tried every gym in the city. Northline is different — the programming actually respects your time. 45 minutes, in and out, and I'm stronger than I've ever been.",
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    name: "Priya K.",
    stat: "+85 lbs",
    statLabel: "Deadlift PR",
    quote:
      "I walked in never having touched a barbell. Sofia's coaching gave me the confidence to lift heavy. Now I'm competing in strongwoman meets.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "Damon W.",
    stat: "6 months",
    statLabel: "Consistent training",
    quote:
      "Brotherhood isn't a buzzword here. When I didn't show up, Marcus called me. That accountability changed everything.",
    color: "from-yellow-500/20 to-orange-500/10",
  },
];

const metrics = [
  { value: "250+", label: "Founding Members" },
  { value: "4.98", label: "Avg. Member Rating" },
  { value: "94%", label: "30-Day Retention" },
  { value: "15k", label: "Sq. Ft." },
];

export function ResultsSection() {
  return (
    <section id="results" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(255,100,0,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary text-xs tracking-widest uppercase">
            Transformations
          </Badge>
          <h2 className="font-anton text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            Results That <span className="text-fire">Speak</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Numbers don&apos;t lie. Our members show up, put in the work, and
            see real change — physically and mentally.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-3 text-sm leading-relaxed text-foreground/80 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {r.name}
                    </p>
                    <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                      {r.statLabel}
                    </p>
                  </div>
                  <span className="font-anton text-2xl text-fire">{r.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4"
        >
          {metrics.map((m) => (
            <div
              key={m.value}
              className="flex flex-col items-center justify-center bg-background/80 px-6 py-8 text-center backdrop-blur-sm"
            >
              <span className="font-anton text-4xl text-fire sm:text-5xl">
                {m.value}
              </span>
              <span className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}