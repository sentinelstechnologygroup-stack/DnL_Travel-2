import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "500+", label: "TRIPS PLANNED" },
  { value: "50+", label: "DESTINATIONS" },
  { value: "98%", label: "CLIENT SATISFACTION" },
  { value: "10+", label: "YEARS EXPERIENCE" },
];

export default function StatBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`px-6 lg:px-8 py-8 lg:py-10 text-center ${
                i < STATS.length - 1 ? "border-r border-border" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}