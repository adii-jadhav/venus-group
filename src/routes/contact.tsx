import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { PageHero } from "./about";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Venus Group — Request a Quote | ALL UNDER ONE ROOF" },
      {
        name: "description",
        content:
          "Contact Venus Group for injection moulds, die casting and stamping tools. Corporate Office: D-2 Block, MIDC Chinchwad, Pune – 411019.",
      },
      { property: "og:title", content: "Contact Venus Group" },
      {
        property: "og:description",
        content: "Request a quote from a trusted dies and moulds manufacturer in Pune.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAILJS_PUBLIC_KEY = "RBqedqKj-XcZ2lMa-";
const EMAILJS_SERVICE_ID = "service_k2njneh";
const EMAILJS_TEMPLATE_ID = "template_hsd5uwu";

const contactSchema = z.object({
  from_name: z.string().trim().min(2, "Please enter your name").max(100),
  from_email: z.string().trim().email("Enter a valid email").max(255),
  from_phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Please enter a subject").max(200),
  message: z.string().trim().min(10, "Tell us about your requirement").max(1500),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const fd = new FormData(e.currentTarget);
    const data = {
      from_name: String(fd.get("from_name") || ""),
      from_email: String(fd.get("from_email") || ""),
      from_phone: String(fd.get("from_phone") || ""),
      company: String(fd.get("company") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("idle");
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's engineer your next project together"
        subtitle="Share your drawings or requirements — our engineering team will respond with a quote in 1–3 working days."
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-card p-6 md:p-10 card-lift">
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
                Request a Quote
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details below — all fields marked * are required.
              </p>

              {status === "success" && (
                <div className="mt-8 flex items-start gap-4 rounded-sm border border-primary/30 bg-primary/5 p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-foreground">
                      Thank you!
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thank you. Your enquiry has been submitted successfully. Our team will get
                      back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mt-8 flex items-start gap-4 rounded-sm border border-destructive/30 bg-destructive/5 p-6">
                  <AlertCircle className="h-6 w-6 shrink-0 text-destructive" />
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-foreground">
                      Submission failed
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Unable to send your enquiry right now. Please try again later.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name *"
                  name="from_name"
                  error={errors.from_name}
                  autoComplete="name"
                />
                <Field
                  label="Email *"
                  name="from_email"
                  type="email"
                  error={errors.from_email}
                  autoComplete="email"
                />
                <Field
                  label="Phone *"
                  name="from_phone"
                  type="tel"
                  error={errors.from_phone}
                  autoComplete="tel"
                />
                <Field
                  label="Company"
                  name="company"
                  error={errors.company}
                  autoComplete="organization"
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Subject *"
                    name="subject"
                    error={errors.subject}
                    placeholder="Project Requirement / Enquiry Subject"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project, component requirements, expected volumes, or timelines"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal as="div" delay={120} className="lg:col-span-5">
            <aside>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                Reach us directly
              </h3>
              <ul className="mt-6 space-y-5">
                <Info icon={<MapPin className="h-5 w-5" />} title="Corporate Office">
                  D-2 Block 66/12, MIDC Chinchwad, Pune – 411019
                </Info>
                <Info icon={<MapPin className="h-5 w-5" />} title="Works">
                  Chinchwad and Chakan facilities, Pune
                </Info>
                <Info icon={<Phone className="h-5 w-5" />} title="Call / WhatsApp">
                  <a href="tel:+919049001430" className="hover:text-primary">
                    +91 90490 01430
                  </a>{" "}
                  /{" "}
                  <a href="tel:+918484937681" className="hover:text-primary">
                    +91 84849 37681
                  </a>
                </Info>
                <Info icon={<Mail className="h-5 w-5" />} title="Business Development">
                  <a
                    href="mailto:bd.corp@venusgroup.co.in"
                    className="break-all hover:text-primary"
                  >
                    bd.corp@venusgroup.co.in
                  </a>
                  <br />
                  <a href="mailto:admin@venusgroup.co.in" className="break-all hover:text-primary">
                    admin@venusgroup.co.in
                  </a>
                </Info>
              </ul>

              <div className="mt-8 overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Venus Group — Pune location"
                  src="https://www.google.com/maps?q=Venus+Group+D-2+Block+66%2F12+MIDC+Chinchwad+Pune+411019&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Info({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm text-foreground">{children}</div>
      </div>
    </li>
  );
}
