"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/data/timeline";

type Props = {
  entry: TimelineEntry;
  index: number;
  inView: boolean;
};

export function TimelineCard({ entry, index, inView }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl border border-[var(--color-bg-elevated)] bg-[var(--color-bg)] p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-primary)]">
          {entry.date}
        </span>
        <span className="text-xs text-[var(--color-muted)]">·</span>
        <span className="text-xs text-[var(--color-muted)]">{entry.label}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)]">
        {entry.title}
      </h3>
      <p className="mb-4 text-sm text-[var(--color-foreground-muted)] leading-relaxed">
        {entry.description}
      </p>
      {entry.tech && entry.tech.length > 0 && (
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
      )}
      {(entry.liveUrl || entry.repoUrl) && (
        <div className="flex gap-4">
          {entry.liveUrl && (
            <a
              href={entry.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Live
            </a>
          )}
          {entry.repoUrl && (
            <a
              href={entry.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Repo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
