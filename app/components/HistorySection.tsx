"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { history } from "@/data/history";
import { TimelineCard } from "./TimelineCard";
import type { HistoryEntry } from "@/data/history";

export function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 0.35, 0.7], [0, 0.5, 1]);

  return (
    <section id="history" className="relative px-6 py-20" ref={sectionRef}>
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl"
        >
          History &amp; work
        </motion.h2>

        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-lg font-semibold text-[var(--color-foreground)]"
          >
            History
          </motion.h3>
          <div className="absolute left-1/2 top-12 bottom-0 w-px -translate-x-1/2 bg-[var(--color-bg-elevated)] md:left-12 md:translate-x-0" />
          <motion.div
            className="absolute left-1/2 top-12 bottom-0 w-px -translate-x-1/2 md:left-12 md:translate-x-0"
            style={{
              scaleY: pathProgress,
              transformOrigin: "top",
              background: "var(--color-primary)",
            }}
          />
          <ul className="relative space-y-12 pl-0 pb-16 md:pl-24">
            {history.map((entry, index) => (
              <TimelineItem key={entry.id} entry={entry} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  entry,
  index,
}: {
  entry: HistoryEntry;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref ?? { current: null }, {
    once: false,
    amount: 0.3,
  });

  return (
    <li ref={ref} className="relative flex items-start gap-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)] md:left-12"
      />
      <div className="w-full pl-8 md:pl-12">
        <TimelineCard entry={entry} index={index} inView={inView} />
      </div>
    </li>
  );
}
