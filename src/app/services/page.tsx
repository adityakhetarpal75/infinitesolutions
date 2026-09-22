import type { Metadata } from "next";
import Hero from "@/components/services/Hero";
import ServiceCategories from "@/components/services/ServiceCategories";
import CTA from "@/components/CTA";
import { cta } from "@/content/services/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, Java and Spring Boot engineering, React web apps, Python, AI/ML, generative AI, RAG, AWS cloud solutions and business automation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <CTA title={cta.title} description={cta.description} />
    </>
  );
}
