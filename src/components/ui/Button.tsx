import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-700 text-white shadow-[0_10px_30px_-10px_rgb(37_48_155/0.7)] hover:bg-brand-800 hover:-translate-y-0.5",
  secondary: "bg-white text-brand-800 ring-1 ring-line hover:ring-brand-300 hover:-translate-y-0.5",
  light: "bg-white text-brand-800 hover:bg-brand-50 hover:-translate-y-0.5",
  ghost: "text-white ring-1 ring-white/40 hover:bg-white/10",
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof variants };

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
