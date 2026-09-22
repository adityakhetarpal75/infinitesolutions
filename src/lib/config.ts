/**
 * Central site configuration.
 *
 * Edit the values in this file to update contact details, WhatsApp number,
 * and other site-wide information. Every page and component reads from here
 * instead of hard-coding values, so you only need to change things once.
 */

export const siteConfig = {
  name: "Infinite Solutions",
  legalName: "Infinite Solutions",
  shortName: "Infinite Solutions",
  tagline: "Technology Solutions for Modern Businesses",
  description:
    "Infinite Solutions provides software development, AI, cloud and automation solutions for modern businesses.",

  // Domain and canonical URL used for SEO metadata, sitemap and robots.txt
  url: "https://www.infinitesolutionit.com",
  domain: "www.infinitesolutionit.com",

  // Business details
  location: "M-3/38, DLF Phase 2, Sector 25, Gurgaon, Haryana 122008",
  addressLocality: "Gurgaon",
  addressRegion: "Haryana",
  addressCountry: "India",

  email: "adityakhetarpal7@gmail.com",

  // Display format for phone number shown on the site
  phoneDisplay: "+91 9910191790",

  // WhatsApp click-to-chat configuration.
  // Digits only: country code + number, no +, spaces or hyphens.
  whatsappNumber: "919910191790",

  whatsappDefaultMessage:
    "Hello Infinite Solutions, I would like to know more about your IT services.",
  whatsappConsultationMessage:
    "Hello Infinite Solutions, I would like to request a consultation about your IT services.",

  social: {
    // Add social profile URLs here when available, e.g. linkedin: "https://linkedin.com/company/..."
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
