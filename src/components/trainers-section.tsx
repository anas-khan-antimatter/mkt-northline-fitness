"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

const trainers = [
  {
    name: "Marcus Thorne",
    role: "Head Strength Coach",
    specialties: ["Powerlifting", "Strongman", "Program Design"],
    bio: "Former national-level powerlifter with 12+ years of coaching. Marcus programs for athletes from the NFL to the everyday warrior.",
    initials: "MT",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Sofia Reyes",
    role: "Director of Performance",
    specialties: ["Hypertrophy", "Strongwoman", "Athletic Conditioning"],
    bio: "Exercise science degree, CSCS certified. Sofia bridges the gap between evidence-based training and old-school intensity.",
    initials: "SR",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dmitri Volkov",
    role: "Strongman & Power Coach",
    specialties: ["Strongman Events", "Explosive Power", "Injury Prevention"],
    bio: "Competitor in international strongman. Dmitri brings Eastern European training methodology and ruthless attention to form.",
    initials: "DV",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Jenna Carter",
    role: "Metabolic Conditioning Lead",
    specialties: ["HIIT", "Iron Circuit", "Endurance"],
    bio: "CrossFit Level 3 trainer and competitive athlete. Jenna's classes are engineered to maximize output in minimum time.",
    initials: "JC",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Lena Park",
    role: "Recovery & Mobility Specialist",
    specialties: ["Mobility", "Injury Rehab", "Flexibility"],
    bio: "Doctor of Physical Therapy with a focus on strength athletes. Lena keeps our members lifting heavy and moving well.",
    initials: "LP",
    color: "from-emerald-500 to-teal-500",
  },
];

export function TrainersSection() {
  return (
    <section id="trainers" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

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
            Team
          </Badge>
          <h2 className="font-anton text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            Built by <span className="text-fire">Iron</span>, Led by Experts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every coach at Northline has walked the path. Competition experience,
            advanced certifications, and a genuine investment in your progress.
          </p>
        </motion.div>

        {/* Trainers grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center rounded-2xl border border-white/5 bg-card px-5 py-10 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Avatar */}
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${trainer.color} shadow-lg`}
              >
                <span className="font-anton text-2xl tracking-wide text-white">
                  {trainer.initials}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                {trainer.name}
              </h3>
              <p className="mt-1 text-xs font-medium tracking-wider text-primary uppercase">
                {trainer.role}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {trainer.bio}
              </p>

              {/* Specialties */}
              <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                {trainer.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-5 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
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
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/10 font-heading text-sm tracking-widest uppercase hover:bg-white/5"
            asChild
          >
            <a href="#waitlist">Meet the full team →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}