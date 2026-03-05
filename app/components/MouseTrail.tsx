"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LERP = 0.12;
const LERP_OUTER = 0.08;

export function MouseTrail() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [inner, setInner] = useState({ x: 0, y: 0 });
  const [outer, setOuter] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(prefersReduced.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    prefersReduced.addEventListener("change", handler);
    return () => prefersReduced.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!mounted || reducedMotion || !finePointer) return;

    let raf = 0;
    let currentInner = { x: 0, y: 0 };
    let currentOuter = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const target = targetRef.current;
      currentInner.x += (target.x - currentInner.x) * LERP;
      currentInner.y += (target.y - currentInner.y) * LERP;
      currentOuter.x += (target.x - currentOuter.x) * LERP_OUTER;
      currentOuter.y += (target.y - currentOuter.y) * LERP_OUTER;
      setInner({ x: currentInner.x, y: currentInner.y });
      setOuter({ x: currentOuter.x, y: currentOuter.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [mounted, reducedMotion, finePointer]);

  if (!mounted || reducedMotion || !finePointer) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-60"
        style={{ x: inner.x, y: inner.y }}
        initial={false}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary)] opacity-30"
        style={{ x: outer.x, y: outer.y }}
        initial={false}
      />
    </>
  );
}
