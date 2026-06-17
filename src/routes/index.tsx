import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroAsset from "@/assets/manchester-skyline.jpg.asset.json";
import sectors from "@/assets/sectors-landscape.jpg";
import shieldAsset from "@/assets/racefield-shield.png.asset.json";
const hero = heroAsset.url;
const shield = shieldAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Racefield Consulting — Political insight. Strategic communications." },
      { name: "description", content: "Senior planning communications and political strategy advice for developers, landowners and infrastructure providers, led personally by Paul Boyfield." },
      { property: "og:title", content: "Racefield Consulting" },
      { property: "og:description", content: "Political insight. Strategic communications. Personally delivered." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const reasons = [
  { t: "Direct access to senior expertise", d: "Every client works directly with Paul Boyfield. No account managers, no junior consultants, no layers." },
  { t: "More than 25 years' experience", d: "Advising on major residential, regeneration, infrastructure, renewable energy and commercial projects across the UK." },
  { t: "Political understanding", d: "From local government and planning committees to Westminster and regional government — how public decision‑making really works." },
  { t: "Strategic focus", d: "Political analysis, stakeholder strategy, communications leadership and reputation management — where judgement adds the greatest value." },
];

const services = [
  { t: "Strategic Advisory", d: "Senior counsel to navigate political complexity, manage risk and position projects effectively." },
  { t: "Public Affairs & Stakeholder Relations", d: "Identify the people who matter, build relationships, engage constructively at every level." },
  { t: "Communications Strategy", d: "Align political, stakeholder and public engagement around a single coherent narrative." },
  { t: "Media & Campaigns", d: "Manage media engagement, design effective campaigns, respond to emerging issues with confidence." },
  { t: "Research & Intelligence", d: "Political and stakeholder audits, opinion research and risk assessment to underpin strong decisions." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-32 md:pt-40 md:pb-48">
          <img src={shield} alt="Racefield Consulting shield emblem" width={140} height={140} className="h-28 w-28 md:h-36 md:w-36 object-contain -ml-2 mb-2" />
          <div className="eyebrow"><span className="rule" />Racefield Consulting</div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] max-w-4xl">
            Political insight.<br />
            Strategic communications.<br />
            <em className="not-italic text-primary/70">Personally delivered.</em>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-foreground/80 leading-relaxed">
            The advisory practice of Paul Boyfield — one of the UK's most experienced planning communications and political strategy specialists.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors">
              Arrange a conversation
            </Link>
            <Link to="/services" className="inline-flex items-center border border-primary/40 text-primary px-7 py-3.5 text-sm tracking-wide hover:bg-primary/5 transition-colors">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow"><span className="rule" />A different consultancy</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">Helping projects succeed in a political world.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 prose-r space-y-5 text-[1.02rem]">
            <p>For more than 25 years, Paul has helped developers, landowners, infrastructure providers and regeneration partners navigate complex political environments, build stakeholder support and position projects in ways decision‑makers can support.</p>
            <p>Successful projects are rarely determined by planning policy alone. Political priorities, local relationships, stakeholder perceptions and public narratives all play a critical role in shaping outcomes.</p>
            <p>Unlike a traditional consultancy, every project is led and delivered personally by Paul — giving clients direct access to senior strategic advice from start to finish.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <div className="eyebrow"><span className="rule" />Why Racefield</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02]">A practice built on judgement, not headcount.</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 text-foreground/75 leading-relaxed">
            Racefield works with a limited number of clients at any one time, ensuring every project receives senior‑level attention and direct involvement throughout.
          </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {reasons.map((r, i) => (
            <div key={r.t} className="bg-background p-8 lg:p-10">
              <div className="font-serif text-primary/60 text-lg">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-serif text-2xl leading-snug">{r.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow text-primary-foreground/70"><span className="rule bg-primary-foreground/70" />Services</div>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl text-primary-foreground leading-[1.05]">Senior advice across five disciplines.</h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 text-primary-foreground/75">
              Each engagement is shaped to the project. Most clients work with Paul across more than one discipline.
            </div>
          </div>
          <ul className="mt-16 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {services.map((s, i) => (
              <li key={s.t}>
                <Link to="/services" className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 items-baseline transition-colors hover:bg-primary-foreground/5 -mx-4 px-4">
                  <div className="md:col-span-1 text-primary-foreground/50 text-sm">{String(i + 1).padStart(2, "0")}</div>
                  <div className="md:col-span-5 font-serif text-3xl md:text-4xl text-primary-foreground">{s.t}</div>
                  <div className="md:col-span-5 text-primary-foreground/75 leading-relaxed">{s.d}</div>
                  <div className="md:col-span-1 md:text-right text-primary-foreground/60 group-hover:text-primary-foreground transition-colors">→</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTORS */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img src={sectors} alt="English countryside meeting the urban edge" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="bg-background px-6 lg:px-16 py-20 lg:py-28">
            <div className="eyebrow"><span className="rule" />Sectors</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">From strategic land to nationally significant infrastructure.</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-lg">
              Paul advises across the full spectrum of UK planning and development — residential, regeneration, infrastructure, renewable energy, logistics and public sector projects.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center text-primary link-underline text-sm tracking-wide">
              Read about Paul's experience →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="eyebrow"><span className="rule" />Let's talk</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02]">A short conversation is often the most useful first step.</h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors">
              Arrange a conversation →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
