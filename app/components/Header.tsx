"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/data/site";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-bg-elevated)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Main">
        <Link
          href="#hero"
          className="text-lg font-semibold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          {site.name.split(" ")[0]}
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-[var(--color-primary)] hover:underline sm:inline"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-foreground)] hover:bg-[var(--color-bg-elevated)] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            )}
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[var(--color-bg-elevated)] bg-[var(--color-bg)] md:hidden ${mobileOpen ? "block" : "hidden"}`}
        role="region"
        aria-label="Mobile menu"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-foreground-muted)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-bg-elevated)]"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
