import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";
import { MapPin, Phone, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { MediaAsset } from "@/components/site/MediaAsset";
import progressiveToolsPlantAsset from "@/assets/progressive_tools.png.asset.json";
import plasticInjectionPlantAsset from "@/assets/plastic_injection.png.asset.json";
import pressPartsPlantAsset from "@/assets/press_parts.png.asset.json";
import hpdcProductionPlantAsset from "@/assets/HPDC_Production.png.asset.json";
import venusAutoAsset from "@/assets/Venus_Auto.webp.asset.json";
import ezrAsset from "@/assets/ezr.png.asset.json";
import rtxAsset from "@/assets/rtx.png.asset.json";
import ezAsset from "@/assets/ez.png.asset.json";
import shAsset from "@/assets/sh.png.asset.json";
import zhAsset from "@/assets/zh.png.asset.json";
import eu5Asset from "@/assets/eu5.png.asset.json";
import dgAsset from "@/assets/dg.png.asset.json";
import tyAsset from "@/assets/ty.png.asset.json";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Facilities — Tool Room, HPDC, Press Shop | Venus Pune" },
      {
        name: "description",
        content:
          "Venus infrastructure: VMC, CNC EDM, Wire Cut, graphite machining, press machines 5T–200T, laser cutting and HPDC plant in Chakan, Pune.",
      },
      { property: "og:title", content: "Infrastructure & Manufacturing Units — Venus Group" },
      {
        property: "og:description",
        content:
          "Multi-plant precision manufacturing infrastructure across MIDC Chinchwad and Chakan, Pune.",
      },
    ],
  }),
  component: InfraPage,
});


const machineShowcase = [
  {
    title: "CNC EDM Machines",
    meta: "Double-head EDM capability",
    src: ezrAsset.url,
    alt: "CNC EDM machine used in Venus Group tool room",
    fit: "contain" as const,
  },
  {
    title: "VMC Machines",
    meta: "Precision vertical machining centers",
    src: rtxAsset.url,
    alt: "VMC machine used in Venus Group tool room",
    fit: "contain" as const,
  },
  {
    title: "Graphite Machining Machines",
    meta: "High-speed graphite machining centers",
    src: ezAsset.url,
    alt: "Graphite machining center used in Venus Group tool room",
    fit: "contain" as const,
  },
  {
    title: "Wire Cut Machines",
    meta: "Fine precision wire cut EDM",
    src: shAsset.url,
    alt: "Wire cut machine used in Venus Group tool room",
    fit: "contain" as const,
  },
  {
    title: "Press Machines Facility",
    meta: "Production presses from 5T to 200T",
    src: zhAsset.url,
    alt: "Press machine facility at Venus Group",
    fit: "contain" as const,
  },
  {
    title: "Laser Cutting Machines",
    meta: "Sheet laser cutting capability",
    src: eu5Asset.url,
    alt: "Laser cutting machine used in Venus Group manufacturing facility",
    fit: "contain" as const,
  },
  {
    title: "Inspection & Quality Systems",
    meta: "Measurement and hardness testing support",
    src: dgAsset.url,
    alt: "Inspection and quality measurement systems used by Venus Group",
    fit: "contain" as const,
  },
  {
    title: "HPDC Die Casting Lines",
    meta: "High pressure aluminum and zinc die casting lines",
    src: tyAsset.url,
    alt: "HPDC production lines installed at Venus Group",
    fit: "contain" as const,
  },
];

const plants = [
  {
    title: "Progressive Tools Mfg. Plant",
    addr: "D-2 Block, MIDC Chinchwad, Pune – 411019",
    src: progressiveToolsPlantAsset.url,
    alt: "Progressive tools manufacturing plant at Venus Group",
  },
  {
    title: "PLASTIC INJECTION MOULDS AND COMPONENTS & PDC Dies Plant",
    addr: "K-2, MIDC Chakan – 410501",
    src: plasticInjectionPlantAsset.url,
    alt: "Plastic injection moulds and PDC dies plant at Venus Group",
  },
  {
    title: "Press Parts & Sub Assembly Plant",
    addr: "C-19, MIDC Chakan, Pune – 410501",
    src: pressPartsPlantAsset.url,
    alt: "Press parts and sub assembly plant at Venus Group",
  },
  {
    title: "HPDC Production Plant",
    addr: "B-32, MIDC Phase – II, Bamboli, Chakan – 410501",
    src: hpdcProductionPlantAsset.url,
    alt: "HPDC production plant at Venus Group",
  },
];

const venusAuto = {
  title: "Venus Auto – Chinchwad",
  subtitle: "Automotive Service & Maintenance Facility",
  addr: "Chinchwad MIDC, Pune",
  phone: "80622 45037",
  src: venusAutoAsset.url,
  alt: "Venus Auto service center signage in Chinchwad",
  services: [
    {
      cat: "Engine & Mechanical",
      items: [
        "Engine diagnostics & tuning",
        "Suspension & steering repairs",
        "Transmission service",
        "Cooling system maintenance",
      ],
    },
    {
      cat: "Maintenance",
      items: ["Oil changes", "Filter replacements", "Fluid checks"],
    },
    {
      cat: "Repairs",
      items: ["Brake system repair", "Electrical system repair", "Exhaust system repairs"],
    },
    {
      cat: "Vehicle Care",
      items: ["Tire services & alignment", "Cleaning & detailing", "Pre-purchase inspections"],
    },
    {
      cat: "Body Work",
      items: ["Denting & painting", "Minor body repairs", "Interior fixes"],
    },
  ],
};

const stats = [
  { k: "6", v: "Manufacturing plants" },
  { k: "350", v: "KVA roof-top solar system" },
  { k: "25+", v: "Design engineers" },
];

function InfraPage() {
  return (
    <>
      <PageHero
        eyebrow="INFRASTRUCTURE"
        title="ENGINEERED FOR PRECISION AT SCALE"
        subtitle="A modern shop floor with VMC, CNC EDM, wire cut, press, laser cutting and HPDC machinery — built to deliver consistent quality on every job."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 80} className="bg-background p-6 md:p-8">
              <CountUp
                value={s.k}
                className="font-display text-3xl font-bold text-primary md:text-4xl"
              />
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground md:text-sm">
                {s.v}
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="border-y bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="MANUFACTURING UNITS"
            title="SIX DEDICATED UNITS ACROSS MIDC PUNE"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {plants.map((p, i) => (
              <Reveal
                as="article"
                key={p.title}
                delay={(i % 2) * 90}
                className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-background card-lift"
              >
                <MediaAsset
                  src={p.src}
                  alt={p.alt}
                  ratio="video"
                  fit="cover"
                  className="rounded-none border-0"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {p.title}
                  </h3>
                  <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {p.addr}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Upcoming Plant Placeholder */}
            <Reveal
              as="article"
              delay={0}
              className="flex h-full flex-col overflow-hidden rounded-sm border border-dashed border-border bg-background card-lift"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-secondary/60 industrial-grid">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Coming Soon
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                  Upcoming Manufacturing Facility
                </h3>
                <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  6th manufacturing plant — details to be announced.
                </div>
              </div>
            </Reveal>

            <Reveal
              as="article"
              delay={90}
              className="overflow-hidden rounded-sm border border-border bg-background card-lift md:col-span-2"
            >
              <MediaAsset
                src={venusAuto.src}
                alt={venusAuto.alt}
                ratio="video"
                fit="cover"
                className="rounded-none border-0"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                  {venusAuto.title}
                </h3>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {venusAuto.subtitle}
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {venusAuto.services.map((s) => (
                    <div key={s.cat}>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                        {s.cat}
                      </div>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {s.items.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {venusAuto.addr}
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`tel:+91${venusAuto.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary"
                    >
                      {venusAuto.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
