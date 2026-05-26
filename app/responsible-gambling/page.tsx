import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import { Phone, ExternalLink, CheckCircle2, XCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible Gambling — British Gold Betting Sites",
  description:
    "Safer gambling guidance, problem gambling warning signs, UK self-exclusion tools, and free support services. British Gold Betting Sites — responsible by default.",
  keywords: "responsible gambling UK, GAMSTOP self exclusion, GamCare helpline, problem gambling help, safer betting",
  openGraph: {
    title: "Responsible Gambling — British Gold Betting Sites",
    description:
      "Free UK support services, safer betting principles, GAMSTOP self-exclusion guide, and warning signs to watch for.",
    url: "https://britishgoldbettingsites.com/responsible-gambling",
  },
  alternates: {
    canonical: "https://britishgoldbettingsites.com/responsible-gambling",
  },
}

const SUPPORT_ORGS = [
  {
    name: "GambleAware",
    url: "begambleaware.org",
    desc: "Free confidential support, self-help tools, and specialist treatment referrals across the UK",
    href: "https://www.begambleaware.org",
  },
  {
    name: "GamCare National Helpline",
    url: "0808 8020 133",
    desc: "Free, available 24 hours a day, 7 days a week — trained advisers ready to help",
    href: "https://www.gamcare.org.uk",
  },
  {
    name: "GAMSTOP Self-Exclusion",
    url: "gamstop.co.uk",
    desc: "Single registration instantly blocks your access to all UKGC-licensed betting and casino sites",
    href: "https://www.gamstop.co.uk",
  },
  {
    name: "Gambling Therapy",
    url: "gamblingtherapy.org",
    desc: "Free international online support, peer-to-peer forums, and live chat counselling sessions",
    href: "https://www.gamblingtherapy.org",
  },
]

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Responsible Gambling"
        subtitle="Bet for enjoyment — always stay in control"
        badge={{ text: "18+ Only", danger: true }}
      >

        {/* Critical warning */}
        <div
          className="px-5 py-5"
          style={{
            background: "hsl(0 72% 50% / 0.08)",
            border: "1px solid hsl(0 72% 50% / 0.35)",
            borderLeft: "3px solid hsl(0 72% 50%)",
          }}
        >
          <p className="font-sans text-sm text-foreground leading-relaxed">
            <strong className="font-bold" style={{ color: "hsl(0 72% 60%)" }}>Important: </strong>
            Sports betting carries significant financial risk and can cause addiction and harm. You should only ever
            wager money you can genuinely afford to lose. If gambling is affecting your wellbeing, seek free and
            confidential help immediately at{" "}
            <a
              href="https://www.begambleaware.org"
              className="underline underline-offset-2 font-semibold"
              style={{ color: "hsl(0 72% 60%)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              BeGambleAware.org
            </a>{" "}
            or call the National Gambling Helpline on{" "}
            <strong className="text-foreground">0808 8020 133</strong> — free, 24 hours, 7 days.
          </p>
          <p className="font-heading font-bold text-xs mt-3 uppercase tracking-widest" style={{ color: "hsl(0 72% 60%)" }}>
            Persons under 18 must not gamble
          </p>
        </div>

        <ContentBlock title="What Does Responsible Gambling Mean?">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Responsible gambling means treating betting as paid entertainment — comparable to a cinema ticket or a
            restaurant meal — with a fixed budget decided before you start. You accept that losses are a normal
            part of the experience, you stop when your limit is reached, and you never allow gambling to interfere
            with your finances, work, relationships, or mental health. Every UKGC-licensed bookmaker we list is
            legally required to provide the tools that help you stay in control.
          </p>
        </ContentBlock>

        {/* Four principles — numbered horizontal layout */}
        <ContentBlock title="Four Core Principles" accent="green">
          <div className="divide-y" style={{ borderColor: "hsl(var(--border))" }}>
            {[
              {
                num: "01",
                title: "Only Bet Money You Can Afford to Lose",
                desc: "Your gambling budget must come exclusively from disposable leisure income — money that is not allocated to rent, bills, food, savings, or family needs. If losing the bet would cause you genuine financial stress, it is not money you should be betting with.",
              },
              {
                num: "02",
                title: "Set Your Limits Before You Deposit",
                desc: "Every UKGC-licensed operator must provide deposit limits, loss limits, session time limits, and wager limits. Configure these before you place your first bet — not after you have already exceeded a comfortable amount. UKGC rules require a 24-hour cooling-off period before any limit increase takes effect.",
              },
              {
                num: "03",
                title: "Never Chase a Loss",
                desc: "The impulse to place a larger bet to recover a previous loss is one of the most direct paths to problem gambling. Every loss is simply the cost of the entertainment you chose to buy. Accept it, stop, and do not place an unplanned bet in reaction to it.",
              },
              {
                num: "04",
                title: "Keep Gambling in Its Proper Place",
                desc: "Betting should occupy a defined, small portion of your leisure time and budget. If you find yourself rearranging daily activities to accommodate gambling, thinking about it during unrelated moments, or feeling anxious without access to a betting app — those are clear signals to seek support.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                <div
                  className="font-heading font-extrabold text-2xl leading-none flex-shrink-0 pt-0.5"
                  style={{ color: "hsl(var(--gold))", minWidth: "3rem" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-1.5">{item.title}</h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        {/* Habits vs Warning signs — side by side */}
        <div className="grid md:grid-cols-2 gap-3">
          <ContentBlock title="Healthy Habits" accent="green">
            <ul className="space-y-2.5" role="list">
              {[
                "Set a firm monthly betting budget and treat it as already spent",
                "Activate deposit and time limits on every account before first use",
                "Maintain a wide range of other hobbies and social interests",
                "Schedule regular periods completely away from all betting platforms",
                "Register with GAMSTOP if you ever need a longer structured break",
                "Tell a trusted person about your betting activity to stay accountable",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(150 55% 45%)" }} aria-hidden="true" />
                  <span className="font-sans text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</span>
                </li>
              ))}
            </ul>
          </ContentBlock>

          <ContentBlock title="Warning Signs" accent="red">
            <ul className="space-y-2.5" role="list">
              {[
                "Spending more than you planned or have budgeted for",
                "Hiding bets, accounts, or losses from people close to you",
                "Using credit, loans, or borrowed money to fund gambling",
                "Neglecting work, study, family, or personal responsibilities",
                "Feeling restless, irritable, or low when unable to place a bet",
                "Telling yourself you have a system or method that guarantees wins",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <XCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 52%)" }} aria-hidden="true" />
                  <span className="font-sans text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</span>
                </li>
              ))}
            </ul>
          </ContentBlock>
        </div>

        {/* Support services */}
        <ContentBlock title="Free UK Support Services">
          <div className="grid sm:grid-cols-2 gap-3">
            {SUPPORT_ORGS.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group transition-opacity hover:opacity-80"
              >
                <div
                  className="p-4 h-full flex flex-col gap-2"
                  style={{
                    background: "hsl(var(--green-mid))",
                    border: "1px solid hsl(var(--gold) / 0.2)",
                    borderLeft: "2px solid hsl(var(--gold) / 0.5)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">
                      {org.name}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "hsl(var(--gold) / 0.4)" }} aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--gold) / 0.5)" }} aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "hsl(var(--gold) / 0.65)" }}>
                      {org.url}
                    </span>
                  </div>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {org.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </ContentBlock>

        {/* GAMSTOP spotlight */}
        <div
          className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{
            background: "hsl(var(--green-mid))",
            border: "1px solid hsl(var(--gold) / 0.2)",
          }}
        >
          <div className="flex-1">
            <p className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-1.5">
              How to Use GAMSTOP Self-Exclusion
            </p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Visit{" "}
              <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2" style={{ color: "hsl(var(--gold-light))" }}>
                gamstop.co.uk
              </a>, register with your personal details, and choose an exclusion period of six months, one year, or five
              years. Every UKGC-licensed bookmaker we list is required by regulation to honour your GAMSTOP registration
              immediately. You can also request exclusion directly through your account settings at any bookmaker.
            </p>
          </div>
          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest font-bold transition-opacity hover:opacity-80"
            style={{ background: "hsl(var(--gold))", color: "hsl(var(--green-deep))" }}
          >
            Register with GAMSTOP <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
