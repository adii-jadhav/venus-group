import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Cog, Factory, ShieldCheck, Wrench, Layers, Cpu, Hammer } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { FlipCard } from "@/components/site/FlipCard";
import { SmartImg } from "@/components/site/SmartImg";
import { useState } from "react";
import certIso from "@/assets/cert-iso-9001.png";
import certIatf from "@/assets/cert-iatf-16949.png";
import certAiaf from "@/assets/AIAF.png.asset.json";
import facilityExterior from "@/assets/h2.png.asset.json";
import facilitySign from "@/assets/h3.png.asset.json";
import manufacturingFloor from "@/assets/h5.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venus Group — Precision Engineering, Pune" },
      {
        name: "description",
        content:
          "Precision engineering and trusted manufacturing since 1999. Plastic injection moulds, high pressure die casting and stamping tools manufacturer in Pune, India.",
      },
      { property: "og:title", content: "Venus Group — Precision Engineering, Pune" },
      {
        property: "og:description",
        content:
          "ISO 9001:2015 & IATF 16949:2016 certified dies and moulds manufacturer serving automotive, electrical and defense industries.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Layers, title: "Plastic Injection Moulds", desc: "Plastic injection moulds and PDC dies engineered for high precision and repeatability." },
  { icon: Factory, title: "High Pressure Die Casting", desc: "Aluminum & Zinc PDC components produced at our 100,000+ sq. ft. area in Chakan." },
  { icon: Hammer, title: "Progressive & Stamping Tools", desc: "High precision stamping dies, lamination and progressive tools for series production." },
  { icon: Wrench, title: "Proto Tool Development", desc: "Proto tool components for plastic, aluminum and sheet metal parts to validate designs fast." },
  { icon: Cog, title: "Sub Assembly", desc: "Stamping components development and sub assembly capability under one roof." },
  { icon: Cpu, title: "LASER CUT & CNC WIRE CUT SERVICES", desc: "Reliable CNC wire cut and Laser cut services for high-quality production" },
];

const strengths = [
  "Diversified Business Profile",
  "Experienced Professionals with robust technical capabilities",
  "Innovative Approach",
  "Continual Improvements",
  "Premium Quality",
  "Optimum cost",
  "One-stop solution for all your queries",
  "Market Presence since 26+ Years",
];

const certifications = [
  { t: "ISO 9001:2015", d: "Quality Management System certified for consistent processes and customer focus.", img: certIso, alt: "ISO 9001:2015 Certificate" },
  { t: "IATF 16949:2016", d: "Automotive quality management standard demonstrating fitness for global supply chains.", img: certIatf, alt: "IATF 16949:2016 Certificate" },
  { t: "All India Achievers Foundation", d: "Indian Achievers Award for Industrial Development", img: certAiaf.url, alt: "All India Achievers Foundation Indian Achievers Award for Industrial Development certificate awarded to Venus Dies & Moulds" },
];

function HomePage() {
  const [activeCert, setActiveCert] = useState<number | null>(null);
  return (
    <>
      {/* HERO */}
      <section className="relative hero-surface text-white">
        <div className="absolute inset-0 industrial-grid opacity-[0.08]" />
        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl hero-rise">
            <div className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              ISO 9001:2015 · IATF 16949:2016 Certified
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Precision Engineering.
              <br />
              <span className="text-primary">Trusted Manufacturing.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Venus Group is a Pune-based precision engineering company delivering Injection Moulds, High Pressure Casting Dies, Sheet Metal Tools, Components and Assemblies in all three verticals to global manufacturers, with 26+ years of proven quality, innovation and on-time delivery.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:mt-24 md:grid-cols-4">
            {[
              { k: "26+", v: "Years of Excellence" },
              { k: "6", v: "Manufacturing Plants" },
              { k: "100+", v: "TRUSTED CLIENTS" },
              { k: "100,000+", v: "SQ. FT. MANUFACTURING AREA" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 80} className="bg-[var(--steel)] p-5 md:p-7">
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                  <CountUp value={s.k} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60 md:text-sm whitespace-pre-line">{s.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="About Venus"
              title="A trusted engineering partner since 1999"
              subtitle="From a single-man job-work setup in Bhosari to a multi-plant precision manufacturing group in Pune. Venus has scaled responsibly, with quality and customer satisfaction at the core."
            />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                We continuously strive for customer satisfaction by providing timely qualitative products and hassle-free
                services. Our quality management system, innovation and committed people enable us to consistently
                exceed customer needs and expectations.
              </p>
              <p>
                Today, Venus operates five dedicated manufacturing units across Chinchwad and Chakan MIDC.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-4">
              <figure className="group overflow-hidden rounded-sm border border-border bg-card shadow-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <SmartImg
                    src={facilityExterior.url}
                    alt="Venus Group facility exterior in Pune"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                </div>
              </figure>
              <div className="grid gap-4 sm:grid-cols-2">
                <figure className="group overflow-hidden rounded-sm border border-border bg-card shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <SmartImg
                      src={facilitySign.url}
                      alt="Venus signage at the manufacturing facility"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </figure>
                <figure className="group overflow-hidden rounded-sm border border-border bg-card shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <SmartImg
                      src={manufacturingFloor.url}
                      alt="Venus Group manufacturing environment and shop floor"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-secondary/60 border-y">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-end manufacturing under one roof"
            subtitle="From design and prototyping to series production - engineered for automotive, electrical, defense and industrial sectors."
          />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card-lift group relative h-full bg-background p-7 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 bg-background px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View all capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Why Venus"
            title="Strengths that build long-term partnerships"
            subtitle="Diversified capabilities, technical depth and a relentless focus on quality make us the preferred vendor to esteemed clients across industries."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-sm border border-border bg-card p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-[var(--steel)] text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            <div className="bg-[var(--steel)] p-8 md:p-12">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Mission</div>
              <p className="mt-5 font-display text-2xl font-semibold uppercase leading-snug md:text-3xl">
                To be the number one preferred vendor to our esteemed clients with our motto being{" "}
                <span className="text-primary">leadership through quality.</span>
              </p>
            </div>
            <div className="bg-[var(--steel)] p-8 md:p-12">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Vision</div>
              <p className="mt-5 font-display text-2xl font-semibold uppercase leading-snug md:text-3xl">
                To be a complete solution to all customer needs in terms of innovation, development, quality, delivery,
                cost <span className="text-primary">& its core values.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeading
          eyebrow="Quality & Certifications"
          title="Built on systems that guarantee quality"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.t} delay={i * 90} className="min-h-[280px]">
              <FlipCard
                active={activeCert === i}
                onActivate={() => setActiveCert(activeCert === i ? null : i)}
                front={
                  <div className="card-lift cursor-pointer rounded-sm border border-border bg-card p-8 text-center h-full flex flex-col items-center justify-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">{c.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                    <span className="mt-4 text-[11px] uppercase tracking-wider text-primary/80">Tap to view certificate</span>
                  </div>
                }
                back={
                  <div className="cursor-pointer rounded-sm border border-border bg-card p-3 h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
                Have a project in mind?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-primary-foreground/90 md:text-base">
                Share your drawings or requirements — our engineering team will respond with a quote in 1–3 working days.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--steel)] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-black/90"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
