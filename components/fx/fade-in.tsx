"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  /** Delay before animating, in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Vertical offset in pixels */
  y?: number;
  /** Horizontal offset in pixels */
  x?: number;
  /** Once = animate only the first time the element enters the viewport */
  once?: boolean;
  /** Amount of element visible before triggering (0-1) */
  amount?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 16,
  x = 0,
  once = true,
  amount = 0.3,
  ...rest
}: FadeInProps) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : y, x: prefersReduced ? 0 : x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: prefersReduced ? 0 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
