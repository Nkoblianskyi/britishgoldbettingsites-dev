import type React from "react"
import type { Metadata } from "next"
import { Inter, Barlow_Condensed, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

const _barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
})

const _jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "British Gold Betting Sites — Top UK Bookmakers 2025",
  description:
    "British Gold Betting Sites ranks the UK's finest UKGC-licensed bookmakers. Independent expert reviews covering odds quality, welcome bonuses, payout speed, and responsible gambling tools. Updated monthly at britishgoldbettingsites.com.",
  keywords:
    "British gold betting sites, best betting sites UK, UK bookmakers 2025, UKGC licensed bookmakers, sports betting UK, free bets, betting offers, top bookmakers",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: "British Gold Betting Sites Editorial Team" }],
  openGraph: {
    title: "British Gold Betting Sites — Top UK Bookmakers 2025",
    description:
      "Independent expert rankings of the best UK betting sites. UKGC-licensed only. Reviewed for odds, bonuses, safety, and payouts. Updated monthly.",
    url: "https://britishgoldbettingsites.com",
    siteName: "British Gold Betting Sites",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "British Gold Betting Sites — Top UK Bookmakers 2025",
    description:
      "The UK's most trusted comparison of UKGC-licensed bookmakers. Expert-reviewed, unbiased, updated monthly.",
  },
  alternates: {
    canonical: "https://britishgoldbettingsites.com",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#0a1f10",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${_inter.variable} ${_barlow.variable} ${_jetbrains.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
