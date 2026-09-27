"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface TextRevealProps extends HTMLMotionProps<"span"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

/**
 * Animates the children with a vertical slide + fade.
 * Use it inline to give individual words or lines a staggered entrance.
 */
export function TextReveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 12,
  ...rest
}: TextRevealProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.span
      initial={{ opacity: 0, y: prefersReduced ? 0 : y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReduced ? 0 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...rest}
    >
      {children}
    </motion.span>
  );
}

/**
 * Split a string into words and stagger each word in.
 * Useful for hero headlines.
 */
interface SplitWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}

export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
}: SplitWordsProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-baseline"
        >
          <motion.span
            className={`inline-block will-change-transform ${wordClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
