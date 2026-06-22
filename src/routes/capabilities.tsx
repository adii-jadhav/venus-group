import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";
import { FileText } from "lucide-react";
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

const showcaseItems = [
  {
    label: "Plastic Injection Moulds",
    src: plasticInjectionMouldsAsset.url,
    alt: "Plastic injection moulds manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "HPDC Dies",
    src: hpdcDiesAsset.url,
    alt: "High pressure die casting dies manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Progressive Stamping Tools",
    src: progressiveStampingToolsAsset.url,
    alt: "Progressive stamping tools manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "HPDC Components",
    src: hpdcAndExportComponentAsset.url,
    alt: "HPDC components produced by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Lamination Components",
    src: laminationComponentAsset.url,
    alt: "Lamination components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Sheet Metal Components",
    src: sheetMetalComponentAsset.url,
    alt: "Sheet metal components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Plastic Components",
    src: plasticComponentAsset.url,
    alt: "Plastic components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "Electrical Terminal Components",
    src: smallTerminalComponentAsset.url,
    alt: "Electrical terminal components manufactured by Venus Group",
    fit: "contain" as const,
  },
  {
    label: "High Precision Machining Components",
    src: highPrecisionMachineWorkAsset.url,
    alt: "High precision machining components by Venus Group",
    fit: "contain" as const,
  },
];

const projectFlow = [
  { n: "01", t: "Quotation", d: "Reply within 1–3 working days." },
  { n: "02", t: "Project Kick-off", d: "Project starts upon receipt of PO." },
  { n: "03", t: "Flow Analysis & Design", d: "Simulation-driven analysis and design validation to optimize manufacturability, performance, and production efficiency." },
  { n: "04", t: "Procurement", d: "Order steel and standard components." },
  { n: "05", t: "Processing", d: "Machining, processing and inspection." },
  { n: "06", t: "Reporting", d: "Weekly reports and in-process photos." },
  { n: "07", t: "Trial & Approval", d: "Inspect mould to satisfy customer quality requirements." },
  { n: "08", t: "P-PAP", d: "Comprehensive Part Production Approval Process ensuring components meet customer specifications, quality requirements, and manufacturing standards before mass production." },
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="END-TO-END PRECISION MANUFACTURING"
        subtitle="From design and prototyping to series production — engineered for the most demanding applications."
      />

      <section className="border-y bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="PRODUCT SHOWCASE"
            title="TOOLS AND COMPONENTS WE MANUFACTURE"
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
          eyebrow="PROJECT MANAGEMENT"
          title="A CLEAR PATH FROM RFQ TO DELIVERY"
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
