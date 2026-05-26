import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { ListChecks } from "lucide-react"

export function RatingSection() {
  return (
    <section className="w-full py-12 px-4 sport-pattern" style={{ background: "hsl(var(--background))" }}>
      <div className="mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="flex items-start gap-4 mb-8">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{
              background: "hsl(var(--gold) / 0.1)",
              border: "1px solid hsl(var(--gold) / 0.25)",
            }}
            aria-hidden="true"
          >
            <ListChecks className="w-5 h-5" style={{ color: "hsl(var(--gold))" }} />
          </div>
          <div>
            <div
              className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1"
              style={{ color: "hsl(var(--gold) / 0.6)" }}
            >
              Gold Standard Rankings
            </div>
            <h2 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-wide text-foreground">
              Best Betting Sites in Britain
            </h2>
            <p className="text-sm font-sans mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
              Independently ranked &middot; UKGC licensed only &middot; Expert-reviewed &amp; updated monthly
            </p>
          </div>
        </div>

        {/* Column headers — desktop only */}
        <div
          className="hidden md:grid md:grid-cols-[52px_190px_1fr_120px_160px] items-center gap-0 px-4 pb-2 mb-1 border-b"
          style={{ borderColor: "hsl(var(--border))" }}
          aria-hidden="true"
        >
          <div />
          <div
            className="font-mono text-[9px] uppercase tracking-widest text-center px-4"
            style={{ color: "hsl(var(--gold) / 0.5)" }}
          >
            Bookmaker
          </div>
          <div
            className="font-mono text-[9px] uppercase tracking-widest text-center px-4"
            style={{ color: "hsl(var(--gold) / 0.5)" }}
          >
            Welcome Offer
          </div>
          <div
            className="font-mono text-[9px] uppercase tracking-widest text-center"
            style={{ color: "hsl(var(--gold) / 0.5)" }}
          >
            Our Score
          </div>
          <div />
        </div>

        {/* Cards list */}
        <div className="space-y-2 mt-2">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Disclaimer note */}
        <div
          className="mt-6 pt-4 border-t gold-left-accent pl-3"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <p className="font-mono text-[9px] uppercase tracking-widest leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Rankings based on independent editorial assessment. Affiliate links may be used. Gambling involves financial risk. 18+ only. BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
