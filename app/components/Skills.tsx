"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="px-6 py-20" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="flex flex-col gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + i * 0.03,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-[var(--color-bg-elevated)] bg-[var(--color-bg)] px-4 py-2 text-sm font-medium text-[var(--color-foreground-muted)] shadow-sm transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
