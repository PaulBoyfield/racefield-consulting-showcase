import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logo from "@/assets/racefield-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Paul" },
  { to: "/services", label: "Services" },
  { to: "/how-i-work", label: "How I Work" },
  { to: "/who-i-work-with", label: "Who I Work With" },
  { to: "/consultation", label: "Consultation Partners" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="Racefield Consulting home">
            <img src={logo.url} alt="Racefield Consulting" className="h-12 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.slice(1, -1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary" }}
                className="text-[13px] tracking-wide text-foreground/75 hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center text-[13px] tracking-wide bg-primary text-primary-foreground px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <button
            className="lg:hidden text-primary text-sm tracking-widest uppercase"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-serif text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl">Racefield Consulting</div>
            <p className="mt-4 text-sm/relaxed text-primary-foreground/80 max-w-sm">
              Political insight, stakeholder strategy and planning communications — personally delivered by Paul Boyfield.
            </p>
          </div>
          <div>
            <div className="eyebrow text-primary-foreground/70">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/90 hover:text-primary-foreground link-underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow text-primary-foreground/70">Get in touch</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              <li>Paul Boyfield</li>
              <li>paul@racefieldconsulting.co.uk</li>
              <li><a href="tel:+447917764148" className="link-underline">07917 764 148</a></li>
              <li>
                <Link to="/contact" className="link-underline">Arrange a conversation →</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/60">
            <div>© {new Date().getFullYear()} Racefield Consulting. All rights reserved.</div>
            <div>Direct access. Senior advice. Personally delivered.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="eyebrow"><span className="rule" />{eyebrow}</div>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}
