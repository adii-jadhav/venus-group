import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";
import { Car, Zap, Shirt, Home, Shield, Boxes } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Automotive, Electrical, Defense & More | Venus" },
      {
        name: "description",
        content:
          "Venus Group serves automotive, electrical, textile, household, defense and other industrial segments with precision moulds, dies and components.",
      },
      { property: "og:title", content: "Industries We Serve — Venus Group" },
      { property: "og:description", content: "Trusted by leading OEMs across automotive, electrical and defense sectors." },
    ],
  }),
  component: IndustriesPage,
});

const sectors = [
  { icon: Car, title: "Automotive", desc: "Precision moulds, HPDC components and stamped parts for global automotive OEMs and tier-1 suppliers." },
  { icon: Zap, title: "Electrical", desc: "Lamination components, terminal parts and engineered tooling for electrical equipment manufacturers." },
  { icon: Shirt, title: "Textile", desc: "Custom dies and components for textile machinery and process equipment." },
  { icon: Home, title: "Household", desc: "Plastic and metal components for household appliances and consumer durable products." },
  { icon: Shield, title: "Defense", desc: "Precision-engineered components meeting stringent defense quality standards." },
  { icon: Boxes, title: "Other Segments", desc: "General engineering, industrial and export components produced to customer specifications." },
];

const customers = [
  "TATA", "Mercedes-Benz", "Mahindra", "Bajaj", "Brakes India", "Marquardt", "Modine", "Europa",
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Trusted across sectors that demand precision"
        subtitle="From automotive to defense — Venus delivers engineered tools and components to industries where quality is non-negotiable."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <article key={s.title} className="group bg-background p-7 md:p-8 transition-colors hover:bg-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="Customers"
            title="Trusted by leading manufacturers"
            subtitle="A select list of esteemed brands we have served as a precision engineering partner."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
            {customers.map((c) => (
              <div
                key={c}
                className="flex aspect-[16/7] items-center justify-center bg-background p-4 text-center"
              >
                <span className="font-display text-base font-bold uppercase tracking-[0.14em] text-foreground/80">
                  {c}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Brand names belong to their respective owners.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Awards & Recognition"
          title="Recognized for our contribution to Indian manufacturing"
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-border bg-card p-8 text-center">
            <div className="font-display text-base font-bold uppercase tracking-wide text-primary">Award</div>
            <h3 className="mt-3 font-display text-xl font-bold uppercase text-foreground">Best Upcoming Industry</h3>
          </div>
          <div className="rounded-sm border border-border bg-card p-8 text-center">
            <div className="font-display text-base font-bold uppercase tracking-wide text-primary">Award</div>
            <h3 className="mt-3 font-display text-xl font-bold uppercase text-foreground">
              All India Achievers Foundation
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Indian Achievers Award for Industrial Development presented to Mr. M. Sadanand Nayak.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
