import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const HERO_IMG = "/images/services/european-adventures-hero.png";

const FEATURES = [
  { title: "Custom Itineraries", desc: "We design day-by-day European itineraries tailored to your pace, interests, and must-see destinations." },
  { title: "Hotel & Accommodation", desc: "From boutique hotels in Paris to cliffside villas in Santorini — accommodations hand-selected for you." },
  { title: "Rail & Transport", desc: "Eurail passes, private transfers, and domestic flights — we optimize every route for comfort and efficiency." },
  { title: "Guided Experiences", desc: "Skip-the-line tours, local food experiences, wine tastings, and cultural immersions booked in advance." },
  { title: "Multi-City Planning", desc: "Seamless multi-country itineraries across Western Europe, the Mediterranean, Eastern Europe, and Scandinavia." },
  { title: "Travel Documentation", desc: "Guidance on passports, visas, travel insurance, and everything you need before departure." },
];

const WHY_US = [
  "Deep knowledge of European destinations from personal travel experience",
  "Custom itineraries — not cookie-cutter group tours",
  "Insider tips on hidden gems, local restaurants, and off-the-beaten-path attractions",
  "Coordination of complex multi-city European travel logistics",
  "No service fees for our planning expertise",
  "Ongoing support throughout your entire trip",
];

export default function EuropeanAdventures() {
  return (
    <ServicePageTemplate
      label="EUROPEAN TRAVEL ADVISOR — TEXAS"
      title="European"
      titleAccent="Adventures"
      subtitle="From the Amalfi Coast to the Swiss Alps — custom European itineraries designed by your dedicated travel advisor for unforgettable cultural exploration."
      heroImage={HERO_IMG}
      features={FEATURES}
      whyChooseUs={WHY_US}
      seoKeyword="European travel advisor Texas"
    />
  );
}