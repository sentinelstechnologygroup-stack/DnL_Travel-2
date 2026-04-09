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
      <section className="relative overflow-hidden bg-background page-offset">
        <div className="grid grid-cols-1 hero-shell lg:grid-cols-[minmax(0,1fr)_minmax(42%,54vw)]">
          {/* Content */}
          <div className="relative z-10 flex items-end">
            <div className="site-shell lg:w-full">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[760px] py-14 lg:py-20 xl:py-24"
              >
                <SectionLabel label={label} />

                <h1 className="mb-4 font-bold leading-[0.98] text-foreground text-[clamp(2.8rem,5.2vw,5.75rem)]">
                  {title}
                  <br />
                  <span className="text-primary">{titleAccent}</span>
                </h1>

                <p className="mb-8 max-w-[640px] leading-relaxed text-muted-foreground text-[clamp(1rem,1.3vw,1.15rem)]">
                  {subtitle}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link to="/contact">
                    <Button className="h-12 px-8 text-[11px] lg:text-[12px] tracking-[0.15em] font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                      GET A FREE QUOTE
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <a href="tel:+1-555-0123">
                    <Button
                      variant="outline"
                      className="h-12 px-8 text-[11px] lg:text-[12px] tracking-[0.15em] border-border text-foreground/70 hover:text-foreground hover:border-primary/50"
                    >
                      <Phone className="w-3.5 h-3.5 mr-2" />
                      CALL NOW
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="relative hidden lg:block min-h-0 h-full">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={`${title} ${titleAccent}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/10 to-background/20" />
            </div>
          </div>
        </div>

        {/* Mobile Background */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={heroImage}
            alt={`${title} ${titleAccent}`}
            className="w-full h-full object-cover opacity-18"
          />
          <div className="absolute inset-0 bg-background/78" />
        </div>
      </section>

      {/* Features */}
      <section className="section-space px-6 lg:px-8">
        <div className="site-shell">
          <SectionLabel label="WHAT'S INCLUDED" />
          <h2 className="section-title mb-16">
            Our {title} <span className="text-primary">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background border border-transparent p-8 lg:p-9 xl:p-10 hover:border-primary/30 transition-colors"
              >
                <div className="text-primary text-2xl lg:text-3xl font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-space px-6 lg:px-8 bg-card">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-14 lg:gap-20">
            <div>
              <SectionLabel label="WHY D&L" />
              <h2 className="section-title mb-6">
                Why Choose Us for
                <br />
                <span className="text-primary">Your {titleAccent}</span>
              </h2>
              <p className="section-copy max-w-2xl mb-8">
                Unlike online booking engines, we provide hands-on, personalized
                service. You&apos;re not a transaction — you&apos;re a traveler
                with a unique story.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm lg:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border border-border p-8 lg:p-10 xl:p-12">
              <h3 className="text-[10px] lg:text-[11px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
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