"use client";

import { useEffect } from "react";

const SECTION_IDS = ["hero", "about", "history", "work", "skills", "contact"];

export function ScrollSpyHash() {
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null
    );
    if (sections.length === 0) return;

    const ratios = new Map<string, number>();
    SECTION_IDS.forEach((id) => ratios.set(id, 0));

    const updateHash = () => {
      let bestId: string | null = null;
      let bestRatio = 0;
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestId && bestRatio > 0) {
        const newHash = `#${bestId}`;
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, "", newHash);
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (SECTION_IDS.includes(id)) {
            ratios.set(id, entry.intersectionRatio);
          }
        }
        updateHash();
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
