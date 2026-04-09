import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Palmtree, Ship, Globe, Hotel, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "../shared/SectionLabel";

const SERVICES = [
  {
    icon: Palmtree,
    title: "Caribbean Escapes",
    desc: "Sun-soaked beaches, crystal waters, and personalized island itineraries tailored to your perfect getaway.",
    path: "/services/caribbean-escapes",
    image: null, // will be passed as prop
  },
  {
    icon: Globe,
    title: "European Adventures",
    desc: "From the Amalfi Coast to the Swiss Alps — custom European itineraries for unforgettable cultural exploration.",
    path: "/services/european-adventures",
  },
  {
    icon: Ship,
    title: "Cruise Planning",
    desc: "Expert guidance on cruise lines, cabin selection, shore excursions, and exclusive onboard perks.",
    path: "/services/cruise-planning",
  },
  {
    icon: Hotel,
    title: "All-Inclusive Resorts",
    desc: "Handpicked luxury resorts worldwide with seamless all-inclusive packages for stress-free relaxation.",
    path: "/services/all-inclusive-resorts",
  },
  {
    icon: Heart,
    title: "Weddings & Honeymoons",
    desc: "Romantic destination weddings and honeymoon escapes — every detail planned to perfection.",
    path: "/services/destination-weddings",
  },
];

export default function ServicesGrid({ images = {} }) {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="WHAT WE DO" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Tailored Travel
            <br />
            <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            We don't sell packages — we craft personalized journeys. As your dedicated travel advisor, every trip is designed around you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block bg-background p-8 lg:p-10 h-full hover:bg-card transition-colors duration-500"
              >
                <service.icon className="w-6 h-6 text-primary mb-6" />
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            </motion.div>
          ))}
          {/* CTA cell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="group flex flex-col items-center justify-center bg-primary p-8 lg:p-10 h-full text-center"
            >
              <span className="text-[10px] tracking-[0.2em] text-primary-foreground/60 uppercase mb-3">
                DON'T SEE YOUR TRIP?
              </span>
              <span className="text-xl font-bold text-primary-foreground mb-4">
                Let's Plan Together
              </span>
              <span className="text-[11px] tracking-[0.15em] text-primary-foreground/80 uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                GET IN TOUCH
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}