import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Racefield Consulting" },
      { name: "description", content: "Arrange an initial conversation with Paul Boyfield to discuss strategic advice, planning communications or political risk for your project." },
      { property: "og:title", content: "Contact Racefield Consulting" },
      { property: "og:description", content: "Direct access. Senior advice. Personally delivered." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        intro="If you are promoting a development project, preparing a planning application, managing political risk or seeking strategic communications advice, Racefield would be pleased to discuss how it can help."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="eyebrow"><span className="rule" />Racefield Consulting</div>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.1]">Paul Boyfield</h2>
          <p className="mt-2 text-foreground/70">Founder &amp; Principal</p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2 font-serif text-2xl">
                <a href="mailto:paul@racefieldconsulting.co.uk" className="link-underline text-primary">paul@racefieldconsulting.co.uk</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Telephone</dt>
              <dd className="mt-2 font-serif text-2xl text-primary">+44 (0)20 0000 0000</dd>
            </div>
            <div>
              <dt className="eyebrow">LinkedIn</dt>
              <dd className="mt-2 font-serif text-2xl">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="link-underline text-primary">linkedin.com/in/paulboyfield</a>
              </dd>
            </div>
          </dl>

          <p className="mt-12 font-serif text-xl italic text-primary/80">
            Direct access. Senior advice. Personally delivered.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-card border border-border p-8 md:p-12">
            <div className="eyebrow"><span className="rule" />Arrange a conversation</div>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl">Tell Paul about your project.</h3>
            {sent ? (
              <div className="mt-10 p-6 border border-primary/30 bg-primary/5 text-primary">
                Thank you — your message has been received. Paul will be in touch shortly.
              </div>
            ) : (
              <form
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Name" name="name" required />
                <Field label="Organisation" name="org" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Telephone" name="phone" />
                <div className="md:col-span-2">
                  <label className="eyebrow block">Project / enquiry</label>
                  <textarea
                    required
                    rows={5}
                    className="mt-3 w-full bg-background border-b border-border focus:border-primary outline-none py-3 text-[0.95rem] resize-none"
                  />
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-6 pt-2">
                  <p className="text-xs text-muted-foreground max-w-md">
                    Your message is treated in confidence. Racefield will only use your details to respond to this enquiry.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Send enquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">{label}{required && <span className="text-primary/60"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-background border-b border-border focus:border-primary outline-none py-3 text-[0.95rem]"
      />
    </div>
  );
}
