"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "WOD", href: "/wod" },
  { label: "Membership", href: "/week" },
];

export default function NavHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b-2 border-primary/30">
      {/* Yellow hard-cut stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
            <Dumbbell className="h-5 w-5" />
          </div>
          <span className="font-heading text-2xl font-bold tracking-[0.06em] text-foreground">
            NORTHLINE
          </span>
          <span className="font-heading text-[10px] font-bold tracking-[0.2em] text-primary uppercase leading-none mt-1.5">
            Fitness
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                isActive(l.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[4%]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-primary/30 bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] ${
                  isActive(l.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[4%]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}