import type { Metadata } from "next";
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurFocus from "@/components/about/OurFocus";
import CTA from "@/components/CTA";
import { cta } from "@/content/about/cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Infinite Solutions is a partnership firm based in Gurgaon, Haryana, offering IT and software services including custom software, AI and cloud solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurFocus />
      <CTA title={cta.title} description={cta.description} />
    </>
  );
}
