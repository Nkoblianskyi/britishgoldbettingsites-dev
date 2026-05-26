"use client"

import Link from "next/link"
import { ShieldCheck, Scale, ExternalLink } from "lucide-react"

const REGULATORY_ORGS = [
  {
    src: "/gamble-aware.png",
    alt: "BeGambleAware",
    href: "https://www.begambleaware.org/",
    width: 130,
    height: 36,
  },
  {
    src: "/gamcare.png",
    alt: "GamCare",
    href: "https://www.gamcare.org.uk/",
    width: 110,
    height: 36,
  },
  {
    src: "/gordon.png",
    alt: "Gambling Therapy",
    href: "https://www.gamblingtherapy.org/",
    width: 100,
    height: 36,
  },
  {
    src: "/Gambling_Commission_logo.png",
    alt: "UK Gambling Commission",
    href: "https://www.gamblingcommission.gov.uk/",
    width: 120,
    height: 36,
  },
  {
    src: "/gamstop.svg",
    alt: "GamStop",
    href: "https://www.gamstop.co.uk/",
    width: 100,
    height: 36,
  },
]

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/responsible-gambling", label: "Responsible Gambling" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
]

export function Footer() {
  return (
    <footer
      className="w-full font-sans"
      style={{ background: "hsl(var(--green-deep))" }}
    >
      {/* Gold gradient top rule */}
      <div
        className="w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--gold-dim)), hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)), hsl(var(--gold-dim)), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto px-4">

        {/* ── Top row: brand left, nav centre-right ── */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 py-10 border-b"
          style={{ borderColor: "hsl(var(--gold) / 0.14)" }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="British Gold Betting Sites — Home"
          >
            <div
              className="w-10 h-10 flex items-center justify-center shrink-0"
              style={{ background: "hsl(var(--gold))" }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 10 L18 6 L26 10 L26 20 C26 25 18 30 18 30 C18 30 10 25 10 20 Z"
                  stroke="hsl(150 40% 6%)"
                  strokeWidth="1.5"
                  fill="hsl(150 40% 6%)"
                  fillOpacity="0.3"
                />
                <circle cx="18" cy="18" r="4" fill="hsl(150 40% 6%)" />
                <path
                  d="M14 18 L22 18 M18 14 L18 22"
                  stroke="hsl(45 72% 68%)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-none gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-extrabold text-lg tracking-tight text-foreground uppercase">
                  British
                </span>
                <span
                  className="font-heading font-extrabold text-lg tracking-tight uppercase"
                  style={{ color: "hsl(var(--gold))" }}
                >
                  Gold
                </span>
              </div>
              <span
                className="font-mono text-[9px] tracking-[0.22em] uppercase"
                style={{ color: "hsl(var(--gold) / 0.45)" }}
              >
                Betting Sites
              </span>
            </div>
          </Link>

          {/* Navigation — single horizontal row */}
          <nav
            className="flex flex-wrap items-center gap-x-1 gap-y-2"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <span key={href} className="flex items-center gap-x-1">
                <Link
                  href={href}
                  className="font-sans text-xs font-medium uppercase tracking-widest transition-colors px-3 py-2"
                  style={{ color: "hsl(var(--off-white) / 0.55)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--gold))")}
                  onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--off-white) / 0.55)")}
                >
                  {label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span
                    className="text-[10px] select-none"
                    style={{ color: "hsl(var(--gold) / 0.2)" }}
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* ── Regulatory logos row ── */}
        <div
          className="py-8 border-b"
          style={{ borderColor: "hsl(var(--gold) / 0.14)" }}
        >
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: "hsl(var(--gold) / 0.55)" }} aria-hidden="true" />
            <span
              className="font-mono text-[9px] uppercase tracking-[0.24em]"
              style={{ color: "hsl(var(--gold) / 0.5)" }}
            >
              Regulatory Bodies &amp; Safer Gambling Partners
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {REGULATORY_ORGS.map(({ href, src, alt, width, height }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${alt} — opens in new tab`}
                className="group transition-opacity hover:opacity-90 flex items-center justify-center"
                style={{
                  background: "#ffffff",
                  padding: "12px 20px",
                  width: width + 40,
                  height: 64,
                  border: "1px solid hsl(var(--gold) / 0.15)",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: width, maxHeight: 40 }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <div
          className="py-8 border-b"
          style={{ borderColor: "hsl(var(--gold) / 0.14)" }}
        >
          <div className="flex items-start gap-3">
            <Scale
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: "hsl(var(--gold) / 0.45)" }}
              aria-hidden="true"
            />
            <div className="space-y-2">
              <span
                className="block font-mono text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "hsl(var(--gold) / 0.5)" }}
              >
                Editorial Independence &amp; Legal Disclaimer
              </span>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "hsl(var(--off-white) / 0.4)" }}
              >
                <strong style={{ color: "hsl(var(--off-white) / 0.65)", fontWeight: 600 }}>
                  britishgoldbettingsites.com
                </strong>{" "}
                is a fully independent comparison and information resource. We are not a gambling operator and do not
                accept wagers. When you click through and register with an operator via our links, we may receive an
                affiliate commission — this arrangement does not affect our editorial scores or rankings in any way.
                All bookmakers listed on this site hold a current licence issued by the{" "}
                <a
                  href="https://www.gamblingcommission.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 underline underline-offset-2"
                  style={{ color: "hsl(var(--gold) / 0.7)" }}
                >
                  UK Gambling Commission
                  <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
                </a>
                . Gambling involves financial risk and can be addictive. Please gamble responsibly and within your
                means.{" "}
                <strong style={{ color: "hsl(var(--gold) / 0.8)" }}>You must be 18 years or older to gamble.</strong>{" "}
                If gambling is affecting you or someone you know, call the National Gambling Helpline on{" "}
                <a
                  href="tel:08088020133"
                  className="underline underline-offset-2"
                  style={{ color: "hsl(var(--gold) / 0.7)" }}
                >
                  0808 802 0133
                </a>{" "}
                (GamCare, free, 24/7).
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom copyright bar ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5"
        >
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "hsl(var(--gold) / 0.3)" }}
          >
            &copy; 2026 britishgoldbettingsites.com — All rights reserved
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "hsl(var(--gold) / 0.25)" }}
          >
            Independent &middot; Unbiased &middot; UKGC Compliant
          </span>
        </div>
      </div>
    </footer>
  )
}
