import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import LeadForm from "../components/shared/LeadForm";

const BENEFITS = [
  "No planning fees — our service is 100% complimentary",
  "Personalized itineraries tailored to your budget and style",
  "Access to exclusive resort and cruise deals",
  "24/7 support before, during, and after your trip",
  "Expert guidance from a dedicated travel advisor",
  "Backed by InteleTravel's industry-leading platform",
];

export default function PPCLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-lg tracking-wider">D&L</span>
            <span className="text-foreground/40 text-[10px] tracking-[0.2em] uppercase hidden sm:block">
              TRAVEL ADVENTURES
            </span>
          </div>
          <a href="tel:+1-555-0123">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-[11px] tracking-[0.15em] h-9 px-4">
              <Phone className="w-3.5 h-3.5 mr-2" />
              CALL NOW
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-[10px] tracking-[0.25em] text-primary font-semibold">
                  CONROE, TX — TRAVEL ADVISOR
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
                Stop Spending Hours
                <br />
                <span className="text-primary">Planning Your Vacation</span>
              </h1>

              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
                Let a dedicated travel advisor handle every detail — from flights and hotels to excursions and dining — at no extra cost to you.
              </p>

              <div className="space-y-3 mb-10">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Rated 5/5 by 100+ happy travelers
                </span>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card border border-border p-8 lg:p-10">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Get Your Free Consultation
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Tell us about your dream trip and we'll reach out within 24 hours.
                </p>
                <LeadForm source="ppc_landing" compact />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { val: "500+", lab: "TRIPS PLANNED" },
            { val: "50+", lab: "DESTINATIONS" },
            { val: "98%", lab: "SATISFACTION" },
            { val: "$0", lab: "PLANNING FEES" },
          ].map((s, i) => (
            <div key={i} className={`px-6 py-8 text-center ${i < 3 ? "border-r border-border" : ""}`}>
              <div className="text-2xl font-bold text-primary">{s.val}</div>
              <div className="text-[10px] tracking-[0.15em] text-muted-foreground mt-1">{s.lab}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Plan Your Dream Trip?
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Call us now or fill out the form above. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+1-555-0123">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-[11px] tracking-[0.15em] font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                CALL (555) 012-3456
              </Button>
            </a>
          </div>
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground mt-8 uppercase">
            © {new Date().getFullYear()} D&L TRAVEL ADVENTURES — CONROE, TX
          </p>
        </div>
      </section>
    </div>
  );
}