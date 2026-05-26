import Image from "next/image"
import { ShieldCheck, TrendingUp, BadgeCheck, Zap } from "lucide-react"

function getUpdatedLabel() {
  const now = new Date()
  return now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

const TRUST_PILLARS = [
  { icon: ShieldCheck, label: "UKGC Licensed" },
  { icon: BadgeCheck, label: "Zero Paid Placements" },
  { icon: TrendingUp, label: "Expert Ranked" },
  { icon: Zap, label: "Updated Monthly" },
] as const

export function Hero() {
  const updatedDate = getUpdatedLabel()
  return (
    <section className="relative w-full min-h-[380px] md:min-h-[500px] flex flex-col overflow-hidden">
      {/* Stadium background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/stadium-hero.jpg"
          alt="Premier League football stadium on a match day evening under floodlights"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Deep green overlay */}
        <div
          className="absolute inset-0 sport-bg-overlay"
        />
        {/* Gold grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, hsl(var(--gold) / 0.04) 60px, hsl(var(--gold) / 0.04) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, hsl(var(--gold) / 0.03) 60px, hsl(var(--gold) / 0.03) 61px)",
          }}
        />
        {/* Left gold accent bar */}
        <div
          className="absolute inset-y-0 left-0 w-[3px]"
          style={{ background: "linear-gradient(180deg, hsl(var(--gold)), hsl(var(--gold) / 0.2))" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-4 py-14 md:py-24">
        <div className="mx-auto w-full max-w-[1100px]">

          {/* Label chip */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.18em]"
              style={{
                background: "hsl(var(--gold) / 0.1)",
                border: "1px solid hsl(var(--gold) / 0.35)",
                color: "hsl(var(--gold-light))",
              }}
            >
              <span className="w-1.5 h-1.5 bg-green-400 flex-shrink-0" aria-hidden="true" />
              Independent Editorial &nbsp;&middot;&nbsp; UKGC Licensed Only
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-extrabold leading-[1.02] tracking-tight text-balance text-white mb-5 uppercase"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            <span className="block text-white/90">Britain&apos;s Premier</span>
            <span
              className="block gold-shimmer"
              style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
            >
              Betting Site Rankings
            </span>
            <span className="block text-white/70 text-[0.55em] font-medium tracking-widest mt-2 uppercase font-sans">
              Gold Standard. Independent. Trusted.
            </span>
          </h1>

          {/* Standfirst */}
          <p className="font-sans leading-relaxed max-w-2xl mb-10"
            style={{ color: "hsl(var(--off-white) / 0.7)", fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}>
            We test every bookmaker ourselves — real accounts, real bets, real money. Only platforms holding
            a current UKGC licence make it to our list. Ranked on odds precision, withdrawal speed, bonus
            transparency, and player protection. No sponsorship. No compromise.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {TRUST_PILLARS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-wider" style={{ color: "hsl(var(--off-white) / 0.6)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated date strip */}
      <div
        className="relative z-10 w-full py-2.5 px-4"
        style={{
          borderTop: "1px solid hsl(var(--gold) / 0.15)",
          background: "hsl(var(--green-deep) / 0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] flex items-center gap-2">
          <div className="h-px w-6 flex-shrink-0" style={{ background: "hsl(var(--gold))" }} aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "hsl(var(--gold) / 0.5)" }}>
            Rankings last updated:&nbsp;
            <time dateTime={new Date().toISOString().slice(0, 10)} style={{ color: "hsl(var(--gold-light))" }}>
              {updatedDate}
            </time>
          </span>
        </div>
      </div>
    </section>
  )
}
