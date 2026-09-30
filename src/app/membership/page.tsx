"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, X, Shuffle, ArrowLeftRight, Zap, Dumbbell, Shield, Flame } from "lucide-react";
import { PLANS } from "@/lib/data";

export default function MembershipPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <main className="min-h-screen pb-32 pt-28">
      <div className="fixed inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(0,200,100,0.05),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            <Dumbbell className="h-3.5 w-3.5" /> Membership
          </span>
          <h1 className="font-anton text-5xl tracking-tight text-foreground sm:text-6xl md:text-7xl uppercase">
            Choose Your <span className="text-fire">Path</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            No hidden fees. No contracts you can&apos;t cancel. Founding member pricing
            available for a limited time.
          </p>
        </motion.div>

        {/* Grand opening banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-10 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-center shadow-lg shadow-primary/10"
        >
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-wider">
            🏆 Grand Opening — First Month Free on All Plans
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Lock in founding member pricing. Cancel anytime.
          </p>
        </motion.div>

        {/* Toggle: month vs annual */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className="text-sm font-medium text-foreground">Monthly</span>
          <label className="relative inline-flex h-7 w-12 cursor-pointer items-center">
            <input
              type="checkbox"
              checked={annual}
              onChange={(e) => setAnnual(e.target.checked)}
              className="sr-only peer"
            />
            <span className="absolute inset-0 rounded-full bg-white/10 transition-colors peer-checked:bg-primary/30">
              <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-foreground transition-all ${annual ? "translate-x-5 bg-primary" : "translate-x-0"}`} />
            </span>
          </label>
          <span className="text-sm font-medium text-foreground">
            Annual{" "}
            <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">
              Save up to 20%
            </span>
          </span>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const period = annual ? "/mo (billed annually)" : "/month";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-primary/40 bg-card shadow-2xl shadow-primary/15 scale-[1.02] lg:scale-105"
                    : "border-white/5 bg-card hover:border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-[10px] tracking-widest text-primary-foreground uppercase shadow-lg shadow-primary/30">
                      <Zap className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-anton text-5xl tracking-tight text-primary">
                      ${price}
                    </span>
                    <span className="text-sm text-muted-foreground">{period}</span>
                  </div>
                  {annual && (
                    <p className="mt-1 text-xs text-primary/70">
                      ${plan.annual * 12} /year — save ${plan.monthly * 12 - plan.annual * 12}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                  {plan.limits.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground/50">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#join"
                  className={`mt-auto w-full rounded-full py-3 text-sm font-semibold uppercase tracking-widest text-center transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                      : "border border-white/15 text-foreground hover:bg-white/5"
                  }`}
                >
                  {plan.popular ? "Start Free Trial" : "Join Waitlist"}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Compare row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/5 bg-card px-6 py-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <ArrowLeftRight className="h-5 w-5 text-primary" />
            <h3 className="font-heading text-base font-semibold text-foreground uppercase tracking-wider">
              Plan Comparison
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs uppercase tracking-wider">
              <thead>
                <tr className="border-b border-white/5 text-muted-foreground">
                  <th className="py-2 px-3 font-medium">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.name} className={`py-2 px-3 font-medium text-center ${p.popular ? "text-primary" : ""}`}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["24/7 Gym Access", ...PLANS.map((p) => p.features.some((f) => f.includes("24/7")) ? "✓" : "—")],
                  ["Strength & Cardio", ...PLANS.map((p) => p.features.some((f) => f.includes("strength") || f.includes("cardio")) ? "✓" : "—")],
                  ["Signature Classes", ...PLANS.map((p) => p.features.some((f) => f.includes("classes") || f.includes("Class")) ? "✓" : "—")],
                  ["1-on-1 Training", ...PLANS.map((p) => p.features.some((f) => f.includes("1-on-1") || f.includes("Weekly")) ? "✓" : "—")],
                  ["Recovery Suite", ...PLANS.map((p) => p.features.some((f) => f.includes("Recovery") || f.includes("sauna")) ? "✓" : "—")],
                  ["Nutrition Plan", ...PLANS.map((p) => p.features.some((f) => f.includes("Nutrition") || f.includes("nutrition")) ? "✓" : "—")],
                  ["Guest Passes", ...PLANS.map((p) => {
                    const m = p.features.find((f) => f.includes("Guest"));
                    return m ? m.match(/\d+/)?.[0] || "✓" : "—";
                  })],
                  ["Body Comp Scan", ...PLANS.map((p) => p.features.some((f) => f.includes("scan") || f.includes("Scan")) ? "✓" : "—")],
                ].map((row) => (
                  <tr key={row[0] as string} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-2 px-3 text-muted-foreground font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, ci) => (
                      <td key={ci} className={`py-2 px-3 text-center ${cell === "✓" ? "text-primary" : "text-muted-foreground/50"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </main>
  );
}