import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";
import { Car, Zap, Shirt, Home, Shield, Boxes } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SmartImg } from "@/components/site/SmartImg";
import awardBia from "@/assets/award-bia.jpg.asset.json";
import awardAia from "@/assets/award-aia.jpg.asset.json";
import { customers } from "@/lib/customers";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "Industries Served — Automotive, Electrical, Defense & More | Venus" },
      {
        name: "description",
        content:
          "Venus Group serves automotive, electrical, textile, household, defense and other industrial segments with precision moulds, dies and components.",
      },
      { property: "og:title", content: "Industries We Serve — Venus Group" },
      {
        property: "og:description",
        content: "Trusted by leading OEMs across automotive, electrical and defense sectors.",
      },
    ],
  }),
  component: IndustriesPage,
});

const sectors = [
  {
    icon: Car,
    title: "Automotive",
    desc: "Precision moulds, HPDC components and stamped parts for global automotive OEMs and tier-1 suppliers.",
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "Lamination components, terminal parts and engineered tooling for electrical equipment manufacturers.",
  },
  {
    icon: Shirt,
    title: "Textile",
    desc: "Custom dies and components for textile machinery and process equipment.",
  },
  {
    icon: Home,
    title: "Household",
    desc: "Plastic and metal components for household appliances and consumer durable products.",
  },
  {
    icon: Shield,
    title: "Defense",
    desc: "Precision-engineered components meeting stringent defense quality standards.",
  },
  {
    icon: Boxes,
    title: "Other Segments",
    desc: "General engineering, industrial and export components produced to customer specifications.",
  },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="TRUSTED ACROSS SECTORS THAT DEMAND PRECISION"
        subtitle="From automotive to defense — Venus delivers engineered tools and components to industries where quality is non-negotiable."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={(i % 3) * 80}
              className="group bg-background p-7 md:p-8 transition-colors hover:bg-card card-lift"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="CUSTOMERS"
            title="TRUSTED BY LEADING MANUFACTURERS"
            subtitle="A select list of esteemed brands we have served as a precision engineering partner."
            align="center"
          />
          <ul
            className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5"
            aria-label="Customers"
          >
            {customers.map((c, i) => (
              <Reveal as="li" key={c.name} delay={(i % 5) * 40}>
                <div
                  className="flex h-24 items-center justify-center rounded-sm border bg-background px-4 py-3 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-28"
                  title={c.name}
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      width={c.width}
                      height={c.height}
                      loading="lazy"
                      decoding="async"
                      className="h-auto max-h-14 w-auto max-w-[85%] object-contain sm:max-h-16"
                    />
                  ) : (
                    <span className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {c.name}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Brand names belong to their respective owners.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="AWARDS & RECOGNITION"
          title="RECOGNIZED FOR OUR CONTRIBUTION TO INDIAN MANUFACTURING"
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal
            delay={0}
            className="group flex flex-col rounded-sm border border-border bg-card p-8 text-center card-lift"
          >
            <div className="font-display text-base font-bold uppercase tracking-wide text-primary">
              Award
            </div>
            <h3 className="mt-3 font-display text-xl font-bold uppercase text-foreground">
              Best Upcoming Industry
            </h3>
            <div className="mt-auto flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm p-2 pt-8">
              <SmartImg
                src={awardBia.url}
                width={1200}
                height={900}
                alt="Best Upcoming Industry award presented to Venus Group"
                className="h-full w-full object-contain transition-transform duration-200 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="group flex flex-col rounded-sm border border-border bg-card p-8 text-center card-lift"
          >
            <div className="font-display text-base font-bold uppercase tracking-wide text-primary">
              Award
            </div>
            <h3 className="mt-3 font-display text-xl font-bold uppercase text-foreground">
              All India Achievers Foundation
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Indian Achievers Award for Industrial Development presented to Mr. M. Sadanand Nayak.
            </p>
            <div className="mt-auto flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm p-2 pt-8">
              <SmartImg
                src={awardAia.url}
                width={1200}
                height={783}
                alt="Mr. M. Sadanand Nayak receiving the Indian Achievers Award"
                className="h-full w-full object-contain transition-transform duration-200 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
