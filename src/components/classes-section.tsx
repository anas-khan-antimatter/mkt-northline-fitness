"use client";

import { motion } from "framer-motion";
import { Clock, Users, Dumbbell, Flame, Zap, Target, Heart, Waves } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const classes = [
  {
    id: "powerlifting",
    name: "Powerlifting",
    time: "6:00 AM • 9:00 AM • 5:00 PM",
    coach: "Marcus Thorne",
    capacity: "12 max",
    icon: Dumbbell,
    color: "from-orange-500/20 to-red-500/10",
    tag: "Popular",
    description:
      "Raw strength. Squat, bench, deadlift with technical coaching and periodized programming.",
  },
  {
    id: "hypertrophy",
    name: "Hypertrophy Lab",
    time: "7:00 AM • 12:00 PM • 6:30 PM",
    coach: "Sofia Reyes",
    capacity: "15 max",
    icon: Target,
    color: "from-blue-500/20 to-cyan-500/10",
    tag: "New",
    description:
      "Science-backed muscle building. High volume, controlled tempo, maximum pump.",
  },
  {
    id: "strongman",
    name: "Strongman",
    time: "8:00 AM • 4:00 PM",
    coach: "Dmitri Volkov",
    capacity: "8 max",
    icon: Zap,
    color: "from-yellow-500/20 to-orange-500/10",
    tag: "Elite",
    description:
      "Yoke carries, atlas stones, log press. Real-world functional power.",
  },
  {
    id: "conditioning",
    name: "Iron Circuit",
    time: "6:30 AM • 12:30 PM • 5:30 PM",
    coach: "Jenna Carter",
    capacity: "16 max",
    icon: Flame,
    color: "from-red-500/20 to-pink-500/10",
    tag: "Intense",
    description:
      "Metabolic conditioning meets heavy compounds. 45 minutes of fire.",
  },
  {
    id: "recovery",
    name: "Mobility & Recovery",
    time: "10:00 AM • 2:00 PM",
    coach: "Lena Park",
    capacity: "20 max",
    icon: Heart,
    color: "from-emerald-500/20 to-teal-500/10",
    tag: "Essential",
    description:
      "Improve range of motion, reduce injury risk, and accelerate recovery.",
  },
  {
    id: "strongwoman",
    name: "Strongwoman",
    time: "9:00 AM • 5:00 PM",
    coach: "Sofia Reyes",
    capacity: "8 max",
    icon: Waves,
    color: "from-purple-500/20 to-pink-500/10",
    tag: "Empowered",
    description:
      "Women-specific strength training. Build confidence and raw power in a supportive crew.",
  },
];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ClassesSection() {
  return (
    <section id="classes" className="relative py-28 lg:py-36">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary text-xs tracking-widest uppercase">
            Schedule
          </Badge>
          <h2 className="font-anton text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            Train With Purpose
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every class is built around a specific goal. Show up, follow the
            program, and the results follow.
          </p>
        </motion.div>

        {/* Weekly calendar strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 flex flex-wrap justify-center gap-2"
        >
          {weekdays.map((day, i) => (
            <div
              key={day}
              className={`flex h-14 w-14 flex-col items-center justify-center rounded-xl border text-center transition-all duration-300 sm:h-16 sm:w-16 ${
                i < 6
                  ? "border-primary/20 bg-primary/5 text-primary shadow-sm shadow-primary/10"
                  : "border-white/5 text-muted-foreground opacity-50"
              }`}
            >
              <span className="font-anton text-xs tracking-wider uppercase">{day}</span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {i < 6 ? "5AM–9PM" : "Closed"}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Class cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <cls.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-primary/20 text-[10px] tracking-widest text-primary uppercase"
                  >
                    {cls.tag}
                  </Badge>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {cls.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cls.description}
                </p>
                <div className="mt-5 flex flex-col gap-2 border-t border-white/5 pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{cls.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    <span>{cls.coach} · {cls.capacity}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full rounded-full border border-white/5 text-xs tracking-wider uppercase hover:bg-primary/10 hover:text-primary"
                >
                  Book a Trial
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Full schedule released monthly to waitlist members.{" "}
            <a
              href="#waitlist"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Join the waitlist
            </a>{" "}
            for early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}