"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { work } from "@/data/work";
import { WorkCard } from "./WorkCard";

export function WorkSection() {
  const workSectionRef = useRef<HTMLDivElement>(null);
  const workStickyRef = useRef<HTMLDivElement>(null);
  const cardsViewportRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const workInView = useInView(workStickyRef ?? { current: null }, {
    once: true,
    amount: 0.01,
  });

  const { scrollYProgress: workScrollYProgress } = useScroll({
    target: workSectionRef,
    offset: ["start start", "end end"],
  });
  const workScrollProgress = useTransform(workScrollYProgress, [0, 1], [0, 1]);
  const workX = useTransform(
    workScrollYProgress,
    [0, 1],
    [0, -Math.max(0, scrollDistance)]
  );

  useLayoutEffect(() => {
    const viewportEl = cardsViewportRef.current;
    const rowEl = cardsContainerRef.current;
    if (!viewportEl || !rowEl) return;

    const measure = () => {
      const viewportWidth = viewportEl.clientWidth;
      const rowWidth = rowEl.scrollWidth;
      setScrollDistance(Math.max(0, rowWidth - viewportWidth));
    };

    measure();
    const onResize = () => requestAnimationFrame(measure);
    const ro = new ResizeObserver(onResize);
    ro.observe(viewportEl);
    ro.observe(rowEl);
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="work"
      ref={workSectionRef}
      className="relative w-full"
      style={{ height: "400vh" }}
    >
      <div
        ref={workStickyRef}
        className="sticky top-0 left-0 w-full h-screen min-h-[400px] overflow-x-hidden px-6 pt-0 flex flex-col pt-12"
      >
        <div className="mx-auto w-full max-w-4xl flex-1 flex flex-col justify-start min-h-0 pt-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="pb-2 text-lg font-semibold text-[var(--color-foreground)]"
          >
            Work
          </motion.h3>
          <div className="w-full h-1 overflow-hidden rounded-full bg-[var(--color-bg-elevated)]">
            <motion.div
              className="h-full w-full rounded-full"
              style={{
                scaleX: workScrollProgress,
                transformOrigin: "left",
                background: "var(--color-primary)",
              }}
            />
          </div>
          <div
            ref={cardsViewportRef}
            className="flex items-center overflow-x-hidden w-full pt-12"
          >
            <motion.div
              ref={cardsContainerRef}
              style={{ x: workX, willChange: "transform" }}
              className="flex flex-row gap-6 flex-nowrap"
            >
              {work.map((entry, index) => (
                <WorkCard
                  key={entry.id}
                  entry={entry}
                  index={index}
                  inView={workInView}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
