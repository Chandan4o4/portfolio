import Link from "next/link";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/30",
        secondary:
          "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-900",
        ghost:
          "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900",
        outline:
          "border border-violet-500/40 text-violet-700 hover:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-500/10",
        whatsapp:
          "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/30",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonStyles>;

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof buttonStyles> & {
    href: string;
  };

type AnchorButtonProps = ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonStyles> & {
    href: string;
  };

/**
 * Polymorphic Button.
 *
 * Use as a regular <button> when no href is given, or pass href to render
 * as Next.js Link or external <a>. All variants use rounded-full pill
 * styling consistent across the site.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, size, type = "button", ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonStyles({ variant, size }), className)}
        {...rest}
      />
    );
  },
);

/** Button that uses Next.js Link for client-side navigation. */
export function LinkButton({
  className,
  variant,
  size,
  href,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonStyles({ variant, size }), className)}
      {...rest}
    />
  );
}

/** Button that renders as an external anchor (opens in new tab by default). */
export function AnchorButton({
  className,
  variant,
  size,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  ...rest
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(buttonStyles({ variant, size }), className)}
      {...rest}
    />
  );
}
