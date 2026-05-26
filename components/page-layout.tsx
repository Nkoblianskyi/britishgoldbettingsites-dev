import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  badge?: { text: string; className?: string; danger?: boolean }
  children: React.ReactNode
}

export function PageLayout({ title, subtitle, badge, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Inner page hero */}
      <div
        className="w-full px-4 py-12 sport-pattern"
        style={{
          background: "hsl(var(--green-deep))",
          borderBottom: "1px solid hsl(var(--gold) / 0.2)",
        }}
      >
        {/* Gold accent line */}
        <div
          className="w-full h-[2px] mb-8"
          style={{ background: "linear-gradient(90deg, hsl(var(--gold-dim)), hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)))" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest mb-6 transition-opacity hover:opacity-70"
            style={{ color: "hsl(var(--gold) / 0.5)" }}
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1
                className="font-heading font-extrabold text-3xl md:text-4xl uppercase leading-tight tracking-wide text-foreground"
              >
                {title}
              </h1>
              {subtitle && (
                <p className="font-mono text-[10px] mt-2 uppercase tracking-widest" style={{ color: "hsl(var(--gold) / 0.5)" }}>
                  {subtitle}
                </p>
              )}
            </div>
            {badge && (
              <span
                className="flex-shrink-0 font-mono text-xs px-3 py-1.5 uppercase tracking-widest"
                style={
                  badge.danger
                    ? {
                        border: "1px solid hsl(0 72% 50% / 0.5)",
                        color: "hsl(0 72% 60%)",
                        background: "hsl(0 72% 50% / 0.1)",
                      }
                    : {
                        border: "1px solid hsl(var(--gold) / 0.4)",
                        color: "hsl(var(--gold))",
                        background: "hsl(var(--gold) / 0.08)",
                      }
                }
              >
                {badge.text}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="mx-auto max-w-[1100px] px-4 py-10 space-y-5">
        {children}
      </div>
    </div>
  )
}

interface ContentBlockProps {
  title: string
  children: React.ReactNode
  accent?: "gold" | "green" | "red"
}

export function ContentBlock({ title, children, accent = "gold" }: ContentBlockProps) {
  const accentColor =
    accent === "red"
      ? "hsl(0 72% 52%)"
      : accent === "green"
      ? "hsl(150 55% 40%)"
      : "hsl(var(--gold))"

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
      }}
    >
      <div
        className="px-5 py-3.5 border-b"
        style={{
          background: "hsl(var(--green-mid))",
          borderColor: "hsl(var(--border))",
          borderLeft: `3px solid ${accentColor}`,
        }}
      >
        <h2 className="font-heading font-bold text-sm md:text-base uppercase tracking-wide text-foreground">
          {title}
        </h2>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  )
}
