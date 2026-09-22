import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "./Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CTA({
  title = "Let's talk about your project",
  description = "Tell us what you're trying to build. We'll help you figure out the right approach.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="max-w-xl text-lg text-slate-300">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Get Started
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FaWhatsapp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
