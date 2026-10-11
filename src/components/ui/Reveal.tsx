"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "li" | "section";
};

/**
 * Scroll reveal that is visible by default: content is server-rendered fully
 * visible and only elements still below the fold are tucked away on mount, then
 * eased in shortly before they enter the viewport. If JavaScript is slow or
 * disabled, nothing is ever hidden.
 */
export function Reveal({ children, className, delay = 0, direction = "up", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.reveal = "shown";
        observer.disconnect();
      },
      { rootMargin: "0px 0px 10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal-dir={direction}
      style={{ "--reveal-delay": `${Math.min(delay, 0.3)}s` } as CSSProperties}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
