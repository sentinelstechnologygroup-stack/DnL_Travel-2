import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const HERO_IMG = "/images/services/caribbean-escapes-hero.png";

const FEATURES = [
  { title: "Island Selection", desc: "We match you with the perfect Caribbean island based on your preferences — whether you crave adventure, relaxation, culture, or nightlife." },
  { title: "Resort & Villa Booking", desc: "Access to exclusive rates at top-rated Caribbean resorts and private villas, handpicked for quality and value." },
  { title: "Flight Coordination", desc: "We handle flight booking, layover optimization, and travel logistics so you can focus on excitement." },
  { title: "Excursion Planning", desc: "From snorkeling in Turks and Caicos to zip-lining in Jamaica — curated activities for every traveler." },
  { title: "Group & Family Trips", desc: "Specialized planning for multi-family getaways, reunions, and group Caribbean vacations." },
  { title: "Travel Insurance", desc: "Comprehensive travel protection recommendations to keep your investment safe." },
];

const WHY_US = [
  "Personalized island recommendations based on your unique travel style",
  "Access to exclusive resort deals and upgrades not available online",
  "Expert knowledge of Caribbean destinations from firsthand experience",
  "24/7 support before, during, and after your trip",
  "No planning fees — our service is complimentary",
  "Backed by InteleTravel's industry-leading booking platform",
];

export default function CaribbeanEscapes() {
  return (
    <ServicePageTemplate
      label="CARIBBEAN TRAVEL ADVISOR — CONROE, TX"
      title="Caribbean"
      titleAccent="Escape Planning"
      subtitle="Sun-soaked beaches, crystal-clear waters, and personalized island itineraries — expertly planned by your dedicated travel advisor in Conroe, Texas."
      heroImage={HERO_IMG}
      features={FEATURES}
      whyChooseUs={WHY_US}
      seoKeyword="Caribbean vacation planner Conroe TX"
    />
  );
}