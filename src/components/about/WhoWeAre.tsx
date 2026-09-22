import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { whoWeAre } from "@/content/about/whoWeAre";

export default function WhoWeAre() {
  const { title, paragraphs } = whoWeAre;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={title} />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
