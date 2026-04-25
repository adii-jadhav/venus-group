import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "./about";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Venus Group — Request a Quote | Pune, India" },
      {
        name: "description",
        content:
          "Contact Venus Group Pvt. Ltd. for injection moulds, die casting and stamping tools. Corporate Office: D-2 Block, MIDC Chinchwad, Pune – 411019.",
      },
      { property: "og:title", content: "Contact Venus Group Pvt. Ltd." },
      { property: "og:description", content: "Request a quote from a trusted dies and moulds manufacturer in Pune, India." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us about your requirement").max(1500),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    e.currentTarget.reset();
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
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-card p-6 md:p-10">
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
                Request a Quote
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details below — all fields marked * are required.
              </p>

              {submitted ? (
                <div className="mt-8 flex items-start gap-4 rounded-sm border border-primary/30 bg-primary/5 p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-foreground">Thank you!</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your enquiry has been recorded. Our team will get back to you shortly. For urgent requirements,
                      please call us at +91 90490 01430.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Name *" name="name" error={errors.name} />
                  <Field label="Email *" name="email" type="email" error={errors.email} />
                  <Field label="Phone *" name="phone" type="tel" error={errors.phone} />
                  <Field label="Company" name="company" error={errors.company} />
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Details */}
          <aside className="lg:col-span-5">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
              Reach us directly
            </h3>
            <ul className="mt-6 space-y-5">
              <Info icon={<MapPin className="h-5 w-5" />} title="Corporate Office">
                D-2 Block 66/12, MIDC Chinchwad, Pune – 411019
              </Info>
              <Info icon={<MapPin className="h-5 w-5" />} title="Works">
                Chinchwad and Chakan facilities, Pune – 410501
              </Info>
              <Info icon={<Phone className="h-5 w-5" />} title="Call">
                <a href="tel:+919049001430" className="hover:text-primary">+91 90490 01430</a>{" "}
                /{" "}
                <a href="tel:+918484937681" className="hover:text-primary">+91 84849 37681</a>
              </Info>
              <Info icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp">
                +91 90490 01430 / +91 84849 37681
              </Info>
              <Info icon={<Mail className="h-5 w-5" />} title="Business Development">
                <a href="mailto:bd.corp@venusgroup.co.in" className="hover:text-primary break-all">
                  bd.corp@venusgroup.co.in
                </a>
                <br />
                <a href="mailto:admin@venusgroup.co.in" className="hover:text-primary break-all">
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
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm text-foreground">{children}</div>
      </div>
    </li>
  );
}
