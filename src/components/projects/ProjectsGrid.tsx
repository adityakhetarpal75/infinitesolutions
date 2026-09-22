import Container from "../Container";
import ProjectCard from "../ProjectCard";
import { projects } from "@/content/projects/projects";

export default function ProjectsGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
