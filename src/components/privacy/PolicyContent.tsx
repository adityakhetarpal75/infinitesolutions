import Container from "../Container";
import { siteConfig } from "@/lib/config";
import { policy } from "@/content/privacy/policy";

export default function PolicyContent() {
  const { title, lastUpdated, sections, contactSection } = policy;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-8 text-slate-700">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {contactSection.heading}
              </h2>
              <p className="mt-3 leading-relaxed">
                {contactSection.before}{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-brand-600 hover:text-brand-700"
                >
                  {siteConfig.email}
                </a>{" "}
                {contactSection.after}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
