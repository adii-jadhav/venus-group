import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { CheckCircle2, Target, Eye, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Venus Dies & Moulds — 26+ Years of Precision Engineering in Pune" },
      {
        name: "description",
        content:
          "Founded in 1999 in Pune, Venus Dies & Moulds is a precision engineering manufacturer of injection moulds, die casting and stamping tools. Quality, innovation and customer satisfaction.",
      },
      { property: "og:title", content: "About Venus Dies & Moulds Pvt. Ltd." },
      { property: "og:description", content: "Pune-based dies and moulds manufacturer with 26+ years of trusted manufacturing." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "1999", t: "Initiated with job work on used CNC Wire EDM at Landewadi, Bhosari." },
  { y: "2002", t: "Shifted to Gulvevasti — added VMC and Sodick W/c." },
  { y: "2005", t: "Started manufacturing of plastic injection moulds & sheet metal dies at MIDC Bhosari." },
  { y: "2013", t: "Established progressive press tools manufacturing plant at Chinchwad." },
  { y: "2016", t: "Established stamping production plant at C-19, MIDC Chakan." },
  { y: "2018", t: "Takeover of PDC plant at B-32, Phase-2 MIDC Chakan." },
  { y: "2019", t: "Installed 300 KVA roof-top solar system — contributing to power saving." },
  { y: "2021", t: "Added 2M × 1.5M vertical machining centre." },
  { y: "2022", t: "Plant expansion at D-89 Phase-2 MIDC Chakan and Makino U6 Wire Cut machine." },
  { y: "2024", t: "Added new laser cutting machine." },
  { y: "2025", t: "Added 2 brand-new Mitsubishi MV2400S-D Cube & MV1200S-D Cube wire cut machines." },
  { y: "2026", t: "Added a double-head CNC EDM machine at the tool room." },
];

const coreValues = [
  "Customer Is Supreme",
  "Live Quality",
  "Encourage Creativity & Innovation",
  "Respect For Individual",
  "Respect For Work-Place Ethics",
];

const founders = [
  { name: "Mr. M S Nayak", role: "Chairman & Managing Director" },
  { name: "Mr. S B Mishra", role: "Managing Director" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering trust, one precision part at a time"
        subtitle="Venus Dies & Moulds Pvt. Ltd. is a Pune-headquartered precision engineering manufacturer with 26+ years of expertise across moulds, dies and stamping tools."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our Story" title="From a single CNC machine to a multi-plant manufacturing group" />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                In 1999, Venus began as a small job-work unit in Bhosari with a single used CNC Wire EDM and one
                operator. What we lacked in scale, we made up for in commitment to quality and on-time delivery.
              </p>
              <p>
                Two and a half decades later, Venus operates four dedicated manufacturing plants across Chinchwad and
                Chakan MIDC — covering the entire value chain from design and prototyping to high pressure die casting,
                stamping and sub-assembly.
              </p>
              <p>
                Our quality policy commits us to continual improvement through innovation and a robust quality
                management system — backed by skilled people, modern infrastructure and ISO 9001:2015 / IATF 16949:2016
                certifications.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ImagePlaceholder label="Venus corporate office" ratio="portrait" />
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading eyebrow="Quality Policy" title="What we commit to, every single day" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "We continuously strive for customer satisfaction by providing timely qualitative products & hassle-free services.",
              "We are committed to continual improvement through innovation and our quality management system to meet customer needs with increased morale of our personnel.",
              "We create an environment that encourages all our employees and stakeholders to prevent defects and strive for excellence.",
            ].map((q) => (
              <li key={q} className="rounded-sm border border-border bg-background p-7">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">{q}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission / Vision / Goals */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          <Card icon={<Target className="h-6 w-6" />} title="Mission">
            To be the number one preferred vendor to our esteemed clients with our motto being leadership through quality.
          </Card>
          <Card icon={<Eye className="h-6 w-6" />} title="Vision">
            To be a complete solution to all customer needs in terms of innovation, development, quality, delivery, cost
            and its core values.
          </Card>
          <Card icon={<CheckCircle2 className="h-6 w-6" />} title="Goals">
            To become a pioneer in stamping, plastic and die-casting technology — a specialty and innovative solutions
            provider with strong JV partners and sustainable growth.
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[var(--steel)] text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading eyebrow="Core Values" title="The principles that guide every decision" align="center" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <div
                key={v}
                className="flex flex-col items-center justify-center rounded-sm border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="font-display text-3xl font-bold text-primary">0{i + 1}</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-wide text-white">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading eyebrow="Leadership" title="Founders & visionaries behind Venus" align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
          {founders.map((f) => (
            <div key={f.name} className="text-center">
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border border-border bg-muted industrial-grid relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <Users className="h-10 w-10" />
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">{f.name}</h3>
              <div className="text-xs uppercase tracking-[0.18em] text-primary">{f.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading eyebrow="Milestones" title="A timeline of growth and innovation" />
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.y}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-start ${
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                  <div className={`pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="font-display text-2xl font-bold text-primary">{m.y}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.t}</p>
                  </div>
                </div>
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
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="hero-surface text-white border-b border-white/10">
      <div className="absolute inset-0 industrial-grid opacity-[0.06]" />
      <div className="container-px relative mx-auto max-w-7xl py-16 md:py-24">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</div>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-sm border border-border bg-card p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">{icon}</div>
      <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
