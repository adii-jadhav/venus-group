import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SmartImg } from "@/components/site/SmartImg";
import storyScooterAsset from "@/assets/venus-story-scooter.webp.asset.json";
import storyMachineAsset from "@/assets/venus-story-workshop-machine.webp.asset.json";

const storyPhotos = [
  {
    src: storyScooterAsset.url,
    alt: "A man in an orange shirt riding a scooter along a paved road",
    w: 374,
    h: 467,
  },
  {
    src: storyMachineAsset.url,
    alt: "A blue and white industrial machine in a workshop, with a worker at its base",
    w: 340,
    h: 425,
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: "About Venus Group — 26+ Years of Precision Engineering in Pune" },
      {
        name: "description",
        content:
          "Founded in 1999 in Pune, Venus Group is a precision engineering manufacturer of injection moulds, die casting and stamping tools. Quality, innovation and customer satisfaction.",
      },
      { property: "og:title", content: "About Venus Group Pvt. Ltd." },
      {
        property: "og:description",
        content: "Pune-based dies and moulds manufacturer with 26+ years of trusted manufacturing.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "2026", t: "Added double-head CNC EDM machine." },
  {
    y: "2025",
    t: "Added 2 brand-new Mitsubishi MV2400S-D Cube & MV1200S-D Cube wire cut machines.",
  },
  { y: "2024", t: "Added new laser cutting machine." },
  { y: "2022", t: "Plant expansion at D-89 Phase-2 MIDC Chakan." },
  {
    y: "2019",
    t: "Embraced renewable energy with the commissioning of a 300 KVA roof-top solar system — advancing sustainable operations, reducing carbon footprint and reinforcing our commitment to environmental responsibility.",
  },
  { y: "2018", t: "Takeover of PDC plant at B-32, Phase-2 MIDC Chakan." },
  { y: "2016", t: "Established stamping production plant at C-19, MIDC Chakan." },
  { y: "2013", t: "Established progressive press tools manufacturing plant at Chinchwad." },
  {
    y: "2005",
    t: "Started manufacturing of plastic injection moulds & sheet metal dies at MIDC Bhosari.",
  },
  { y: "2002", t: "Shifted to Gulvevasti — added VMC and Sodick W/c." },
  { y: "1999", t: "Initiated with job work on used CNC Wire EDM at Landewadi, Bhosari." },
];

const coreValues = [
  "CUSTOMER IS SUPREME",
  "LIVE QUALITY",
  "ENCOURAGE CREATIVITY & INNOVATION",
  "RESPECT FOR INDIVIDUAL",
  "RESPECT FOR WORK-PLACE ETHICS",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="ENGINEERING TRUST, ONE PRECISION PART AT A TIME"
        subtitle="Venus Group is a Pune-headquartered precision engineering manufacturer with 26+ years of expertise across plastic injection moulds, PDC dies and stamping tools."
      />

      <section className="container-px mx-auto max-w-5xl py-20 md:py-28">
        <SectionHeading
          eyebrow="OUR STORY"
          title="FROM A SINGLE CNC MACHINE TO A MULTI-PLANT MANUFACTURING GROUP"
        />
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            In 1999, Venus Group began as a small job-work unit in Bhosari with a single used CNC
            Wire EDM and one operator. What we lacked in scale, we made up for in commitment to
            quality and on-time delivery.
          </p>
          <p>
            Two and a half decades later, Venus operates five dedicated manufacturing plants across
            Chinchwad and Chakan MIDC - covering the entire value chain from design and prototyping
            to high pressure die casting, stamping and sub-assembly.
          </p>
          <p>
            Our quality policy commits us to continual improvement through innovation and a robust
            quality management system - backed by skilled people, modern infrastructure and ISO
            9001:2015 / IATF 16949:2016 certifications.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {storyPhotos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 90}
              className="overflow-hidden rounded-sm border border-border bg-muted"
            >
              <SmartImg
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="h-auto w-full"
                wrapperClassName="bg-muted"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quality Policy */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading eyebrow="QUALITY POLICY" title="WHAT WE COMMIT TO, EVERY SINGLE DAY" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "We continuously strive for customer satisfaction by providing timely qualitative products & hassle-free services.",
              "We are committed to continual improvement through innovation and our quality management system to meet customer needs with increased morale of our personnel.",
              "We create an environment that encourages all our employees and stakeholders to prevent defects and strive for excellence.",
            ].map((q, i) => (
              <Reveal
                as="li"
                key={q}
                delay={i * 80}
                className="rounded-sm border border-border bg-background p-7 card-lift"
              >
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">{q}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[var(--steel)] text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="CORE VALUES"
            title="THE PRINCIPLES THAT GUIDE EVERY DECISION"
            align="center"
            titleClassName="text-white"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <Reveal
                key={v}
                delay={i * 70}
                className="flex flex-col items-center justify-center rounded-sm border border-white/10 bg-white/5 p-6 text-center card-lift"
              >
                <div className="font-display text-3xl font-bold text-primary">0{i + 1}</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-wide text-white">
                  {v}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading eyebrow="MILESTONES" title="A timeline of growth and innovation" />
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Reveal
                  key={m.y}
                  delay={Math.min(i * 50, 300)}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-start ${
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                  <div
                    className={`pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="font-display text-2xl font-bold text-primary">{m.y}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="hero-surface text-white border-b border-white/10">
      <div className="absolute inset-0 industrial-grid opacity-[0.06]" />
      <div className="container-px relative mx-auto max-w-7xl py-16 md:py-24">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </div>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
