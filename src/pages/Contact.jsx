import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "../components/shared/SectionLabel";
import LeadForm from "../components/shared/LeadForm";

const CONTACT_INFO = [
  { icon: Phone, label: "CALL US", value: "(555) 012-3456", href: "tel:+1-555-0123" },
  { icon: Mail, label: "EMAIL", value: "info@dandltraveladventures.com", href: "mailto:info@dandltraveladventures.com" },
  { icon: MapPin, label: "LOCATION", value: "Conroe, Texas", href: null },
  { icon: Clock, label: "AVAILABILITY", value: "Mon–Sat 9AM–7PM CT", href: null },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="GET IN TOUCH" />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Start Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Ready to plan your dream vacation? Reach out and we'll respond within 24 hours with personalized recommendations.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8 mb-12">
                {CONTACT_INFO.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-[10px] tracking-[0.2em] text-primary font-semibold mb-2">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a href={info.href} className="text-foreground hover:text-primary transition-colors text-lg font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground text-lg font-medium">{info.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-4">
                  WHY WORK WITH A TRAVEL ADVISOR?
                </h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Unlike booking engines, we provide personalized, one-on-one service. We learn your travel style, handle every detail, and are available before, during, and after your trip.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our planning service is complimentary — you pay the same or less than booking online, with far more support and expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border p-8 lg:p-10">
                <h3 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
                  REQUEST A FREE CONSULTATION
                </h3>
                <LeadForm source="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}