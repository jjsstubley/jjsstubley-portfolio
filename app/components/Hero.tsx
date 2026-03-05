"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { site } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
};

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center justify-center px-6 py-20">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-[var(--color-primary)] bg-[var(--color-bg-elevated)] text-3xl font-bold text-[var(--color-primary)] shadow-lg">
            {site.avatarUrl ? (
              <Image
                src={site.avatarUrl}
                alt=""
                width={112}
                height={112}
                className="object-cover"
                priority
              />
            ) : (
              <span>{site.name.split(" ").map((n) => n[0]).join("")}</span>
            )}
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]"
        >
          {site.status}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl"
        >
          Hi, I&apos;m {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-lg text-[var(--color-foreground-muted)]"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="#work"
            className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-dark)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            View my work
          </Link>
          <ul className="flex gap-4" aria-label="Social links">
            {site.socials.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {iconMap[icon] ?? icon}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
