import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import { projects } from "@/content/projects/projects";
import { ourWork } from "@/content/home/ourWork";

export default function OurWork() {
  const { eyebrow, title, description, linkLabel } = ourWork;

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
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {linkLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
