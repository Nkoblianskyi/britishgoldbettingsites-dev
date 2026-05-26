import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — British Gold Betting Sites",
  description:
    "Privacy Policy for britishgoldbettingsites.com. How we collect, use, store, and protect your personal data under UK GDPR and the Data Protection Act 2018.",
  keywords: "privacy policy, data protection, UK GDPR, British Gold Betting Sites privacy",
  openGraph: {
    title: "Privacy Policy — British Gold Betting Sites",
    description:
      "How britishgoldbettingsites.com handles your personal data under UK GDPR and the Data Protection Act 2018.",
    url: "https://britishgoldbettingsites.com/privacy-policy",
  },
  alternates: {
    canonical: "https://britishgoldbettingsites.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Privacy Policy"
        subtitle="Last updated: May 2026 — britishgoldbettingsites.com"
      >

        <ContentBlock title="Introduction">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            British Gold Betting Sites (britishgoldbettingsites.com) is committed to protecting the privacy of every
            visitor to this website. This Privacy Policy sets out in plain language what data we collect, why we collect
            it, how long we retain it, who may access it, and what rights you hold under UK GDPR and the Data Protection
            Act 2018. By using britishgoldbettingsites.com you acknowledge this policy. If you do not agree, please do
            not use the site.
          </p>
        </ContentBlock>

        <ContentBlock title="What We Collect" accent="green">
          <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            We collect the following categories of data automatically when you visit:
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "IP address and approximate city-level geographic location",
              "Browser type, version, and device operating system",
              "Pages visited, scroll depth, time on page, and navigation paths",
              "Referring website or search query that brought you to this site",
              "Cookie consent status and the timestamp of your preference",
              "Clicks on affiliate links leading to UKGC-licensed bookmaker partners",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3"
                style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--border))" }}
              >
                <div
                  className="w-1.5 h-1.5 flex-shrink-0 mt-1.5"
                  style={{ background: "hsl(var(--gold))" }}
                  aria-hidden="true"
                />
                <span className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs leading-relaxed mt-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            We do not collect names, email addresses, payment details, or any other directly identifying personal data unless you contact us voluntarily via email.
          </p>
        </ContentBlock>

        <ContentBlock title="How We Use Your Data">
          <div className="space-y-0 divide-y" style={{ borderColor: "hsl(var(--border))" }}>
            {[
              {
                title: "Site Performance & Content Improvement",
                desc: "Aggregated, anonymised analytics data helps us understand which editorial content delivers value and where user experience can be improved.",
              },
              {
                title: "Affiliate Attribution",
                desc: "Click data on bookmaker affiliate links is passed to our licensed operator partners solely to attribute referrals and calculate commission. This data is never used to build individual user profiles.",
              },
              {
                title: "Regulatory Compliance",
                desc: "We may process or disclose data where required by UK law, including lawful requests from the Information Commissioner's Office (ICO) or other regulatory authorities.",
              },
              {
                title: "Security & Fraud Prevention",
                desc: "IP data and device signals may be used to detect and block abusive traffic, bot activity, or fraudulent affiliate click patterns that harm our partners.",
              },
            ].map((item, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-1">{item.title}</h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Data Retention" accent="green">
          <div
            className="space-y-2"
          >
            {[
              { label: "Analytics data", value: "Maximum 26 months — then automatically deleted" },
              { label: "Cookie consent records", value: "13 months from date of choice" },
              { label: "Affiliate click data", value: "Up to 90 days for commission reconciliation" },
              { label: "Email correspondence", value: "Up to 3 years — then permanently deleted" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-6 p-3"
                style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--border))" }}
              >
                <span className="font-mono text-[10px] uppercase tracking-wide flex-shrink-0" style={{ color: "hsl(var(--gold) / 0.7)" }}>
                  {row.label}
                </span>
                <span className="font-sans text-xs text-right" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Your Rights Under UK GDPR">
          <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            As a data subject under UK GDPR, you hold the following rights regarding your personal data:
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { right: "Right of Access", desc: "Request a copy of all personal data we hold about you." },
              { right: "Right to Rectification", desc: "Ask us to correct inaccurate or incomplete personal data." },
              { right: "Right to Erasure", desc: "Request deletion where there is no lawful basis to retain your data." },
              { right: "Right to Restrict Processing", desc: "Ask us to pause processing under certain defined circumstances." },
              { right: "Right to Data Portability", desc: "Receive your personal data in a structured, machine-readable format." },
              { right: "Right to Object", desc: "Object to processing carried out on the basis of legitimate interests." },
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-3"
                style={{ background: "hsl(var(--green-mid))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="font-heading font-bold text-xs uppercase tracking-wide mb-0.5" style={{ color: "hsl(var(--gold))" }}>
                  {item.right}
                </div>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Cookies & Third-Party Processors" accent="green">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            This site uses cookies. For full details on the types of cookies we deploy and how to manage your preferences,
            please read our{" "}
            <a href="/cookie-policy" className="underline underline-offset-2" style={{ color: "hsl(var(--gold-light))" }}>
              Cookie Policy
            </a>. Anonymised analytics data may be processed by Google Analytics on our behalf under a data processing
            agreement. Affiliate tracking data is shared with UKGC-licensed bookmaker partners for commission attribution only.
            All third-party processors are contractually required to comply with UK GDPR.
          </p>
        </ContentBlock>

        <ContentBlock title="Contact & Complaints">
          <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            To exercise any of your rights or if you have a question about how we handle your personal data,
            contact our privacy team at{" "}
            <span className="font-semibold" style={{ color: "hsl(var(--gold-light))" }}>
              privacy@britishgoldbettingsites.com
            </span>. We aim to respond to all requests within 30 calendar days. If you are not satisfied with
            our response, you have the right to lodge a complaint with the UK supervisory authority at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "hsl(var(--gold-light))" }}
            >
              ico.org.uk
            </a>.
          </p>
        </ContentBlock>

      </PageLayout>
      <Footer />
    </div>
  )
}
