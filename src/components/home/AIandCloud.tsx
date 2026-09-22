import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { aiAndCloud } from "@/content/home/aiAndCloud";

export default function AIandCloud() {
  const { eyebrow, title, description, capabilities } = aiAndCloud;

  return (
    <section className="bg-navy-950 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-brand-500/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
