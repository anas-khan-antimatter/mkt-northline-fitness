import type { Metadata } from "next";
import { Inter, Oswald, Anton } from "next/font/google";
import "./globals.css";
import NavHeader from "../components/nav-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NORTHLINE FITNESS",
  description:
    "Brutalist strength gym. Elite equipment, expert coaches. Forge your strength.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${anton.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <NavHeader />
        <main className="flex-1">{children}</main>
        {/* Diagonal cut footer */}
        <footer className="relative mt-24 border-t border-white/10 bg-black/40">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/40" />
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <span className="font-heading text-2xl font-bold tracking-wide text-foreground">
                  NORTHLINE
                </span>
                <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                  Forge your strength. Brutal equipment, elite coaching.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                  Training
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/programs" className="hover:text-foreground transition-colors">Programs</a></li>
                  <li><a href="/wod" className="hover:text-foreground transition-colors">WOD Generator</a></li>
                  <li><a href="/week" className="hover:text-foreground transition-colors">Membership Calculator</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                  Connect
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>123 Industrial Ave, Floor 4</li>
                  <li>hello@northline.fit</li>
                  <li>Open 24/7 · 365</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
              © 2026 NORTHLINE FITNESS. NO EXCUSES.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}