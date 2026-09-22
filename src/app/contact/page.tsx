import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/contact/Hero";
import FormPanel from "@/components/contact/FormPanel";
import InfoPanel from "@/components/contact/InfoPanel";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Infinite Solutions in Gurgaon, Haryana to discuss software development, AI and cloud solutions for your business.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <FormPanel />
            </div>
            <div className="lg:col-span-2">
              <InfoPanel />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
