import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const TESTIMONIALS = [
  {
    name: "Sarah & Mark T.",
    location: "Houston, TX",
    trip: "Caribbean Cruise",
    text: "D&L Travel Adventures planned our anniversary cruise perfectly. Every detail was handled — from cabin selection to shore excursions. We just showed up and enjoyed.",
  },
  {
    name: "Jennifer L.",
    location: "The Woodlands, TX",
    trip: "European Tour",
    text: "Darryl crafted an incredible 2-week European itinerary for our family. The local recommendations were priceless. This was the best vacation we've ever taken.",
  },
  {
    name: "Robert & Lisa K.",
    location: "Conroe, TX",
    trip: "All-Inclusive Resort",
    text: "We were overwhelmed by resort options online. D&L narrowed it down to the perfect match for us. Stress-free planning and an unforgettable trip. Highly recommend.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="TESTIMONIALS" />
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
          What Our Travelers
          <br />
          <span className="text-primary">Say About Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-8 lg:p-10"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase mt-1">
                  {t.location} — {t.trip}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}