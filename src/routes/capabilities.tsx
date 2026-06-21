import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";
import { Layers, Factory, Hammer, Wrench, Cog, Cpu, FileText } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { MediaAsset } from "@/components/site/MediaAsset";
import plasticInjectionMouldsAsset from "@/assets/Plastic_injection_moulds.png.asset.json";
import hpdcDiesAsset from "@/assets/HPDC_dies.png.asset.json";
import progressiveStampingToolsAsset from "@/assets/progressive_stamping_tools.png.asset.json";
import hpdcAndExportComponentAsset from "@/assets/HPDC_and_Export_Component.png.asset.json";
import laminationComponentAsset from "@/assets/lamination_component.png.asset.json";
import sheetMetalComponentAsset from "@/assets/sheet_metal_component.png.asset.json";
import plasticComponentAsset from "@/assets/plastic_component.png.asset.json";
import smallTerminalComponentAsset from "@/assets/small_terminal_component.png.asset.json";
import highPrecisionMachineWorkAsset from "@/assets/High_precision_machine_work.png.asset.json";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Injection Moulding, Die Casting & Stamping Tools | Venus" },
      {
        name: "description",
        content:
          "Plastic injection moulds, high pressure die casting, progressive & stamping tools, proto tool development and CAD/CAM design at Venus Group, Pune.",
      },
      { property: "og:title", content: "Manufacturing Capabilities — Venus Group" },
      {
        property: "og:description",
        content: "End-to-end precision manufacturing capabilities under one roof in Pune.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

const services = [
  {
    icon: Layers,
    title: "PLASTIC INJECTION MOULDS AND COMPONENTS",
    desc: "Precision plastic injection moulds engineered for high precision and repeatability — designed and built in-house with rigorous DFM and validation.",
    bullets: [
      "Single & multi-cavity tools",
      "Hot runner & cold runner systems",
      "Mould flow analysis",
    ],
  },
  {
    icon: Factory,
    title: "High Pressure Die Casting",
    desc: "Aluminium and zinc PDC components manufactured at our Manufacturing facility in Chakan, equipped with YIZUMI and LANSON machines.",
    bullets: [
      "Aluminum & zinc components",
      "Tooling + production under one roof",
      "Export-quality castings",
    ],
  },
  {
    icon: Hammer,
    title: "Progressive & Stamping Tools",
    desc: "High precision stamping dies, lamination tools and progressive tools — engineered for high-volume series production.",
    bullets: ["Progressive die design", "Lamination & E-cores", "Press tonnage 5T–200T"],
  },
  {
    icon: Wrench,
    title: "Proto Tool Development",
    desc: "Rapid proto tool components for plastic, aluminum and sheet metal parts — to validate designs before committing to production tooling.",
    bullets: ["Plastic prototypes", "Aluminum & sheet metal protos", "Faster design validation"],
  },
  {
    icon: Cog,
    title: "Sub Assembly",
    desc: "Stamping components development paired with sub-assembly capability for delivering ready-to-fit modules to your line.",
    bullets: ["Stamped component development", "Sub-assembly", "Single-source supply"],
  },
  {
    icon: Cpu,
    title: "Engineering Design & Development",
    desc: "Commercial design centre staffed by 10+ engineers covering CAD/CAM, DFM reports, complex mould design and engineered work cells.",
    bullets: ["CAD/CAM design", "DFM report", "Complex mould design"],
  },
];

const showcaseItems = [
  {
    label: "Plastic Injection Mould",
    src: plasticInjectionMouldsAsset.url,
    alt: "Plastic injection moulds manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "HPDC Die",
    src: hpdcDiesAsset.url,
    alt: "High pressure die casting dies manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Progressive Stamping Tool",
    src: progressiveStampingToolsAsset.url,
    alt: "Progressive stamping tools manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "HPDC & Export Component",
    src: hpdcAndExportComponentAsset.url,
    alt: "HPDC and export components produced by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Lamination Component",
    src: laminationComponentAsset.url,
    alt: "Lamination components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Sheet Metal Component",
    src: sheetMetalComponentAsset.url,
    alt: "Sheet metal components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Plastic Component",
    src: plasticComponentAsset.url,
    alt: "Plastic components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Small Terminal Component",
    src: smallTerminalComponentAsset.url,
    alt: "Small terminal components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "High Precision Machine Work",
    src: highPrecisionMachineWorkAsset.url,
    alt: "High precision machine work CAD models by Venus Group",
    fit: "contain" as const,
  },
];

const projectFlow = [
  { n: "01", t: "Quotation", d: "Reply within 1–3 working days." },
  { n: "02", t: "Project Kick-off", d: "Project starts upon receipt of PO." },
  { n: "03", t: "Mould Design", d: "Design and structural analysis." },
  { n: "04", t: "Procurement", d: "Order steel and standard components." },
  { n: "05", t: "Processing", d: "Machining, processing and inspection." },
  { n: "06", t: "Reporting", d: "Weekly reports and in-process photos." },
  { n: "07", t: "Trial & Approval", d: "Inspect mould to satisfy customer quality requirements." },
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="End-to-end precision manufacturing"
        subtitle="From design and prototyping to series production — engineered for the most demanding applications."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={(i % 3) * 80}
              className="bg-background p-7 md:p-8 card-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="Product Showcase"
            title="Tools and components we manufacture"
            subtitle="Plastic injection moulds, HPDC dies, progressive & stamping tools and finished components."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.map((item, i) => (
              <Reveal
                key={item.label}
                as="article"
                delay={(i % 3) * 80}
                className="group overflow-hidden rounded-sm border border-border bg-card card-lift"
              >
                <MediaAsset
                  src={item.src}
                  alt={item.alt}
                  ratio="square"
                  fit={item.fit}
                  
                  className="rounded-none border-0 bg-background"
                  imageClassName="p-4"
                />
                <div className="border-t border-border px-4 py-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                  {item.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Project Management"
          title="A clear path from RFQ to delivery"
          subtitle="A transparent, milestone-driven process keeps you informed at every stage."
        />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {projectFlow.map((p, i) => (
            <Reveal key={p.n} delay={(i % 4) * 70} className="bg-background p-6 card-lift">
              <div className="flex items-center gap-3">
                <div className="font-display text-3xl font-bold text-primary">{p.n}</div>
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <h4 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-foreground">
                {p.t}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
