"use client";

import { createContext, useContext, useMemo } from "react";
import { useTheme, type Theme } from "@/lib/useTheme";

type ThemeContextValue = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = useTheme();
  const memo = useMemo(() => value, [value.theme, value.mounted]);
  return (
    <ThemeContext.Provider value={memo}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
}
