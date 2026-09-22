import type { Metadata } from "next";
import Hero from "@/components/projects/Hero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CTA from "@/components/CTA";
import { cta } from "@/content/projects/cta";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Example projects and case studies from Infinite Solutions, spanning AI, machine learning, Java microservices and business automation.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <CTA title={cta.title} description={cta.description} />
    </>
  );
}
