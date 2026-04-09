import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatBar from "../components/home/StatBar";
import ServicesGrid from "../components/home/ServicesGrid";
import ProcessSection from "../components/home/ProcessSection";
import GalleryStrip from "../components/home/GalleryStrip";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LeadFormSection from "../components/home/LeadFormSection";
import CTAStrip from "../components/shared/CTAStrip";

const HERO_IMG = "/images/home/hero.png";

const GALLERY_IMAGES = [
  "/images/home/01.png",
  "/images/home/02.png",
  "/images/home/03.png",
  "/images/home/04.png",
  "/images/home/05.png",
  "/images/home/06.png",
];

export default function Home() {
  return (
    <>
      <HeroSection heroImage={HERO_IMG} />
      <StatBar />
      <ServicesGrid />
      <ProcessSection />
      <GalleryStrip images={GALLERY_IMAGES} />
      <TestimonialsSection />
      <LeadFormSection />
      <CTAStrip />
    </>
  );
}