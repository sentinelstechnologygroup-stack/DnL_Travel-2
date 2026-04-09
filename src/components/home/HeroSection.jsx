import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-24 lg:pt-0 pb-12 lg:pb-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="text-[10px] tracking-[0.3em] text-primary font-semibold">
              CONROE, TX — TRAVEL ADVISOR
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            Your Journey,
            <br />
            <span className="text-primary">Perfectly</span>
            <br />
            Crafted.
          </h1>

          <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed mb-10">
            D&L Travel Adventures specializes in personalized travel planning — from Caribbean getaways to European explorations and luxury cruises. No booking engines. Just expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-[11px] tracking-[0.15em] font-semibold">
                GET A FREE QUOTE
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+1-555-0123">
              <Button variant="outline" className="border-border text-foreground/70 hover:text-foreground hover:border-primary/50 h-12 px-8 text-[11px] tracking-[0.15em]">
                <Phone className="w-3.5 h-3.5 mr-2" />
                CALL NOW
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="ghost" className="text-foreground/50 hover:text-primary h-12 px-6 text-[11px] tracking-[0.15em]">
                <Calendar className="w-3.5 h-3.5 mr-2" />
                SCHEDULE CONSULT
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block lg:w-1/2 relative"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Stunning Caribbean sunset beach destination"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          {/* Dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </motion.div>

      {/* Mobile background */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroImage}
          alt="Caribbean destination"
          className="w-full h-full object-cover opacity-15"
        />
      </div>
    </section>
  );
}