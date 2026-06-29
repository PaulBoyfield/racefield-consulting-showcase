import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import elecMapAsset from "@/assets/elec-map-for-website.jpg.asset.json";
import { assetUrl } from "@/lib/asset-url";
const elecMap = assetUrl(elecMapAsset);

export const Route = createFileRoute("/how-i-work")({
  head: () => ({
    meta: [
      { title: "How I Work — Racefield Consulting" },
      { name: "description", content: "Racefield is deliberately different from a traditional consultancy: senior advice delivered personally by Paul Boyfield on every assignment." },
      { property: "og:title", content: "How I Work — Racefield Consulting" },
      { property: "og:description", content: "Senior advice. Personally delivered." },
    ],
  }),
  component: HowIWork,
});

const ways = [
  "Political appraisals",
  "Strategic reviews",
  "Planning application support",
  "Stakeholder engagement programmes",
  "Communications strategy development",
  "Retained advisory support",
  "Project‑specific commissions",
];

function HowIWork() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow"><span className="rule" />How I Work</div>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">Senior advice. Personally delivered.</h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Racefield is deliberately different from a traditional consultancy. Clients work directly with Paul Boyfield throughout every stage of an assignment — no account teams, no junior consultants, no layers between adviser and client.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={elecMap} alt="" width={1600} height={2200} className="max-h-[60vh] w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="rule" />The approach</div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">Direct access to 25 years of experience.</h2>
        </div>
        <div className="lg:col-span-7 prose-r space-y-5 text-[1.02rem]">
          <p>This approach provides direct access to more than 25 years of experience, and ensures advice remains practical, responsive and focused on outcomes.</p>
          <p>Engagements are scoped to the brief — sometimes a single strategic review, sometimes a multi‑year retained relationship through to consent and delivery.</p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-6">
              <div className="eyebrow"><span className="rule" />Flexible support</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">Racefield can support projects in a variety of ways.</h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-foreground/75 leading-relaxed">
              The right structure depends on the nature of the project, the political environment and the in‑house resources already in place.
            </p>
          </div>
          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {ways.map((w, i) => (
              <li key={w} className="bg-background p-8">
                <div className="font-serif text-primary/60">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 font-serif text-2xl">{w}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="rule" />Selective by design</div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">A limited number of clients at any one time.</h2>
        </div>
        <div className="lg:col-span-7 prose-r space-y-5 text-[1.02rem]">
          <p>Racefield works with a limited number of clients at any one time. This ensures every project benefits from senior attention, direct involvement and a genuinely bespoke service.</p>
          <p>If your project would benefit from senior strategic counsel, the best place to start is a short, confidential conversation.</p>
          <div className="pt-4">
            <Link to="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors">
              Arrange a conversation →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
