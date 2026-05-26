import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy — British Gold Betting Sites",
  description:
    "Cookie Policy for britishgoldbettingsites.com. Full details on which cookies we use, why we use them, and how you can manage or withdraw your consent at any time.",
  keywords: "cookie policy, cookies, tracking, analytics, British Gold Betting Sites",
  openGraph: {
    title: "Cookie Policy — British Gold Betting Sites",
    description:
      "Full details on cookies set by britishgoldbettingsites.com and how to control or withdraw your preferences.",
    url: "https://britishgoldbettingsites.com/cookie-policy",
  },
  alternates: {
    canonical: "https://britishgoldbettingsites.com/cookie-policy",
  },
}

const COOKIE_TYPES = [
  {
    title: "Essential Cookies",
    tag: "Always Active",
    isEssential: true,
    desc: "These cookies are strictly necessary for britishgoldbettingsites.com to function securely. They store your cookie consent decision so the preference panel does not reappear on every visit, and support core navigation and session security functions. Essential cookies cannot be disabled.",
    examples: ["cookieConsent_bgbs — stores your accept/essential-only/decline choice and consent timestamp"],
  },
  {
    title: "Analytics Cookies",
    tag: "Optional",
    isEssential: false,
    desc: "We use Google Analytics to understand how visitors arrive at, navigate through, and leave our site. All analytics data is aggregated and anonymised — no individual user is ever identified. This helps us improve the quality, structure, and relevance of our editorial content.",
    examples: ["_ga, _gid, _gat — Google Analytics session identifiers (all anonymised and IP-masked)"],
  },
  {
    title: "Affiliate & Referral Cookies",
    tag: "Optional",
    isEssential: false,
    desc: "These cookies record clicks on affiliate links to UKGC-licensed bookmakers to attribute registrations and calculate commission. They allow us to earn the revenue that funds our independent editorial operation. No personal data is sold to any third party at any time.",
    examples: ["First-party and partner click-tracking tokens set at the point of bookmaker link activation"],
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Cookie Policy"
        subtitle="Last updated: May 2026 — britishgoldbettingsites.com"
      >

        <ContentBlock title="What Are Cookies?">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Cookies are small text files stored on your device when you visit a website. They allow the site to
            recognise your browser on return visits, remember your preferences, and measure how you interact with
            content. Cookies do not contain personally identifying information such as your name, address, or payment
            details.
          </p>
        </ContentBlock>

        {/* Cookie types — each with unique card design */}
        <ContentBlock title="Cookies We Use" accent="green">
          <div className="space-y-4">
            {COOKIE_TYPES.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden"
                style={{ border: "1px solid hsl(var(--border))" }}
              >
                {/* Card header */}
                <div
                  className="px-5 py-3 flex items-center justify-between border-b"
                  style={{
                    background: item.isEssential ? "hsl(var(--gold) / 0.1)" : "hsl(var(--green-mid))",
                    borderColor: "hsl(var(--border))",
                  }}
                >
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">{item.title}</h3>
                  <span
                    className="font-mono text-[9px] px-2.5 py-1 uppercase tracking-widest"
                    style={
                      item.isEssential
                        ? { background: "hsl(var(--gold))", color: "hsl(var(--green-deep))" }
                        : {
                            background: "transparent",
                            color: "hsl(var(--muted-foreground))",
                            border: "1px solid hsl(var(--border))",
                          }
                    }
                  >
                    {item.tag}
                  </span>
                </div>
                {/* Card body */}
                <div className="px-5 py-4" style={{ background: "hsl(var(--card))" }}>
                  <p className="font-sans text-xs leading-relaxed mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.desc}
                  </p>
                  <div
                    className="px-3 py-2.5"
                    style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--border))" }}
                  >
                    {item.examples.map((ex, j) => (
                      <p key={j} className="font-mono text-[10px] leading-relaxed" style={{ color: "hsl(var(--gold) / 0.65)" }}>
                        {ex}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Managing Your Preferences">
          <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
            You have three ways to control which cookies britishgoldbettingsites.com places on your device:
          </p>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Cookie Preference Banner",
                desc: "When you first visit our site, a cookie preference panel appears at the bottom of the screen. You can select Accept All, Essential Only, or Decline All. Your choice is stored for 13 months. You may update it at any time by clearing your browser cookies.",
              },
              {
                num: "02",
                title: "Browser Settings",
                desc: "Chrome, Firefox, Safari, and Edge all provide cookie management in their privacy or settings menus. You can view, block, and delete individual cookies or all cookies from a specific site. Note that blocking all cookies may prevent some site functions from operating correctly.",
              },
              {
                num: "03",
                title: "Browser Privacy Extensions",
                desc: "Extensions such as uBlock Origin or Privacy Badger can block third-party tracking scripts before they set any cookies on your device. These operate independently of our consent banner.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 p-4"
                style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--border))" }}
              >
                <span
                  className="font-heading font-bold text-xl leading-none flex-shrink-0 pt-0.5"
                  style={{ color: "hsl(var(--gold))", minWidth: "2.5rem" }}
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-1">{item.title}</h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Third-Party Cookies" accent="green">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Some cookies on britishgoldbettingsites.com are set by third-party services — principally Google Analytics
            and UKGC-licensed bookmaker affiliate networks. These third parties operate under their own privacy policies,
            which we encourage you to review. We do not have direct control over third-party cookie behaviour; it is
            governed by those external policies.
          </p>
        </ContentBlock>

        <ContentBlock title="Policy Updates">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            We may revise this Cookie Policy when we add new functionality, when third-party tools change, or when
            UK regulatory requirements are updated. Any material revision will be indicated by an updated
            &ldquo;last updated&rdquo; date above. We recommend reviewing this page periodically.
          </p>
        </ContentBlock>

        {/* Contact note */}
        <div
          className="px-5 py-4"
          style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--gold) / 0.2)" }}
        >
          <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Questions about our use of cookies? Contact us at{" "}
            <span className="font-semibold" style={{ color: "hsl(var(--gold-light))" }}>
              cookies@britishgoldbettingsites.com
            </span>
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
