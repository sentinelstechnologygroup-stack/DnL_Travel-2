import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const SERVICES = [
  { label: "Caribbean Escapes", path: "/services/caribbean-escapes" },
  { label: "European Adventures", path: "/services/european-adventures" },
  { label: "Cruise Planning", path: "/services/cruise-planning" },
  { label: "All-Inclusive Resorts", path: "/services/all-inclusive-resorts" },
  { label: "Destination Weddings", path: "/services/destination-weddings" },
];

const QUICK_LINKS = [
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Get a Quote", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary font-bold text-xl tracking-wider">D&L</span>
              <span className="text-foreground/40 text-[10px] tracking-[0.2em] uppercase">
                TRAVEL ADVENTURES
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your personal travel advisor in Conroe, TX. We craft unforgettable journeys tailored to your dreams — from Caribbean getaways to European explorations.
            </p>
            <p className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
              AFFILIATED WITH INTELETRAVEL
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
              SERVICES
            </h4>
            <div className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-3">
              {QUICK_LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
              CONTACT
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+1-555-0123" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (555) 012-3456
              </a>
              <a href="mailto:info@dandltraveladventures.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@dandltraveladventures.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Conroe, Texas
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} D&L TRAVEL ADVENTURES. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
            CONROE, TX — SERVING TRAVELERS WORLDWIDE
          </p>
        </div>
      </div>
    </footer>
  );
}