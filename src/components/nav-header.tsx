"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell, ChevronRight } from "lucide-react";

const APP_LINKS = [
  { label: "Programs", href: "/programs" },
  { label: "Coaches", href: "/coaches" },
  { label: "Membership", href: "/membership" },
  { label: "WOD", href: "/wod" },
  { label: "PR Tracker", href: "/pr-tracker" },
  { label: "Check-In", href: "/checkin" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[6%] bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center bg-primary group-hover:bg-primary/80 transition-colors">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold tracking-[0.15em] text-foreground">
            NORTHLINE
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {APP_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/membership"
          className="hidden items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground transition-all hover:bg-primary/90 md:inline-flex"
        >
          Join Now <ChevronRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/[6%] bg-background px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {APP_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/membership"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground"
              >
                Join Now <ChevronRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}