import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { whyChooseUs } from "@/content/home/whyChooseUs";

export default function WhyChooseUs() {
  const { eyebrow, title, reasons } = whyChooseUs;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
