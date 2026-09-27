import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Surface used for projects, skills, experience entries, etc.
 * Includes a subtle gradient border on hover — implemented with a wrapper
 * pseudo-element so we don't fight Tailwind's border utilities.
 */
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300",
          "hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5",
          "dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:border-violet-500/30 dark:hover:shadow-violet-500/10",
          className,
        )}
        {...rest}
      />
    );
  },
);

/** Card title — uses a slightly tighter leading for headers inside cards. */
export function CardTitle({
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
        className,
      )}
      {...rest}
    />
  );
}

/** Card description — muted text below titles. */
export function CardDescription({
  className,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-zinc-600 dark:text-zinc-400",
        className,
      )}
      {...rest}
    />
  );
}
