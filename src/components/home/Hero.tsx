import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import { hero } from "@/content/home/hero";

export default function Hero() {
  const { badge, headline, subtext, primaryCta, secondaryCta } = hero;

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-xs font-medium text-slate-300">
            {badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {subtext}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 sm:w-auto"
            >
              {primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
