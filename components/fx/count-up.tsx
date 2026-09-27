"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Target value */
  to: number;
  /** Duration in seconds */
  duration?: number;
  /** Class name applied to the rendered span */
  className?: string;
  /** Delay before animation starts */
  delay?: number;
  /** When true, format with thousands separators (default true) */
  group?: boolean;
}

/**
 * Animates a numeric value from 0 to `to` when the element enters the viewport.
 * SSR-safe: starts at 0 and only animates after hydration.
 */
export function CountUp({
  to,
  duration = 1.6,
  className,
  delay = 0,
  group = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate(latest) {
        setValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, to, duration, delay, prefersReduced]);

  const formatted = group
    ? Math.round(value).toLocaleString()
    : Math.round(value).toString();

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
