import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionLabel from "../shared/SectionLabel";

export default function GalleryStrip({ images }) {
  const destinations = [
    { name: "BORA BORA", tag: "FRENCH POLYNESIA" },
    { name: "AMALFI COAST", tag: "ITALY" },
    { name: "MALDIVES", tag: "INDIAN OCEAN" },
    { name: "SWISS ALPS", tag: "SWITZERLAND" },
    { name: "CARIBBEAN", tag: "ISLANDS" },
    { name: "MACHU PICCHU", tag: "PERU" },
  ];

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <SectionLabel label="DESTINATIONS" />
        <div className="flex items-end justify-between">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Where We'll
            <br />
            <span className="text-primary">Take You</span>
          </h2>
          <Link
            to="/gallery"
            className="text-[11px] tracking-[0.15em] text-primary hover:text-primary/80 transition-colors uppercase hidden sm:block"
          >
            VIEW ALL →
          </Link>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto -mx-6 px-6 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-64 lg:w-72 aspect-[3/4] overflow-hidden flex-shrink-0"
            >
              <img
                src={img}
                alt={destinations[i]?.name || "Travel destination"}
                className="w-full h-full object-cover img-grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-[10px] tracking-[0.2em] text-primary mb-1">
                  {destinations[i]?.tag}
                </div>
                <div className="text-base font-semibold text-foreground">
                  {destinations[i]?.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}