import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/who-i-work-with")({
  head: () => ({
    meta: [
      { title: "Who I Work With — Racefield Consulting" },
      { name: "description", content: "Racefield works with developers, landowners, infrastructure providers, planning consultancies, communications agencies and public sector bodies." },
      { property: "og:title", content: "Who I Work With" },
      { property: "og:description", content: "Senior counsel for organisations involved in planning, development and infrastructure." },
    ],
  }),
  component: WhoIWorkWith,
});

const clients = [
  { t: "Developers", d: "Supporting planning applications, land promotion and development strategies." },
  { t: "Landowners & Land Promoters", d: "Helping bring forward strategic opportunities and navigate complex planning environments." },
  { t: "Infrastructure Providers", d: "Providing political and stakeholder advice on major infrastructure and public sector projects." },
  { t: "Planning Consultancies", d: "Offering specialist political, stakeholder and communications expertise to complement planning teams." },
  { t: "Public Affairs & Communications Agencies", d: "Supporting agencies that require senior strategic advice, planning communications expertise or political insight." },
  { t: "Public & Third Sector Organisations", d: "Providing stakeholder engagement, communications and governance advice on projects with significant public interest." },
];

function WhoIWorkWith() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Who I Work With"
        title="Organisations shaping the built environment."
        intro="Racefield works with organisations involved in planning, development, regeneration and infrastructure — from individual landowners and developers to national infrastructure providers and the agencies that support them."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {clients.map((c, i) => (
            <article key={c.t} className="bg-background p-10 lg:p-12">
              <div className="font-serif text-primary/50">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-[1.05]">{c.t}</h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 grid lg:grid-cols-12 gap-8 items-center">
          <h2 className="lg:col-span-8 font-serif text-3xl md:text-5xl leading-[1.05] text-primary-foreground">
            If your project would benefit from senior counsel, Racefield would be pleased to hear from you.
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
