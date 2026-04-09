import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../shared/SectionLabel";

const STEPS = [
  {
    num: "01",
    title: "Share Your Vision",
    desc: "Tell us your dream destination, travel dates, budget, and what matters most to you. We listen first.",
  },
  {
    num: "02",
    title: "Custom Planning",
    desc: "We design a bespoke itinerary with hand-picked accommodations, flights, excursions, and insider tips.",
  },
  {
    num: "03",
    title: "Enjoy Your Journey",
    desc: "Travel with confidence knowing every detail is handled. We're available before, during, and after your trip.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="HOW IT WORKS" />
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
          Three Steps to Your
          <br />
          <span className="text-primary">Perfect Trip</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative ${
                i < STEPS.length - 1 ? "lg:border-r lg:border-border" : ""
              } lg:px-10 ${i === 0 ? "lg:pl-0" : ""} ${
                i === STEPS.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              <span className="text-6xl lg:text-7xl font-bold text-primary/10 absolute -top-2 left-0 lg:left-auto">
                {step.num}
              </span>
              <div className="pt-12">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}