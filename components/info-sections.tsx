"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Trophy,
  Star,
  Zap,
  CreditCard,
  Headphones,
  Award,
  AlertTriangle,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Phone,
  ExternalLink,
  BarChart2,
  Lock,
  Clock,
} from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

/* ─────────────────────────────────────────────────────────────────
   SECTION 1: HOW WE REVIEW — Vertical numbered timeline + sidebar
   ───────────────────────────────────────────────────────────────── */
const REVIEW_STEPS = [
  {
    icon: Lock,
    step: "01",
    title: "Licence Verification",
    weight: "30%",
    desc: "We cross-check every operator against the UKGC public register in real time. Any lapsed, restricted, or suspended licence is an automatic disqualification — regardless of brand size or legacy.",
  },
  {
    icon: Trophy,
    step: "02",
    title: "Bonus Audit",
    weight: "25%",
    desc: "We dissect welcome offer terms line by line. The wagering multiplier, minimum qualifying odds, time limits, and withdrawal caps all factor into the true cash value we report.",
  },
  {
    icon: Star,
    step: "03",
    title: "Odds Benchmarking",
    weight: "20%",
    desc: "Every week our analysts record Premier League, horse racing, and tournament odds across all listed operators and compute overround percentages. Consistent value earns a higher score.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Platform Stress Test",
    weight: "15%",
    desc: "We test mobile and desktop interfaces during live match minutes — peak traffic, live price changes, and in-play cash-out. Lag, crashes, or navigation dead-ends cost points.",
  },
  {
    icon: CreditCard,
    step: "05",
    title: "Payment Transparency",
    weight: "7%",
    desc: "Deposit and withdrawal options, processing windows, fee structures, and minimum / maximum limits are all logged and compared against industry benchmarks.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Support Quality",
    weight: "3%",
    desc: "We open genuine support tickets via live chat, email, and phone. First-response time, resolution accuracy, and agent knowledge all influence this pillar's score.",
  },
]

function HowWeReview() {
  return (
    <section
      className="w-full py-16 px-4 sport-pattern"
      style={{ background: "hsl(var(--background))", borderTop: "1px solid hsl(var(--border))" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col lg:flex-row lg:gap-16">

          {/* Left: sticky intro column */}
          <div className="lg:w-72 flex-shrink-0 mb-10 lg:mb-0">
            <div
              className="lg:sticky lg:top-24 p-6"
              style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--gold) / 0.2)" }}
            >
              <div className="w-px h-8 mb-4" style={{ background: "hsl(var(--gold))" }} aria-hidden="true" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] block mb-2" style={{ color: "hsl(var(--gold) / 0.6)" }}>
                Our Methodology
              </span>
              <h2 className="font-heading font-extrabold text-2xl uppercase leading-tight text-foreground mb-4">
                How We Review Every Bookmaker
              </h2>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                Every operator faces a minimum four-week hands-on evaluation before earning a place on our list. Our six-pillar scoring model is applied identically to every candidate — no exceptions, no favours.
              </p>
              <div
                className="flex items-center gap-3 p-3"
                style={{ background: "hsl(var(--gold) / 0.08)", border: "1px solid hsl(var(--gold) / 0.2)" }}
              >
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "hsl(var(--gold-light))" }}>
                  4-week minimum review
                </span>
              </div>
            </div>
          </div>

          {/* Right: numbered timeline steps */}
          <div className="flex-1 relative">
            {/* Vertical rule */}
            <div
              className="absolute left-[18px] top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "hsl(var(--gold) / 0.15)" }}
              aria-hidden="true"
            />

            <div className="space-y-0">
              {REVIEW_STEPS.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="relative flex gap-0 sm:gap-6">
                    {/* Step circle on timeline */}
                    <div className="hidden sm:flex flex-col items-center flex-shrink-0" style={{ width: 36 }}>
                      <div
                        className="w-9 h-9 flex items-center justify-center font-heading font-bold text-xs z-10 flex-shrink-0"
                        style={{
                          background: "hsl(var(--gold))",
                          color: "hsl(var(--green-deep))",
                        }}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 p-5 mb-2 ${idx < REVIEW_STEPS.length - 1 ? "border-b" : ""}`}
                      style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="sm:hidden w-7 h-7 flex items-center justify-center font-heading font-bold text-xs flex-shrink-0"
                            style={{ background: "hsl(var(--gold))", color: "hsl(var(--green-deep))" }}
                          >
                            {step.step}
                          </div>
                          <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} aria-hidden="true" />
                          <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <span
                          className="font-heading font-bold text-lg flex-shrink-0"
                          style={{ color: "hsl(var(--gold))" }}
                        >
                          {step.weight}
                        </span>
                      </div>
                      {/* Weight bar */}
                      <div
                        className="h-[2px] w-full mb-3"
                        style={{ background: "hsl(var(--border))" }}
                      >
                        <div
                          className="h-[2px]"
                          style={{ width: step.weight, background: "hsl(var(--gold))" }}
                        />
                      </div>
                      <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 2: OUR PICK — Full-width dark feature panel
   ───────────────────────────────────────────────────────────────── */
function OurPickBanner() {
  const topSite = bettingSites[0]
  const runnerUp = bettingSites[1]

  return (
    <section
      className="w-full py-16 px-4 sport-pattern"
      style={{
        background: "hsl(var(--green-deep))",
        borderTop: "1px solid hsl(var(--gold) / 0.2)",
        borderBottom: "1px solid hsl(var(--gold) / 0.2)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-8 h-[2px] flex-shrink-0"
            style={{ background: "hsl(var(--gold))" }}
            aria-hidden="true"
          />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: "hsl(var(--gold) / 0.65)" }}>
            Editorial Selection
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6">

          {/* Main feature card — #1 */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            aria-label={`Visit ${topSite.name} — ${topSite.bonus}`}
            className="block group"
          >
            <div
              className="relative overflow-hidden h-full p-6 sm:p-8"
              style={{
                background: "hsl(var(--green-mid))",
                border: "1px solid hsl(var(--gold) / 0.4)",
              }}
            >
              {/* Gold left bar */}
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: "hsl(var(--gold))" }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest mb-1.5" style={{ color: "hsl(var(--gold) / 0.6)" }}>
                    Gold Pick — No. 1 Ranked
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl md:text-3xl uppercase text-foreground leading-tight">
                    Our Top Pick This Month
                  </h2>
                </div>
                <Award className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "hsl(var(--gold))" }} aria-hidden="true" />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div
                  className="flex-shrink-0 flex items-center justify-center overflow-hidden"
                  style={{ background: "hsl(0 0% 97%)", padding: "10px 18px", border: "1px solid hsl(var(--border))" }}
                >
                  <img
                    src={topSite.logo || "/placeholder.svg"}
                    alt={`${topSite.name} logo`}
                    className="h-12 max-w-[160px] object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "hsl(var(--gold) / 0.6)" }}>
                    Welcome Offer
                  </p>
                  <p className="font-heading font-extrabold text-xl md:text-2xl uppercase text-foreground leading-tight mb-3">
                    {topSite.bonus}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topSite.features.map((f, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] uppercase tracking-wide px-2.5 py-1"
                        style={{
                          background: "hsl(var(--gold) / 0.1)",
                          color: "hsl(var(--gold-light))",
                          border: "1px solid hsl(var(--gold) / 0.2)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end sm:items-center gap-1 flex-shrink-0">
                  <div className="font-heading font-extrabold text-4xl leading-none" style={{ color: "hsl(var(--gold))" }}>
                    {topSite.rating.toFixed(1)}
                  </div>
                  <div className="font-mono text-[9px]" style={{ color: "hsl(var(--gold) / 0.5)" }}>/ 10</div>
                  <div
                    className="inline-flex items-center gap-1.5 mt-3 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest font-bold transition-all group-hover:opacity-90"
                    style={{ background: "hsl(var(--gold))", color: "hsl(var(--green-deep))" }}
                  >
                    Claim Now <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Side column — runner up + note */}
          <div className="flex flex-col gap-4">
            {/* Runner up card */}
            <a
              href={runnerUp.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              aria-label={`Visit ${runnerUp.name} — ${runnerUp.bonus}`}
              className="block group"
            >
              <div
                className="p-5"
                style={{
                  background: "hsl(var(--green-mid))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "hsl(var(--gold) / 0.5)" }}>
                  Runner Up — No. 2
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ background: "hsl(0 0% 97%)", padding: "6px 12px", border: "1px solid hsl(var(--border))" }}
                  >
                    <img
                      src={runnerUp.logo || "/placeholder.svg"}
                      alt={`${runnerUp.name} logo`}
                      className="h-8 max-w-[100px] object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-sm uppercase text-foreground leading-tight">
                      {runnerUp.bonus}
                    </p>
                    <div className="font-heading font-bold text-lg mt-0.5" style={{ color: "hsl(var(--gold))" }}>
                      {runnerUp.rating.toFixed(1)}<span className="font-sans text-xs" style={{ color: "hsl(var(--gold) / 0.5)" }}> /10</span>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full py-2 text-center font-mono text-[10px] uppercase tracking-widest font-bold transition-all group-hover:opacity-80"
                  style={{
                    border: "1px solid hsl(var(--gold) / 0.4)",
                    color: "hsl(var(--gold))",
                  }}
                >
                  View Offer
                </div>
              </div>
            </a>

            {/* Editorial note */}
            <div
              className="p-5 flex-1"
              style={{
                background: "hsl(var(--green-mid))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "hsl(var(--gold) / 0.5)" }}>
                Editorial Note
              </p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                Our monthly top pick is determined solely by composite score across six independent pillars. No payment or commercial arrangement can influence placement. Rankings are reviewed and reissued every 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 3: FAQ — Two-column split layout with numbered items
   ───────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How do you decide which betting sites appear on this list?",
    a: "Every site must hold a current, unrestricted UKGC licence. Candidates then undergo a four-week hands-on review across six scoring pillars. Only operators achieving a composite score of 8.5 or above are published. Sites with upheld complaints or poor responsible gambling records are excluded regardless of score.",
  },
  {
    q: "Are welcome bonuses genuinely worth claiming?",
    a: "Not always. A headline figure of £50 in free bets is only attractive when the wagering requirement is 30× or lower and minimum qualifying odds sit at 1.5 or above. Our reviews expose the genuine value behind the marketing — and where a bonus is poor value, we state that clearly.",
  },
  {
    q: "How often do you update the rankings?",
    a: "Our editorial team re-tests every listed operator on a rolling monthly cycle. Any bookmaker that fails a re-assessment — due to changed terms, payout delays, or deteriorating support — is immediately re-evaluated and may be repositioned or removed from the list.",
  },
  {
    q: "Do any bookmakers pay for a higher ranking?",
    a: "No. Rankings are determined entirely by our scoring methodology. We earn affiliate commission when you register via our links, but this does not — and cannot — influence any operator's position. Our editorial and commercial functions are strictly separated.",
  },
  {
    q: "What is GAMSTOP and how do I register?",
    a: "GAMSTOP is the UK's national self-exclusion service. Registering at gamstop.co.uk automatically blocks your access to every UKGC-licensed betting and casino platform for a period you choose (minimum six months). Every operator on our list is required by the UKGC to honour GAMSTOP registrations.",
  },
  {
    q: "Is online betting with UK bookmakers safe?",
    a: "All operators on this list hold a valid UKGC licence, which requires segregated player funds, 128-bit SSL encryption, responsible gambling tools, and compliance with strict advertising rules. The UKGC is among the most rigorous gambling regulators globally. We only list operators who pass our own additional due diligence.",
  },
]

function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      className="w-full py-16 px-4"
      style={{ background: "hsl(var(--background))", borderTop: "1px solid hsl(var(--border))" }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-6"
          style={{ borderBottom: "1px solid hsl(var(--border))" }}
        >
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] block mb-2" style={{ color: "hsl(var(--gold) / 0.6)" }}>
              Knowledge Base
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl uppercase text-foreground leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm max-w-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Everything you need to know about British Gold Betting Sites and placing bets safely in the UK.
          </p>
        </div>

        {/* Accordion grid — two column */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <button
                className="w-full flex items-start justify-between py-5 text-left gap-4 group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className="font-heading font-bold text-sm flex-shrink-0 mt-0.5"
                    style={{ color: openFaq === i ? "hsl(var(--gold))" : "hsl(var(--gold) / 0.35)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-bold text-sm uppercase tracking-wide text-foreground leading-snug">
                    {faq.q}
                  </span>
                </div>
                {openFaq === i
                  ? <ChevronUp className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--gold))" }} aria-hidden="true" />
                  : <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--gold) / 0.4)" }} aria-hidden="true" />
                }
              </button>
              {openFaq === i && (
                <div className="pb-5 pl-9 pr-8">
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 4: SAFER GAMBLING — Dark full-width panel with dos/don'ts
   ───────────────────────────────────────────────────────────────── */
function SaferGambling() {
  return (
    <section
      className="w-full py-16 px-4 sport-pattern"
      style={{
        background: "hsl(var(--green-deep))",
        borderTop: "1px solid hsl(var(--gold) / 0.2)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Warning bar */}
        <div
          className="flex items-start gap-4 p-4 mb-10"
          style={{
            background: "hsl(0 72% 50% / 0.08)",
            border: "1px solid hsl(0 72% 50% / 0.3)",
            borderLeft: "3px solid hsl(0 72% 50%)",
          }}
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 50%)" }} aria-hidden="true" />
          <div>
            <p className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-1">Important Notice</p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--off-white) / 0.65)" }}>
              Betting carries significant financial risk and can lead to addiction. Never wager money you cannot afford to lose.
              Free, confidential help is available 24/7 via{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 font-medium" style={{ color: "hsl(0 72% 60%)" }}>
                BeGambleAware.org
              </a>{" "}
              or by calling <strong className="text-foreground">0808 8020 133</strong>.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-10">
          <div
            className="w-10 h-10 flex items-center justify-center flex-shrink-0"
            style={{ background: "hsl(var(--gold) / 0.12)", border: "1px solid hsl(var(--gold) / 0.25)" }}
            aria-hidden="true"
          >
            <HeartHandshake className="w-5 h-5" style={{ color: "hsl(var(--gold))" }} />
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] block mb-1" style={{ color: "hsl(var(--gold) / 0.6)" }}>
              Responsible Gambling
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl uppercase text-foreground leading-tight">
              Gambling Must Always Be a Choice
            </h2>
          </div>
        </div>

        {/* Three-column layout: habits / warnings / support */}
        <div className="grid md:grid-cols-3 gap-0 border"
          style={{ borderColor: "hsl(var(--gold) / 0.2)" }}
        >
          {/* Healthy habits */}
          <div style={{ borderRight: "1px solid hsl(var(--gold) / 0.2)" }}>
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{ background: "hsl(150 30% 8%)", borderColor: "hsl(var(--gold) / 0.2)" }}
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(150 55% 45%)" }} aria-hidden="true" />
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-foreground">
                Healthy Habits
              </h3>
            </div>
            <ul className="p-5 space-y-3" role="list">
              {[
                "Set a monthly budget before placing any bet",
                "Use deposit limits on every account you open",
                "Treat winnings as a bonus — not guaranteed income",
                "Schedule regular breaks from all platforms",
                "Maintain wide social and leisure interests outside betting",
                "Register with GAMSTOP if you feel you need a break",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(150 55% 45%)" }} aria-hidden="true" />
                  <span className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--off-white) / 0.65)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warning signs */}
          <div style={{ borderRight: "1px solid hsl(var(--gold) / 0.2)" }}>
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{ background: "hsl(150 30% 8%)", borderColor: "hsl(var(--gold) / 0.2)" }}
            >
              <XCircle className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(0 72% 50%)" }} aria-hidden="true" />
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-foreground">
                Warning Signs
              </h3>
            </div>
            <ul className="p-5 space-y-3" role="list">
              {[
                "Betting with money for rent, bills, or food",
                "Hiding bets or losses from friends and family",
                "Using credit or loans to fund gambling activity",
                "Chasing losses with larger bets to recover them",
                "Feeling anxious or irritable when unable to bet",
                "Neglecting work or personal responsibilities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <XCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 50%)" }} aria-hidden="true" />
                  <span className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--off-white) / 0.65)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UK support services */}
          <div>
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{ background: "hsl(150 30% 8%)", borderColor: "hsl(var(--gold) / 0.2)" }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--gold))" }} aria-hidden="true" />
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-foreground">
                Free UK Support
              </h3>
            </div>
            <div className="p-5 space-y-4">
              {[
                { name: "GambleAware", url: "begambleaware.org", desc: "Free support & treatment referrals", href: "https://www.begambleaware.org" },
                { name: "GamCare Helpline", url: "0808 8020 133", desc: "Free, 24h, 7 days a week", href: "https://www.gamcare.org.uk" },
                { name: "Gambling Therapy", url: "gamblingtherapy.org", desc: "Online forums & live chat therapy", href: "https://www.gamblingtherapy.org" },
                { name: "GAMSTOP", url: "gamstop.co.uk", desc: "Self-exclude from all UKGC sites", href: "https://www.gamstop.co.uk" },
              ].map((org, i) => (
                <a
                  key={i}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 group"
                >
                  <div>
                    <p className="font-heading font-bold text-xs uppercase tracking-wide text-foreground mb-0.5 group-hover:opacity-80 transition-opacity">
                      {org.name}
                    </p>
                    <p className="font-mono text-[9px] mb-0.5" style={{ color: "hsl(var(--gold) / 0.6)" }}>{org.url}</p>
                    <p className="font-sans text-[11px]" style={{ color: "hsl(var(--off-white) / 0.5)" }}>{org.desc}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 flex-shrink-0 mt-1" style={{ color: "hsl(var(--gold) / 0.4)" }} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-6 pt-4 border-t flex items-start gap-3"
          style={{ borderColor: "hsl(var(--gold) / 0.15)" }}
        >
          <BarChart2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--gold) / 0.4)" }} aria-hidden="true" />
          <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--off-white) / 0.4)" }}>
            British Gold Betting Sites supports responsible gambling. All listed operators are regulated by the UK Gambling Commission and required to provide deposit limits, self-exclusion, and reality checks. If gambling is no longer fun, please seek help.
          </p>
        </div>
      </div>
    </section>
  )
}


/* ─── Main export ─────────────────────────────────────────────── */
export function InfoSections() {
  return (
    <div className="w-full">
      <OurPickBanner />
      <HowWeReview />
      <FAQSection />
      <SaferGambling />
    </div>
  )
}
