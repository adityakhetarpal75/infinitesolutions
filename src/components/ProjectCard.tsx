import type { Project } from "@/content/projects/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {project.category}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.details.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-2 text-sm text-slate-600"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 pt-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
