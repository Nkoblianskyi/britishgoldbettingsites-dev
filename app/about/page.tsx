import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import { ShieldCheck, TrendingUp, Award, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — British Gold Betting Sites",
  description:
    "Learn who is behind britishgoldbettingsites.com — our editorial mission, transparent review methodology, and why we exist: to give UK bettors genuinely independent, unbiased bookmaker comparisons.",
  keywords: "about British Gold Betting Sites, UK bookmaker comparison editorial, independent betting review team",
  openGraph: {
    title: "About British Gold Betting Sites",
    description:
      "Who we are, how we review bookmakers, and why we never accept payment for rankings. britishgoldbettingsites.com — built on honesty.",
    url: "https://britishgoldbettingsites.com/about",
  },
  alternates: {
    canonical: "https://britishgoldbettingsites.com/about",
  },
}

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Independence",
    desc: "No operator pays for a position on our list. No bookmaker has review approval rights. Our scores are determined entirely by our methodology — and nothing else.",
  },
  {
    icon: Award,
    title: "Accuracy",
    desc: "We verify licence status, bonus terms, and payout windows before every publish. Facts are confirmed and re-checked every time rankings are updated.",
  },
  {
    icon: TrendingUp,
    title: "Transparency",
    desc: "We publish our full six-pillar scoring model so you can evaluate how we rank each bookmaker. There are no hidden criteria and no unpublished commercial arrangements.",
  },
  {
    icon: Users,
    title: "Responsibility",
    desc: "Safer gambling is not a footnote on this site — it is embedded throughout. We never list operators with poor responsible gambling records regardless of their commercial stature.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="About British Gold Betting Sites"
        subtitle="britishgoldbettingsites.com — Independent bookmaker comparison"
      >

        {/* Intro panel */}
        <div
          className="p-6 border-l-[3px]"
          style={{
            background: "hsl(var(--green-mid))",
            border: "1px solid hsl(var(--gold) / 0.2)",
            borderLeft: "3px solid hsl(var(--gold))",
          }}
        >
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--off-white) / 0.75)" }}>
            British Gold Betting Sites was founded by a team of UK sports betting specialists who grew weary of comparison
            platforms that obscured the facts that matter most — true bonus value, real payout speeds, and genuine responsible
            gambling standards — behind inflated headlines and undisclosed commercial deals. We built this platform to do the
            exact opposite: every bookmaker reviewed with a real account, real funds, and zero editorial compromise.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 flex gap-4"
              style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "hsl(var(--gold) / 0.1)", border: "1px solid hsl(var(--gold) / 0.22)" }}
                aria-hidden="true"
              >
                <Icon className="w-4 h-4" style={{ color: "hsl(var(--gold))" }} />
              </div>
              <div>
                <h3
                  className="font-heading font-bold text-sm uppercase tracking-wide mb-1.5"
                  style={{ color: "hsl(var(--gold))" }}
                >
                  {title}
                </h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ContentBlock title="Our Editorial Standards">
          <div
            className="divide-y"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            {[
              {
                title: "Minimum Four-Week Review Period",
                desc: "No bookmaker earns a place on this list without passing a structured four-week evaluation across all six scoring pillars. Sponsored reviews, fast-track placements, and paid editorial positions are not accepted under any circumstances.",
              },
              {
                title: "Real Accounts. Real Money. Real Results.",
                desc: "Every reviewer holds an active, funded account with each operator they assess. Withdrawal speeds, customer support quality, and in-play cash-out reliability are verified through genuine transactions — not sales material provided by the operators.",
              },
              {
                title: "Rolling Monthly Re-evaluation",
                desc: "A bookmaker that earns a high score today can lose it tomorrow. We re-test every listed operator on a monthly basis. Operators that revise terms unfavourably, delay payouts, or fail responsible gambling audits are demoted or removed without delay.",
              },
              {
                title: "Full Affiliate Transparency",
                desc: "We earn affiliate commission through links on this site when you register with a bookmaker. This is disclosed across every relevant page. Commission revenue funds our independent operation — it does not influence a single position in our rankings.",
              },
              {
                title: "UKGC Compliance Is Non-Negotiable",
                desc: "An active, unrestricted UK Gambling Commission licence is a baseline requirement for any operator we consider reviewing. Any bookmaker carrying upheld UKGC consumer complaints is excluded from our rankings regardless of its scoring performance.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="w-[2px] flex-shrink-0 self-stretch"
                  style={{ background: "hsl(var(--gold) / 0.4)" }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-1">{item.title}</h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Review Team" accent="green">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Our review team brings together sports betting specialists with over 35 years of combined experience covering
            UK and European gambling markets. Each reviewer must maintain an active funded account with every operator they
            assess and submit documented evidence of their testing before any score is finalised. Reviewers are required to
            disclose any personal or commercial relationship with an operator under review. No member of our team holds a
            financial stake in any bookmaker featured on this site.
          </p>
        </ContentBlock>

        {/* Disclaimer */}
        <div
          className="px-5 py-4 border-l-[2px]"
          style={{
            background: "hsl(var(--green-mid))",
            border: "1px solid hsl(var(--border))",
            borderLeft: "2px solid hsl(var(--gold) / 0.35)",
          }}
        >
          <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            <strong className="font-semibold text-foreground">Disclaimer:</strong>{" "}
            britishgoldbettingsites.com is an informational comparison website. We are not a bookmaker and do not accept bets.
            All featured operators hold a current UKGC licence. Affiliate links may be used to fund our independent editorial
            operation. Gambling involves financial risk. Please gamble responsibly. 18+ only.
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
