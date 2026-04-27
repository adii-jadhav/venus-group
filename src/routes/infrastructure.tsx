import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHero } from "./about";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Facilities — Tool Room, HPDC, Press Shop | Venus Pune" },
      {
        name: "description",
        content:
          "Venus infrastructure: VMC, CNC EDM, Wire Cut (Makino, Mitsubishi, Sodick), graphite machining, press machines 5T–200T, laser cutting and HPDC plant in Chakan, Pune.",
      },
      { property: "og:title", content: "Infrastructure & Manufacturing Units — Venus Group" },
      { property: "og:description", content: "Multi-plant precision manufacturing infrastructure across MIDC Chinchwad and Chakan, Pune." },
    ],
  }),
  component: InfraPage,
});

const machines = [
  { name: "VMC Machines", qty: "5 Nos.", spec: "Max. size 2000 × 1500 mm" },
  { name: "Milling Machines", qty: "9 Nos.", spec: "Conventional milling capability" },
  { name: "Lathe Machines", qty: "7 Nos.", spec: "Turning operations" },
  { name: "Radial Drill", qty: "5 Nos.", spec: "Heavy-duty drilling" },
  { name: "CNC EDM (incl. double-head)", qty: "6 Nos. + 1 Drill", spec: "Max 1000 × 2200 mm (HSPK)" },
  { name: "Wire Cut", qty: "8 Nos.", spec: "Makino (4) · Mitsubishi (3) · Sodick (1)" },
  { name: "Graphite Machining VMC", qty: "2 Nos.", spec: "Gold Sun GA-650 / GA-870 · 24,000 rpm" },
  { name: "Press Machines", qty: "12 Nos.", spec: "Capacity 5T – 200T" },
  { name: "Laser Cutting Machine", qty: "1 No.", spec: "Max. 3000 × 1500 mm · 3 KW" },
  { name: "HPDC Machines", qty: "5 NOS.", spec: "YIZUMI DM500ARC · LANSON" },
];

const plants = [
  {
    title: "Progressive Tools Mfg. Plant",
    addr: "D-2 Block, MIDC Chinchwad, Pune – 411019",
  },
  {
    title: "Plastic Injection Moulds & PDC Dies Plant",
    addr: "K-2, MIDC Chakan – 410501",
  },
  {
    title: "Press Parts & Sub Assembly Plant",
    addr: "C-19, MIDC Chakan, Pune – 410501",
  },
  {
    title: "HPDC Production Plant",
    addr: "B-32, MIDC Phase – II, Bamboli, Chakan – 410501",
  },
];

const venusAuto = {
  title: "Venus Auto – Chinchwad",
  subtitle: "Automotive Service & Maintenance Facility",
  addr: "Chinchwad MIDC, Pune",
  phone: "80622 45037",
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
      items: [
        "Brake system repair",
        "Electrical system repair",
        "Exhaust system repairs",
      ],
    },
    {
      cat: "Vehicle Care",
      items: [
        "Tire services & alignment",
        "Cleaning & detailing",
        "Pre-purchase inspections",
      ],
    },
    {
      cat: "Body Work",
      items: ["Denting & painting", "Minor body repairs", "Interior fixes"],
    },
  ],
};

const stats = [
  { k: "55+", v: "Machines on shop floor" },
  { k: "5", v: "Manufacturing plants" },
  { k: "350", v: "KVA roof-top solar system" },
  { k: "10+", v: "Design engineers" },
];

function InfraPage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Engineered for precision at scale"
        subtitle="A modern shop floor with VMC, CNC EDM, wire cut, press, laser cutting and HPDC machinery — built to deliver consistent quality on every job."
      />

      {/* Stats */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 80} className="bg-background p-6 md:p-8">
              <CountUp value={s.k} className="font-display text-3xl font-bold text-primary md:text-4xl" />
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground md:text-sm">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Machinery grid */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading eyebrow="Tool Room & Machinery" title="A complete in-house manufacturing capability" />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {machines.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 70} className="bg-background p-6 card-lift">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{m.qty}</div>
              <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-foreground">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.spec}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ImagePlaceholder label="VMC machine" ratio="video" />
          <ImagePlaceholder label="CNC EDM machine" ratio="video" />
          <ImagePlaceholder label="Wire cut machine" ratio="video" />
          <ImagePlaceholder label="Press machine" ratio="video" />
          <ImagePlaceholder label="HPDC machine" ratio="video" />
          <ImagePlaceholder label="Laser cutting machine" ratio="video" />
        </div>
      </section>

      {/* Manufacturing units */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading eyebrow="Manufacturing Units" title="Four dedicated plants across MIDC Pune" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {plants.map((p, i) => (
              <Reveal as="article" key={p.title} delay={(i % 2) * 90} className="overflow-hidden rounded-sm border border-border bg-background card-lift">
                <ImagePlaceholder label={p.title} ratio="wide" />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">{p.title}</h3>
                  <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {p.addr}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
