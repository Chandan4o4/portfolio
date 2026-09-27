"use client";

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const prefersReduced = useReducedMotion();

  // Avoid hydration mismatch: only show the icon after mount.
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100",
        "dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={
              prefersReduced
                ? { opacity: 0 }
                : { opacity: 0, rotate: -90, scale: 0.6 }
            }
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={
              prefersReduced
                ? { opacity: 0 }
                : { opacity: 0, rotate: 90, scale: 0.6 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-flex"
          >
            {isDark ? (
              <Moon className="h-4 w-4" aria-hidden />
            ) : (
              <Sun className="h-4 w-4" aria-hidden />
            )}
          </motion.span>
        ) : (
          <span className="inline-flex h-4 w-4" aria-hidden />
        )}
      </AnimatePresence>
    </button>
  );
}
