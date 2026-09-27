import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeStyles = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-zinc-200 bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300",
        violet:
          "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300",
        emerald:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        amber:
          "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300",
        sky: "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-300",
        rose: "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300",
        fuchsia:
          "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
        outline:
          "border-zinc-300 bg-transparent text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeStyles>;

export function Badge({ className, variant, ...rest }: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ variant }), className)} {...rest} />
  );
}
