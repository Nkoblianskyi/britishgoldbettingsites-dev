import Link from "next/link"

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "hsl(var(--green-deep))",
        borderBottom: "1px solid hsl(var(--gold) / 0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Gold accent top bar */}
      <div
        className="w-full h-[2px]"
        style={{ background: "linear-gradient(90deg, hsl(var(--gold-dim)), hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)))" }}
      />

      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-[1100px] mx-auto">

          {/* Logo + Wordmark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="British Gold Betting Sites — Home">
            <div className="relative flex-shrink-0 w-9 h-9" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" fill="hsl(var(--gold))" />
                <path d="M10 10 L18 6 L26 10 L26 20 C26 25 18 30 18 30 C18 30 10 25 10 20 Z" fill="hsl(var(--green-deep))" opacity="0.3" />
                <path d="M10 10 L18 6 L26 10 L26 20 C26 25 18 30 18 30 C18 30 10 25 10 20 Z" stroke="hsl(var(--green-deep))" strokeWidth="1.5" fill="none" />
                <circle cx="18" cy="18" r="4" fill="hsl(var(--green-deep))" />
                <path d="M14 18 L22 18 M18 14 L18 22" stroke="hsl(var(--gold-light))" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1 whitespace-nowrap">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-foreground uppercase">
                  British
                </span>
                <span
                  className="font-heading font-extrabold text-base sm:text-lg tracking-tight uppercase"
                  style={{ color: "hsl(var(--gold))" }}
                >
                  Gold
                </span>
              </div>
              <span className="font-sans text-[9px] font-medium tracking-[0.2em] uppercase" style={{ color: "hsl(var(--gold) / 0.55)" }}>
                Betting Sites
              </span>
            </div>
          </Link>

          {/* Right badges */}
          <div className="flex items-center gap-2.5">
            <div
              className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 border uppercase tracking-widest"
              style={{
                background: "hsl(var(--gold) / 0.08)",
                borderColor: "hsl(var(--gold) / 0.22)",
                color: "hsl(var(--gold-light))",
              }}
            >
              <span className="w-1.5 h-1.5 bg-green-400 inline-block flex-shrink-0" aria-hidden="true" />
              UKGC Licensed Only
            </div>
            <span
              className="text-[10px] font-mono font-bold px-2.5 py-1.5 border uppercase tracking-widest"
              style={{
                borderColor: "hsl(var(--gold) / 0.35)",
                color: "hsl(var(--gold))",
                background: "hsl(var(--gold) / 0.08)",
              }}
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
