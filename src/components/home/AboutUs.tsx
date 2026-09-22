import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { siteConfig } from "@/lib/config";
import { aboutUs } from "@/content/home/aboutUs";

export default function AboutUs() {
  const { eyebrow, title, highlights, linkLabel } = aboutUs;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={`${siteConfig.name} is a partnership firm based in ${siteConfig.location}, offering IT and software services alongside our existing business activities. We focus on building software, cloud and AI solutions that solve real operational problems.`}
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <ul className="space-y-5">
              {highlights.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
