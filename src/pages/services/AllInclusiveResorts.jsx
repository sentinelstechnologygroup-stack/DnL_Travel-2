import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const HERO_IMG = "/images/services/all-inclusive-resorts-hero.png";

const FEATURES = [
  { title: "Resort Matching", desc: "We analyze your preferences — adults-only, family-friendly, beach, jungle — and match you with the perfect resort." },
  { title: "Package Comparison", desc: "Side-by-side comparison of all-inclusive packages so you understand exactly what's included before you book." },
  { title: "Room Category Guidance", desc: "Expert advice on room types, upgrades, and which categories offer the best value for your budget." },
  { title: "Dining & Activities", desc: "Insight into resort dining options, entertainment, pools, spas, and excursion offerings." },
  { title: "Special Occasions", desc: "Coordinating birthday celebrations, anniversary surprises, and special requests with the resort." },
  { title: "Travel Logistics", desc: "Flights, transfers, and airport coordination so your all-inclusive experience starts the moment you leave home." },
];

const WHY_US = [
  "Firsthand knowledge of top all-inclusive brands like Sandals, Secrets, and Hyatt Ziva",
  "Honest resort reviews — we tell you what the websites won't",
  "Access to exclusive promotions and resort credits",
  "Personalized matching based on your travel style and budget",
  "Complimentary planning with no hidden fees",
  "Support from booking through checkout",
];

export default function AllInclusiveResorts() {
  return (
    <ServicePageTemplate
      label="ALL-INCLUSIVE RESORT ADVISOR — TEXAS"
      title="All-Inclusive"
      titleAccent="Resort Packages"
      subtitle="Handpicked luxury all-inclusive resorts worldwide with seamless packages — matched to your style, budget, and travel dreams."
      heroImage={HERO_IMG}
      features={FEATURES}
      whyChooseUs={WHY_US}
      seoKeyword="all inclusive resort packages Texas"
    />
  );
}