"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      {/* Cinematic background gradient & overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,100,0,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(255,80,0,0.08),transparent)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative rings */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full border border-primary/5" />
      <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full border border-primary/10" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-primary/5" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Opening Summer 2025
            </div>

            <h1 className="font-anton text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-8xl uppercase">
              Forge Your
              <br />
              <span className="text-fire">Strength</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Northline Fitness isn&apos;t just a gym — it&apos;s a proving
              ground. Premium equipment, world-class coaching, and a brotherhood
              that holds you accountable. Stop making excuses. Start building
              what lasts.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group rounded-full bg-primary px-8 py-6 font-heading text-sm tracking-[0.15em] uppercase shadow-2xl shadow-primary/30 hover:bg-primary/90"
                asChild
              >
                <a href="#waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/15 px-8 py-6 font-heading text-sm tracking-[0.15em] uppercase text-foreground hover:bg-white/5"
                asChild
              >
                <a href="#classes">View Classes</a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-16 flex gap-10 border-t border-white/5 pt-8">
              <div>
                <p className="font-anton text-3xl text-fire">15k+</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  Sq Ft
                </p>
              </div>
              <div>
                <p className="font-anton text-3xl text-fire">Elite</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  Equipment
                </p>
              </div>
              <div>
                <p className="font-anton text-3xl text-fire">24/7</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  Access
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              {/* Hero image placeholder — cinematic dark athletic figure */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-primary/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,120,0,0.12),transparent)]" />
              {/* Silhouetted athlete figure */}
              <svg
                viewBox="0 0 400 500"
                className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 opacity-60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200 80c-15 0-28 5-38 15s-15 23-15 38 5 28 15 38 23 15 38 15 28-5 38-15 15-23 15-38-5-28-15-38-23-15-38-15zm-85 95c-8 0-15 3-20 8s-8 12-8 20v30c0 8 3 15 8 20s12 8 20 8v117c0 13 5 25 14 34s21 14 34 14h74c13 0 25-5 34-14s14-21 14-34V261c8 0 15-3 20-8s8-12 8-20v-30c0-8-3-15-8-20s-12-8-20-8H115z"
                  fill="currentColor"
                  className="text-foreground/80"
                />
                <path
                  d="M155 261v117c0 8 3 15 8 20s12 8 20 8h34V261h-62z"
                  fill="currentColor"
                  className="text-primary/40"
                />
              </svg>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-6 -bottom-6 rounded-xl border border-white/10 bg-background/90 backdrop-blur-xl px-5 py-4 shadow-2xl">
              <p className="font-anton text-sm tracking-widest text-primary uppercase">
                New Members
              </p>
              <p className="mt-1 text-2xl font-bold text-foreground">
                First month free
              </p>
            </div>

            {/* Secondary badge */}
            <div className="absolute -left-4 top-12 rounded-xl border border-white/10 bg-background/90 backdrop-blur-xl px-4 py-3 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
                <p className="text-xs font-medium text-foreground">
                  Now accepting <span className="text-primary">waitlist</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}