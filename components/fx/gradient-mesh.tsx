"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Decorative animated gradient mesh used in the hero background.
 * Purely visual — pointer-events-none and aria-hidden.
 */
export function GradientMesh({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-violet-500/30 blur-3xl dark:bg-violet-500/20"
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, 60, 0],
                y: [0, 40, 0],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 right-0 h-[380px] w-[380px] rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-400/15"
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, -50, 0],
                y: [0, 30, 0],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/15"
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, -40, 0],
              }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
