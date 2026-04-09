import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const HERO_IMG = "/images/services/cruise-planning-hero.png";

const FEATURES = [
  { title: "Cruise Line Selection", desc: "We match you with the ideal cruise line — from Royal Caribbean to Viking to luxury lines like Oceania and Silversea." },
  { title: "Cabin Selection", desc: "Expert advice on cabin categories, locations, and upgrades to maximize your onboard experience." },
  { title: "Itinerary Planning", desc: "Guidance on the best routes, ports of call, and seasonal timing for your perfect cruise vacation." },
  { title: "Shore Excursions", desc: "Curated port-day experiences — from guided city tours to adventure excursions and cultural immersions." },
  { title: "Onboard Perks", desc: "Access to exclusive drink packages, dining credits, spa credits, and other value-added inclusions." },
  { title: "Group Cruises", desc: "Planning for families, friend groups, and corporate retreat cruises with group rates and private events." },
];

const WHY_US = [
  "Expert knowledge across all major cruise lines and ship classes",
  "Cabin placement advice to avoid common pitfalls",
  "Access to exclusive onboard credits and promotional rates",
  "Shore excursion curation based on your interests",
  "No booking fees — our cruise planning is complimentary",
  "Pre-cruise and post-cruise hotel and travel coordination",
];

export default function CruisePlanning() {
  return (
    <ServicePageTemplate
      label="CRUISE PLANNING EXPERT — CONROE, TX"
      title="Cruise"
      titleAccent="Planning"
      subtitle="Navigate the seas with confidence. Expert guidance on cruise lines, cabins, shore excursions, and exclusive onboard perks — all personalized for you."
      heroImage={HERO_IMG}
      features={FEATURES}
      whyChooseUs={WHY_US}
      seoKeyword="cruise planning expert Conroe TX"
    />
  );
}