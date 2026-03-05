"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Gradient mesh */}
      <div
        className="absolute -top-1/2 -left-1/2 h-full w-full opacity-[0.15]"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 30% 40%, var(--color-primary), transparent 70%),
                      radial-gradient(ellipse 50% 60% at 70% 60%, var(--color-secondary), transparent 70%)`,
        }}
      />
      {/* Soft animated shapes - static when reduced motion */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full opacity-20"
            style={{ background: "var(--color-primary)", filter: "blur(80px)" }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full opacity-15"
            style={{ background: "var(--color-secondary)", filter: "blur(60px)" }}
            animate={{
              scale: [1.1, 1, 1.1],
              y: [0, -15, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
