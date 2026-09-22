import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { ourFocus } from "@/content/about/ourFocus";

export default function OurFocus() {
  const { eyebrow, title, areas } = ourFocus;

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
