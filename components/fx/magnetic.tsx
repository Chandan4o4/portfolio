"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  /** Strength of the magnetic pull in pixels (0 = none) */
  strength?: number;
  className?: string;
  /** If true, the wrapper is the magnetic element. Defaults to true. */
  asChild?: boolean;
}

/**
 * Wraps a child element and gently pulls it toward the cursor.
 * Great for primary CTAs — adds a subtle "alive" feel without being distracting.
 */
export function Magnetic({
  children,
  strength = 14,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
