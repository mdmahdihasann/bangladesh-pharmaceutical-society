import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  title: string;
  text?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({ title, text, align = "left", invert, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <h2
        className={cn(
          "text-3xl leading-[1.12] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={cn("mt-4 text-lg leading-relaxed text-pretty", invert ? "text-brand-100" : "text-muted")}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
