"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/data/about";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 py-20" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl"
        >
          About me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-[var(--color-foreground-muted)] leading-relaxed"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-sm text-[var(--color-muted)]">{about.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
