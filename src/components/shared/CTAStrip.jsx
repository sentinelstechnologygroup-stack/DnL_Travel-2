import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function CTAStrip({ title = "Ready to Plan Your Dream Getaway?", subtitle = "Let us craft a personalized journey you'll never forget." }) {
  return (
    <section className="relative bg-primary py-16 lg:py-20 overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-background rotate-45" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-background rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
              {title}
            </h2>
            <p className="text-primary-foreground/70 text-sm">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+1-555-0123">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-[11px] tracking-[0.15em] h-11 px-6">
                <Phone className="w-3.5 h-3.5 mr-2" />
                CALL NOW
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-[11px] tracking-[0.15em] h-11 px-6">
                GET A QUOTE
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}