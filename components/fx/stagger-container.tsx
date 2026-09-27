"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** Delay between children animations, in seconds */
  stagger?: number;
  /** Delay before the first child animates */
  delay?: number;
  /** Once = animate only the first time the element enters the viewport */
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.2,
  ...rest
}: StaggerContainerProps) {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : stagger,
        delayChildren: prefersReduced ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  y?: number;
}

export function StaggerItem({ children, y = 20, ...rest }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0 : 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={item} {...rest}>
      {children}
    </motion.div>
  );
}
