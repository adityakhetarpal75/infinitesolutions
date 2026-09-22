import type { ReactNode } from "react";
import Container from "./Container";

/**
 * The dark banner shown at the top of every inner page (About, Services,
 * Projects, Contact). Shared here so those four pages don't each repeat
 * the same markup — page-specific text is passed in as props from that
 * page's content file (e.g. src/content/aboutPage.ts).
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: ReactNode;
}) {
  return (
    <section className="bg-navy-950 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-lg text-slate-300">{description}</p>
          ) : null}
          {meta ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-300">
              {meta}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
