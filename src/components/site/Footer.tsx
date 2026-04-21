import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/venus-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[var(--steel)] text-[var(--steel-foreground)]">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Venus logo" className="h-12 w-auto bg-white rounded-sm p-1" />
              <div className="leading-tight">
                <div className="font-display text-lg font-bold">VENUS DIES & MOULDS</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Precision dies and moulds manufacturer in Pune, India. ISO 9001:2015 and IATF 16949:2016 certified
              engineering partner serving automotive, electrical, defense and industrial sectors since 1999.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/capabilities" className="hover:text-primary">Capabilities</Link></li>
              <li><Link to="/infrastructure" className="hover:text-primary">Infrastructure</Link></li>
              <li><Link to="/industries" className="hover:text-primary">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white">Capabilities</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Plastic Injection Moulds</li>
              <li>High Pressure Die Casting</li>
              <li>Progressive & Stamping Tools</li>
              <li>Aluminum & Zinc PDC Components</li>
              <li>CAD/CAM Design & DFM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>D-2 Block 66/12, MIDC Chinchwad, Pune – 411019</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+919049001430" className="hover:text-primary">+91 90490 01430</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:bd.corp@venusgroup.co.in" className="hover:text-primary break-all">
                  bd.corp@venusgroup.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Venus Dies & Moulds Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            ISO 9001:2015 · IATF 16949:2016 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
