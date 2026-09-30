"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Striker",
    price: "99",
    period: "/month",
    description: "For the dedicated athlete. Everything you need to train without limits.",
    features: [
      "24/7 gym access",
      "All strength & cardio zones",
      "Locker & shower access",
      "Guest pass (2x/month)",
      "App-based check-in",
      "Free parking",
    ],
    notIncluded: ["Classes & coaching", "Nutrition consultation", "Monthly 1-on-1 session"],
    popular: false,
  },
  {
    name: "Warrior",
    price: "149",
    period: "/month",
    description: "Our most popular plan. Full access to classes, coaching, and community.",
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
    notIncluded: ["Weekly 1-on-1 personal training", "Recovery suite access"],
    popular: true,
  },
  {
    name: "Legend",
    price: "249",
    period: "/month",
    description: "The complete experience. Private coaching, recovery, and priority everything.",
    features: [
      "Everything in Warrior",
      "Weekly 1-on-1 personal training",
      "Custom program design",
      "Recovery suite access (sauna, cold plunge)",
      "Priority class booking (48h early)",
      "Monthly body composition scan",
      "Nutrition plan & quarterly review",
      "Exclusive Legend events & seminars",
      "VIP guest passes (6x/month)",
    ],
    notIncluded: [],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary text-xs tracking-widest uppercase">
            Membership
          </Badge>
          <h2 className="font-anton text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            Choose Your Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No hidden fees. No contracts you can&apos;t cancel. Pick the tier
            that matches your ambition.
          </p>
        </motion.div>

        {/* Grand Opening banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-14 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-center shadow-lg shadow-primary/10"
        >
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-wider">
            🏆 Grand Opening Special — First Month Free on All Plans
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Lock in founding member pricing. No commitment required.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${
                plan.popular
                  ? "border-primary/40 bg-card shadow-2xl shadow-primary/10 scale-[1.02] lg:scale-105"
                  : "border-white/5 bg-card hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full bg-primary px-4 py-1 text-[10px] tracking-widest text-primary-foreground uppercase shadow-lg shadow-primary/30">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-anton text-5xl tracking-tight text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground/50">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30" />
                    <span className="line-through">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.popular ? "default" : "outline"}
                className={`mt-auto w-full rounded-full font-heading text-sm tracking-widest uppercase ${
                  plan.popular
                    ? "bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90"
                    : "border-white/10 text-foreground hover:bg-white/5"
                }`}
                asChild
              >
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}