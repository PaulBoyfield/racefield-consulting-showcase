import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import portrait from "@/assets/paul-portrait-web.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Paul Boyfield — Racefield Consulting" },
      { name: "description", content: "Paul Boyfield is one of the UK's most experienced planning communications and political strategy advisers, with over 25 years' experience across residential, regeneration and infrastructure projects." },
      { property: "og:title", content: "About Paul Boyfield" },
      { property: "og:description", content: "Over 25 years advising on planning, development, regeneration and infrastructure." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: About,
});

const sectors = [
  { t: "Residential Development", d: "Strategic land promotion, local plan allocations, planning applications and large‑scale housing delivery." },
  { t: "Regeneration", d: "Town centre regeneration, mixed‑use development and complex urban projects." },
  { t: "Infrastructure", d: "Transport, utilities and major infrastructure schemes requiring political and stakeholder engagement." },
  { t: "Renewable Energy", d: "Solar, wind and low‑carbon projects operating within sensitive political and community environments." },
  { t: "Logistics & Commercial", d: "Distribution, employment and commercial schemes requiring careful stakeholder management." },
  { t: "Public Policy & Governance", d: "Combined authorities, devolution, regional growth initiatives and public sector projects." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Paul"
        title="Senior counsel from one of the UK's most experienced planning communications advisers."
      />

      {/* Biography */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img src={portrait} alt="Paul Boyfield" loading="lazy" width={1200} height={1600} className="h-full w-full object-cover" />
          </div>
          <div className="mt-6 text-sm text-muted-foreground">Paul Boyfield, Founder &amp; Principal</div>
        </div>
        <div className="lg:col-span-7 lg:pt-6">
          <div id="biography" className="eyebrow"><span className="rule" />Biography</div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">A career shaped by politics, policy and place.</h2>
          <div className="mt-8 prose-r space-y-5 text-[1.02rem]">
            <p>Paul Boyfield is one of the UK's most experienced planning communications and political strategy advisers. For more than 25 years he has advised organisations involved in planning, development, regeneration and infrastructure on how to navigate political environments, engage effectively with stakeholders and build support for complex projects.</p>
            <p>His experience spans major residential developments, strategic land promotion, logistics, commercial development, renewable energy and nationally significant infrastructure projects.</p>
            <p>Before entering consultancy, Paul worked as a researcher in the House of Commons, a speechwriter in the House of Lords and for the European Policy Forum think tank — providing an early grounding in politics, public policy and political communications.</p>
            <p>Today, Racefield Consulting allows Paul to work directly with a select number of clients, providing senior strategic advice personally on every assignment.</p>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div id="career" className="eyebrow"><span className="rule" />Career Journey</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">From founding Lexington North to Racefield today.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 prose-r space-y-5 text-[1.02rem]">
            <p>Paul founded Lexington North and built it into the largest specialist planning communications consultancy in Northern England. Under his leadership, the business advised some of the country's leading developers, land promoters and infrastructure providers, earning a reputation for strategic thinking, political understanding and high‑quality client service.</p>
            <p>The business grew successfully over many years before being sold to a major international communications group.</p>
            <p>Alongside his consultancy work, Paul has developed a reputation as one of the sector's leading practitioners in planning communications, stakeholder engagement and political strategy — helping shape many of the approaches now widely used across the industry.</p>
            <p>Today, Racefield represents a return to a more personal model of consultancy, allowing clients to work directly with Paul and benefit from his experience without the layers typically found within larger agencies.</p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div id="sectors" className="eyebrow"><span className="rule" />Sectors &amp; Experience</div>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] max-w-3xl">Advising across the full breadth of UK planning and development.</h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {sectors.map((s, i) => (
            <div key={s.t} className="bg-background p-8 lg:p-10">
              <div className="font-serif text-primary/60 text-lg">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors">
            Discuss your project →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
