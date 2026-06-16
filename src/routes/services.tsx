import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Racefield Consulting" },
      { name: "description", content: "Strategic advisory, public affairs, communications, media campaigns, research and intelligence — senior counsel for planning and development projects." },
      { property: "og:title", content: "Services — Racefield Consulting" },
      { property: "og:description", content: "Five disciplines, one senior adviser." },
    ],
  }),
  component: Services,
});

const services = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    intro: "Major projects succeed when they are politically credible, strategically positioned and supported by a clear understanding of the decision‑making environment.",
    body: "Racefield provides senior strategic advice to help clients navigate political complexity, manage risk and position projects effectively.",
    items: ["Political strategy", "Political risk assessment", "Project positioning", "Strategic reviews", "Development strategy", "Political intelligence", "Governance advice", "Devolution & combined authority expertise"],
  },
  {
    id: "public-affairs",
    title: "Public Affairs & Stakeholder Relations",
    intro: "Successful engagement starts with understanding who matters, what influences them and how decisions are likely to be made.",
    body: "Racefield helps clients identify key stakeholders, build relationships and engage constructively with decision‑makers at every level.",
    items: ["Stakeholder mapping", "Stakeholder engagement strategies", "Local authority engagement", "Political engagement programmes", "MP & parliamentary engagement", "Government relations", "Community leadership engagement", "Business stakeholder engagement"],
  },
  {
    id: "communications",
    title: "Communications Strategy",
    intro: "Communications should support project objectives, not simply generate activity.",
    body: "Racefield develops communications strategies that align political, stakeholder and public engagement activity around a coherent narrative.",
    items: ["Communications planning", "Planning communications", "Messaging development", "Development promotion", "Planning application support", "Planning committee preparation", "Reputation management", "Narrative development"],
  },
  {
    id: "media",
    title: "Media & Campaigns",
    intro: "Media coverage can shape perceptions among stakeholders, decision‑makers and communities alike.",
    body: "Racefield helps clients manage media engagement, develop effective campaigns and respond to emerging issues with confidence.",
    items: ["Media strategy", "Media relations", "Press releases", "Media training", "Crisis communications", "Campaign strategy", "Advocacy campaigns", "Public affairs campaigns"],
  },
  {
    id: "research",
    title: "Research & Intelligence",
    intro: "Strong decisions are built on strong evidence.",
    body: "Racefield provides research and intelligence services that help clients understand political environments, stakeholder landscapes and emerging risks.",
    items: ["Political audits", "Political intelligence", "Stakeholder audits", "Demographic analysis", "Opinion research", "Sentiment analysis", "Risk assessments", "Strategic reviews"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Five disciplines. One senior adviser."
        intro="Racefield concentrates on the areas where experience and judgement add the greatest value — political analysis, stakeholder strategy, communications leadership and reputation management."
      />

      {/* Index */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-wrap gap-x-8 gap-y-3">
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
              <span className="text-primary/50 mr-2">{String(i + 1).padStart(2, "0")}</span>{s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="py-20 md:py-28 border-b border-border/60 last:border-b-0 grid lg:grid-cols-12 gap-12 scroll-mt-24">
            <div className="lg:col-span-5">
              <div className="font-serif text-primary/50 text-lg">{String(i + 1).padStart(2, "0")} / 05</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-[1.05]">{s.title}</h2>
              <p className="mt-6 text-foreground/80 italic font-serif text-xl leading-snug max-w-md">{s.intro}</p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[1.02rem] leading-relaxed text-foreground/85">{s.body}</p>
              <div className="mt-8 eyebrow"><span className="rule" />Services include</div>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-8">
                {s.items.map((it) => (
                  <li key={it} className="py-3 border-b border-border/60 text-[0.95rem] flex items-start gap-3">
                    <span className="text-primary/60 mt-1">—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 grid lg:grid-cols-12 gap-8 items-center">
          <h2 className="lg:col-span-8 font-serif text-3xl md:text-5xl leading-[1.05] text-primary-foreground">
            Not sure where to start? A short conversation usually is.
          </h2>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="inline-flex items-center bg-primary-foreground text-primary px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
