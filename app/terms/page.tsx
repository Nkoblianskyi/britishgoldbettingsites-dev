import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use — British Best Betting Sites",
  description:
    "Terms of Use for britishbestbettingsites.com. Your legal agreement when using our independent UK betting comparison service.",
  openGraph: {
    title: "Terms of Use — British Best Betting Sites",
    description: "The terms governing your use of britishbestbettingsites.com.",
    url: "https://britishbestbettingsites.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Terms of Use"
        subtitle="Last updated: May 2026 — britishbestbettingsites.com"
      >

        <ContentBlock title="Acceptance of Terms" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            By accessing and using britishbestbettingsites.com, you agree to be bound by these Terms of Use.
            If you do not agree to any part of these terms, you must not use this website. These terms apply
            to all visitors, users, and others who access the site.
          </p>
        </ContentBlock>

        <ContentBlock title="Nature of Service" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-3">
            britishbestbettingsites.com is an independent editorial comparison website. We provide information,
            reviews, and rankings of UKGC-licensed betting operators to help UK residents make informed decisions.
            We are not a bookmaker and we do not:
          </p>
          <ul className="space-y-2" role="list">
            {[
              "Accept bets or gambling deposits of any kind",
              "Hold a gambling operating licence",
              "Guarantee the accuracy of any odds or promotional offers",
              "Provide regulated financial or gambling advice",
            ].map((item, i) => (
              <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "hsl(var(--sky))" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </ContentBlock>

        <ContentBlock title="Affiliate Relationships & Commercial Disclosure" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This site earns revenue through affiliate partnerships with UKGC-licensed bookmakers. When you click
            a link to a bookmaker and register or deposit, we may receive a commission. This commercial relationship
            does not influence our editorial rankings or review scores in any way. Our methodology is transparent
            and published on-site. All affiliate links are clearly identifiable.
          </p>
        </ContentBlock>

        <ContentBlock title="Accuracy of Information" accent="grass">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We take considerable care to ensure all information published on britishbestbettingsites.com is accurate
            and current. However, the betting industry changes rapidly — offers expire, odds fluctuate, and operator
            terms evolve. We cannot guarantee that all information is up to date at the exact moment you read it.
            Always verify current terms directly with the bookmaker before depositing. We accept no liability for
            decisions made based on information on this site.
          </p>
        </ContentBlock>

        <ContentBlock title="Age Restriction — 18+ Only" accent="coral">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This website contains information about gambling services which are strictly for adults aged 18 and over.
            If you are under 18 years of age, you must leave this site immediately. We take child safety seriously
            and support all UKGC requirements regarding age verification with licensed operators.
          </p>
        </ContentBlock>

        <ContentBlock title="Intellectual Property" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            All content on britishbestbettingsites.com — including but not limited to text, reviews, rankings,
            scoring methodology, graphics, and layout — is the intellectual property of British Best Betting Sites
            unless otherwise stated. You may not reproduce, republish, distribute, or commercially exploit any
            content without prior written permission.
          </p>
        </ContentBlock>

        <ContentBlock title="Limitation of Liability" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            To the fullest extent permitted by law, britishbestbettingsites.com and its operators shall not be
            liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use
            of this site or reliance on any information herein. This includes, without limitation, any losses
            incurred from gambling decisions influenced by content on this site.
          </p>
        </ContentBlock>

        <ContentBlock title="External Links" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This site contains links to third-party bookmaker websites provided for informational purposes.
            We are not responsible for the content, accuracy, privacy practices, or terms of any external website.
            Visiting external links is done at your own risk and subject to the terms of those third-party sites.
          </p>
        </ContentBlock>

        <ContentBlock title="Changes to These Terms" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We reserve the right to update or modify these Terms of Use at any time without prior notice. Changes
            take effect immediately upon publication. Your continued use of the site after any changes constitutes
            your acceptance of the revised terms. We recommend reviewing this page periodically.
          </p>
        </ContentBlock>

        <ContentBlock title="Governing Law" accent="grass">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            These Terms of Use are governed by and construed in accordance with the laws of England and Wales.
            Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction
            of the courts of England and Wales.
          </p>
        </ContentBlock>

        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "hsl(var(--sky-pale))", border: "1px solid hsl(var(--sky) / 0.2)" }}
        >
          <p className="font-sans text-muted-foreground text-xs leading-relaxed">
            Questions about these terms? Contact us at{" "}
            <span className="font-semibold" style={{ color: "hsl(var(--sky))" }}>
              legal@britishbestbettingsites.com
            </span>
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
