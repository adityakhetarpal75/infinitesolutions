import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { technologyStack } from "@/content/home/technologyStack";

export default function TechnologyStack() {
  const { eyebrow, title, description, groups } = technologyStack;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-14 space-y-10">
          {groups.map((group) => (
            <div key={group.group}>
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
                {group.group}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-brand-200 hover:text-brand-700"
                    >
                      <Icon className="h-4 w-4 text-slate-500" />
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
