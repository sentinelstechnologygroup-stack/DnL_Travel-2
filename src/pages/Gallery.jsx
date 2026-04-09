import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "../components/shared/SectionLabel";
import CTAStrip from "../components/shared/CTAStrip";

const CATEGORIES = ["ALL", "CARIBBEAN", "EUROPE", "CRUISES", "RESORTS", "ADVENTURES"];

const GALLERY_ITEMS = [
  { src: "/images/gallery/01.png", title: "Bora Bora Overwater Bungalows", category: "RESORTS" },
  { src: "/images/gallery/02.png", title: "Amalfi Coast, Italy", category: "EUROPE" },
  { src: "/images/gallery/03.png", title: "Maldives Paradise", category: "RESORTS" },
  { src: "/images/gallery/04.png", title: "Swiss Alps Adventure", category: "ADVENTURES" },
  { src: "/images/gallery/05.png", title: "Luxury Yacht Cove", category: "CRUISES" },
  { src: "/images/gallery/06.png", title: "Machu Picchu, Peru", category: "ADVENTURES" },
  { src: "/images/gallery/07.png", title: "Caribbean Sunset", category: "CARIBBEAN" },
  { src: "/images/gallery/08.png", title: "Caribbean Beach Paradise", category: "CARIBBEAN" },
  { src: "/images/gallery/09.png", title: "Santorini, Greece", category: "EUROPE" },
  { src: "/images/gallery/10.png", title: "Luxury Cruise at Sea", category: "CRUISES" },
  { src: "/images/gallery/11.png", title: "Tropical Resort Pool", category: "RESORTS" },
  { src: "/images/gallery/12.png", title: "Beach Wedding Sunset", category: "ADVENTURES" },
];

export default function Gallery() {
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="DESTINATIONS & EXPERIENCES" />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Travel <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            A glimpse into the destinations and experiences we've helped our clients discover.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[10px] tracking-[0.2em] font-medium px-4 py-2 border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover img-grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="text-[10px] tracking-[0.2em] text-primary mb-1">
                      {item.category}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}