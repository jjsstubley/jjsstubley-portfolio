"use client";

import { motion } from "framer-motion";
import type { WorkEntry } from "@/data/work";

type Props = {
  entry: WorkEntry;
  index?: number;
  inView?: boolean;
};

export function WorkCard({ entry }: Props) {
  return (
    <motion.article
      initial={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-w-[280px] max-w-[500px] flex-shrink-0 rounded-xl border border-[var(--color-bg-elevated)] bg-[var(--color-bg)] p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)]">
        {entry.title}
      </h3>
      {entry.status && entry.status.length > 0 && (
        <p className="mb-4 text-xs text-[var(--color-muted)]">
          {entry.status.join(" · ")}
        </p>
      )}
      <p className="mb-4 text-sm text-[var(--color-foreground-muted)] leading-relaxed">
        {entry.description}
      </p>
      {entry.role && (
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            My role
          </span>
          <p className="mt-1 text-sm text-[var(--color-foreground-muted)] leading-relaxed">
            {entry.role}
          </p>
        </div>
      )}
      {entry.impact && (
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Impact
          </span>
          <p className="mt-1 text-sm text-[var(--color-foreground-muted)] leading-relaxed">
            {entry.impact}
          </p>
        </div>
      )}
      <ul className="mb-4 flex flex-wrap gap-2">
        {entry.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-[var(--color-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-foreground-muted)]"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 text-sm">
        {entry.liveUrl ? (
          <a
            href={entry.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            Live
          </a>
        ) : (
          <span className="text-[var(--color-muted)]">Live: —</span>
        )}
        {entry.repoUrl ? (
          <a
            href={entry.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            Repository
          </a>
        ) : (
          <span className="text-[var(--color-muted)]">Repository: Private</span>
        )}
      </div>
    </motion.article>
  );
}
