import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "../../components/shared/SectionLabel";
import LeadForm from "../../components/shared/LeadForm";
import CTAStrip from "../../components/shared/CTAStrip";

export default function ServicePageTemplate({
  label,
  title,
  titleAccent,
  subtitle,
  heroImage,
  features,
  whyChooseUs,
  seoKeyword,
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-20 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel label={label} />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              {title}
              <br />
              <span className="text-primary">{titleAccent}</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-[11px] tracking-[0.15em] font-semibold">
                  GET A FREE QUOTE
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+1-555-0123">
                <Button variant="outline" className="border-border text-foreground/70 hover:text-foreground h-12 px-8 text-[11px] tracking-[0.15em]">
                  <Phone className="w-3.5 h-3.5 mr-2" />
                  CALL NOW
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="WHAT'S INCLUDED" />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
            Our {title} <span className="text-primary">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-8 hover:border-primary/30 transition-colors"
              >
                <div className="text-primary text-2xl font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel label="WHY D&L" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for
                <br />
                <span className="text-primary">Your {titleAccent}</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Unlike online booking engines, we provide hands-on, personalized service. You're not a transaction — you're a traveler with a unique story.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border border-border p-8 lg:p-10">
              <h3 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
                REQUEST A FREE CONSULTATION
              </h3>
              <LeadForm source="service_page" compact />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}