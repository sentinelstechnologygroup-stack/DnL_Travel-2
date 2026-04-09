import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const HERO_IMG = "/images/services/destination-weddings-hero.png";

const FEATURES = [
  { title: "Venue Selection", desc: "We help you find the perfect destination wedding venue — beach, vineyard, castle, or tropical garden." },
  { title: "Guest Travel Coordination", desc: "Managing room blocks, group flights, and travel logistics for your entire guest list." },
  { title: "Honeymoon Planning", desc: "Seamless transition from wedding celebration to romantic honeymoon — often at the same destination or beyond." },
  { title: "Resort Wedding Packages", desc: "Access to all-inclusive wedding packages at top resorts like Sandals, Dreams, and Palace Resorts." },
  { title: "Pre-Wedding Events", desc: "Planning welcome dinners, rehearsal events, and group activities for your wedding party." },
  { title: "Budget Optimization", desc: "Maximizing your destination wedding budget with insider rates, group discounts, and complimentary perks." },
];

const WHY_US = [
  "Experience coordinating destination weddings across the Caribbean and Mexico",
  "Strong relationships with top wedding-focused resorts",
  "Guest travel coordination so your loved ones arrive stress-free",
  "Seamless honeymoon transition planning",
  "No service fees — our wedding travel planning is complimentary",
  "Dedicated attention to every detail of your special day",
];

export default function DestinationWeddings() {
  return (
    <ServicePageTemplate
      label="DESTINATION WEDDING PLANNER — TEXAS"
      title="Destination Weddings"
      titleAccent="& Honeymoons"
      subtitle="Romantic destination weddings and honeymoon escapes — every travel detail planned to perfection so you can focus on celebrating love."
      heroImage={HERO_IMG}
      features={FEATURES}
      whyChooseUs={WHY_US}
      seoKeyword="destination wedding planner Texas"
    />
  );
}