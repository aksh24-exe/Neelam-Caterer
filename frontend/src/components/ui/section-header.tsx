import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.25em] mb-4",
            light ? "text-gold" : "text-terracotta"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-semibold leading-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-white/75" : "text-ink-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-16 bg-gold",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  )
}
