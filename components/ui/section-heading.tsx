import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fx/fade-in";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  /** Small label shown above the title (e.g. "01 / About") */
  eyebrow: string;
  /** The main section title */
  title: string;
  /** Optional supporting copy */
  description?: string;
  /** Center-align the heading */
  centered?: boolean;
}

/**
 * Consistent section header used at the top of every section.
 * Recruiters love clear visual hierarchy — this gives every section a
 * familiar rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  ...rest
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 flex flex-col gap-3",
        centered && "items-center text-center",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
        <span
          aria-hidden
          className="h-px w-8 bg-gradient-to-r from-violet-500/0 via-violet-500/60 to-violet-500/0"
        />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
