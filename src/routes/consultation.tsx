import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Consultation & Delivery Partners — Racefield Consulting" },
      { name: "description", content: "Racefield designs and oversees consultation strategy, working with a trusted network of specialist partners for delivery across public, digital, creative and campaign communications." },
      { property: "og:title", content: "Consultation & Delivery Partners" },
      { property: "og:description", content: "Strategic oversight, specialist delivery." },
    ],
  }),
  component: Consultation,
});

const leadership = [
  "Design consultation strategies",
  "Define objectives and outcomes",
  "Shape messaging and materials",
  "Ensure alignment with wider planning and political objectives",
  "Oversee delivery",
  "Review outputs and reporting",
  "Ensure programmes meet the required standard",
];

const delivery = [
  {
    t: "Public Consultation",
    items: ["Public exhibitions", "Consultation events", "Stakeholder workshops", "Community engagement", "Consultation reporting", "Statements of Community Involvement"],
  },
  {
    t: "Digital Engagement",
    items: ["Consultation websites", "Online surveys", "Feedback platforms", "Social media engagement"],
  },
  {
    t: "Creative Communications",
    items: ["Exhibition materials", "Brochures", "Branding", "Visualisations", "Animation and video"],
  },
  {
    t: "Campaign Support",
    items: ["Public advocacy campaigns", "Supporter engagement", "Grassroots mobilisation", "Community awareness programmes"],
  },
];

function Consultation() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Consultation & Delivery Partners"
        title="Strategic oversight, specialist delivery."
        intro="Public consultation remains an important part of many development and infrastructure projects. Over more than two decades, Paul has designed, managed and advised on consultation programmes across a wide range of sectors."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="rule" />Consultation strategy &amp; oversight</div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">A senior strategist, supported by a trusted network.</h2>
        </div>
        <div className="lg:col-span-7 prose-r space-y-5 text-[1.02rem]">
          <p>Many of the approaches and techniques now widely used within the planning communications sector were first developed or refined through programmes Paul helped lead.</p>
          <p>Racefield does not operate an in‑house consultation delivery team. Instead, Paul works with a trusted network of specialist partners — all led by experienced professionals with whom he has worked successfully over many years.</p>
          <p>This gives clients the benefit of senior strategic oversight throughout the process, while drawing on specialist delivery expertise where required.</p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <div className="eyebrow"><span className="rule" />Strategic leadership</div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl">Paul's role across every consultation programme.</h2>
          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {leadership.map((l, i) => (
              <li key={l} className="bg-card p-8">
                <div className="font-serif text-primary/60">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 font-serif text-xl leading-snug">{l}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="eyebrow"><span className="rule" />Specialist delivery services</div>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">Available through trusted delivery partners.</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border">
          {delivery.map((d) => (
            <div key={d.t} className="bg-background p-10">
              <h3 className="font-serif text-2xl">{d.t}</h3>
              <ul className="mt-5 space-y-2.5">
                {d.items.map((it) => (
                  <li key={it} className="text-[0.95rem] text-foreground/80 flex gap-3">
                    <span className="text-primary/60">—</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24 grid lg:grid-cols-12 gap-8 items-center">
          <h2 className="lg:col-span-8 font-serif text-3xl md:text-5xl leading-[1.05] text-primary-foreground">
            Planning a consultation programme? Let's discuss how Racefield can help.
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
