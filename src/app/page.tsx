import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import WhatWeDo from "@/components/home/WhatWeDo";
import AIandCloud from "@/components/home/AIandCloud";
import TechnologyStack from "@/components/home/TechnologyStack";
import OurWork from "@/components/home/OurWork";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/CTA";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Software, AI & Cloud Solutions`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <AIandCloud />
      <TechnologyStack />
      <OurWork />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
