import type { Metadata } from "next";
import { Inter, Oswald, Anton } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav-header";

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
  title: "NORTHLINE FITNESS | Forge Your Strength",
  description:
    "Brutalist strength gym. Elite equipment, expert coaches, zero excuses. Open 24/7.",
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
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t border-white/[8%] bg-background py-8 px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-heading text-xl font-bold tracking-[0.15em] text-foreground">
              NORTHLINE FITNESS
            </span>
            <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              <span>Open 24/7</span>
              <span className="h-4 w-px bg-white/[10%]" />
              <span>Est. 2019</span>
              <span className="h-4 w-px bg-white/[10%]" />
              <span>No Excuses</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}