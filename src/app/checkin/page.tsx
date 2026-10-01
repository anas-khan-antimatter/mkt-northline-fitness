"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Dumbbell,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface CheckinResult {
  ok: boolean;
  checkin?: {
    id: string;
    name: string;
    mood: string;
    energy: number;
    soreness: number;
    submittedAt: string;
  };
  error?: string;
}

export default function CheckinPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mood, setMood] = useState("focused");
  const [energy, setEnergy] = useState(5);
  const [soreness, setSoreness] = useState(3);
  const [todayWorkout, setTodayWorkout] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<CheckinResult | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    setError("");
    setSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          mood,
          energy,
          soreness,
          todayWorkout: todayWorkout.trim(),
          notes: notes.trim(),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error || "Submission failed.");
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMood("focused");
    setEnergy(5);
    setSoreness(3);
    setTodayWorkout("");
    setNotes("");
    setResult(null);
    setError("");
  }

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
              <ClipboardCheck className="h-7 w-7 text-primary" />
            </div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Check-in
            </span>
            <h1 className="font-heading text-5xl font-bold tracking-tight mt-3 sm:text-7xl md:text-8xl leading-[1.05]">
              DAILY<br />
              <span className="text-safety heavy-underline">CHECK-IN</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Log your daily stats so we can track progress and adjust your
              programming. Honest input = better results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-2xl">
          {result?.ok ? (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-2 border-primary bg-black/40 p-10 diagonal-cut-lg text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center brutal-border bg-primary/20 mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary block">
                Check-in Recorded
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground mt-2">
                Nice work, {result.checkin?.name || "athlete"}.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Your check-in has been logged. Keep showing up.
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="brutal-border bg-black/50 px-5 py-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                      Mood
                    </span>
                    <span className="block font-heading text-lg text-primary">
                      {result.checkin?.mood || "-"}
                    </span>
                  </div>
                  <div className="brutal-border bg-black/50 px-5 py-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                      Energy
                    </span>
                    <span className="block font-heading text-lg text-primary">
                      {result.checkin?.energy || "-"}/10
                    </span>
                  </div>
                  <div className="brutal-border bg-black/50 px-5 py-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                      Soreness
                    </span>
                    <span className="block font-heading text-lg text-primary">
                      {result.checkin?.soreness || "-"}/10
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="group inline-flex items-center gap-2 mt-8 h-12 brutal-border bg-primary text-primary-foreground px-8 text-sm font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow"
              >
                Another Check-in <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="border-2 border-primary/30 bg-black/40 p-8 sm:p-10 diagonal-cut-lg space-y-6"
            >
              {/* Name & Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Jane"
                    className="w-full border-2 border-white/10 bg-black/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:glow-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="jane@northline.fit"
                    className="w-full border-2 border-white/10 bg-black/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:glow-yellow focus:outline-none"
                  />
                </div>
              </div>

              {/* Mood */}
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                  How are you feeling today?
                </label>
                <div className="flex flex-wrap gap-2">
                  {["focused", "energized", "tired", "sore", "motivated", "meh"].map(
                    (m) => (
                      <label
                        key={m}
                        className={`flex items-center gap-2 cursor-pointer p-3 border-2 text-sm font-bold uppercase tracking-[0.06em] transition-colors ${
                          mood === m
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-white/10 bg-black/30 text-muted-foreground hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="mood"
                          value={m}
                          checked={mood === m}
                          onChange={(e) => setMood(e.target.value)}
                          className="sr-only"
                        />
                        {m}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Energy + Soreness sliders */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                    Energy Level
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground">1</span>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={energy}
                      onChange={(e) => setEnergy(Number(e.target.value))}
                      className="w-full h-2 appearance-none bg-primary/30 rounded-none accent-primary cursor-pointer"
                    />
                    <span className="text-[10px] font-bold text-muted-foreground">10</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="font-heading text-2xl font-bold text-primary">
                      {energy}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                      / 10
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                    Soreness Level
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground">1</span>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={soreness}
                      onChange={(e) => setSoreness(Number(e.target.value))}
                      className="w-full h-2 appearance-none bg-primary/30 rounded-none accent-primary cursor-pointer"
                    />
                    <span className="text-[10px] font-bold text-muted-foreground">10</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <Dumbbell className="h-4 w-4 text-primary" />
                    <span className="font-heading text-2xl font-bold text-primary">
                      {soreness}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                      / 10
                    </span>
                  </div>
                </div>
              </div>

              {/* Today's workout */}
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                  Todays Workout (optional)
                </label>
                <input
                  type="text"
                  value={todayWorkout}
                  onChange={(e) => setTodayWorkout(e.target.value)}
                  placeholder="e.g. Strength Foundations - Week 4, Day 2"
                  className="w-full border-2 border-white/10 bg-black/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:glow-yellow focus:outline-none"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.12em] text-primary block mb-2">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="How did the session feel? Any tweaks needed?"
                  className="w-full border-2 border-white/10 bg-black/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:glow-yellow focus:outline-none resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="border-2 border-destructive bg-destructive/10 p-4 text-sm text-destructive">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group flex items-center justify-center gap-2 h-14 brutal-border bg-primary text-primary-foreground px-10 text-base font-bold uppercase tracking-[0.1em] transition-all hover:bg-primary/90 hover:glow-yellow w-full disabled:opacity-50"
              >
                {submitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <ClipboardCheck className="h-5 w-5" />
                    Log Check-in
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
