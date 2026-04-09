import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative overflow-hidden bg-background page-offset">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(40%,52vw)] hero-shell">
        {/* Left Content */}
        <div className="relative z-10 flex items-center">
          <div className="site-shell lg:w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[760px] py-14 lg:py-20 xl:py-24"
            >
              <div className="mb-7 lg:mb-8 flex items-center gap-3">
                <div className="h-px w-12 lg:w-14 bg-primary" />
                <span className="text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] lg:tracking-[0.32em] text-primary">
                  CONROE, TX — TRAVEL ADVISOR
                </span>
              </div>

              <h1 className="mb-6 lg:mb-7 font-bold leading-[0.98] text-foreground text-[clamp(3rem,6vw,6rem)]">
                Your Journey,
                <br />
                <span className="text-primary">Perfectly</span>
                <br />
                Crafted.
              </h1>

              <p className="mb-9 lg:mb-10 max-w-[640px] text-muted-foreground leading-relaxed text-[clamp(1rem,1.4vw,1.18rem)]">
                D&amp;L Travel Adventures specializes in personalized travel
                planning — from Caribbean getaways to European explorations and
                luxury cruises. No booking engines. Just expert guidance.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/contact">
                  <Button className="h-12 px-8 text-[11px] lg:text-[12px] font-semibold tracking-[0.15em] text-primary-foreground bg-primary hover:bg-primary/90">
                    GET A FREE QUOTE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <a href="tel:+1-555-0123">
                  <Button
                    variant="outline"
                    className="h-12 px-8 text-[11px] lg:text-[12px] tracking-[0.15em] text-foreground/70 border-border hover:text-foreground hover:border-primary/50"
                  >
                    <Phone className="mr-2 h-3.5 w-3.5" />
                    CALL NOW
                  </Button>
                </a>

                <Link to="/contact">
                  <Button
                    variant="ghost"
                    className="h-12 px-6 text-[11px] lg:text-[12px] tracking-[0.15em] text-foreground/60 hover:text-primary"
                  >
                    <Calendar className="mr-2 h-3.5 w-3.5" />
                    SCHEDULE CONSULT
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:block h-full min-h-0"
        >
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Stunning Caribbean sunset beach destination"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Mobile background */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroImage}
          alt="Caribbean destination"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>
    </section>
  );
}