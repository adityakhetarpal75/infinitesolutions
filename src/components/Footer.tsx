import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/config";
import { getWhatsAppLink } from "@/lib/whatsapp";

const serviceLinks = [
  { label: "Software Development", href: "/services#custom-software-development" },
  { label: "AI / Machine Learning", href: "/services#ai-machine-learning" },
  { label: "Generative AI", href: "/services#generative-ai" },
  { label: "Cloud & AWS", href: "/services#aws-cloud-solutions" },
  { label: "Business Automation", href: "/services#business-automation" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-navy-950 text-slate-300">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Logo theme="dark" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{siteConfig.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FaWhatsapp className="h-4 w-4 shrink-0 text-brand-400" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
