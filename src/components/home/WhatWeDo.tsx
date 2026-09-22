import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import { services } from "@/content/services/services";
import { whatWeDo } from "@/content/home/whatWeDo";

const featuredSlugs = [
  "custom-software-development",
  "spring-boot-development",
  "react-web-applications",
  "ai-machine-learning",
  "aws-cloud-solutions",
  "business-automation",
];

export default function WhatWeDo() {
  const { eyebrow, title, description, linkLabel } = whatWeDo;

  const featured = featuredSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] =>
      Boolean(service)
    );

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
