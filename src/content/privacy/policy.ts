import { siteConfig } from "@/lib/config";

/**
 * The full text of the Privacy Policy page ("/privacy").
 * Edit the paragraphs below — the layout lives in
 * src/components/privacy/PolicyContent.tsx.
 */
export const policy = {
  title: "Privacy Policy",
  lastUpdated: "September 2026",

  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        `This Privacy Policy explains how ${siteConfig.name} ("we", "us", "our") handles information in connection with your use of the website at ${siteConfig.domain} (the "Website"). We are a partnership firm based in ${siteConfig.location}.`,
      ],
    },
    {
      heading: "Information You Provide",
      paragraphs: [
        `The Website includes a contact form that asks for your name, email address, phone number, company name, service of interest and message. Submitting this form currently opens your own email application with your message pre-filled, addressed to ${siteConfig.email}. The information you enter is only transmitted if and when you choose to send that email — it is not collected or stored by this Website or by any server we operate.`,
        "If you contact us directly via WhatsApp or email, the information you share with us in that conversation is handled in accordance with the ordinary practices of those platforms (WhatsApp or your email provider) and is used by us only to respond to your inquiry.",
      ],
    },
    {
      heading: "Cookies and Analytics",
      paragraphs: [
        "This Website does not currently use cookies, tracking scripts, or third-party analytics services. If this changes in the future, this Privacy Policy will be updated to reflect that.",
      ],
    },
    {
      heading: "How We Use Information",
      paragraphs: [
        "Any information you send us — whether by email or WhatsApp — is used solely to respond to your inquiry and to discuss the services you are interested in. We do not sell or share your information with third parties for marketing purposes.",
      ],
    },
    {
      heading: "Third-Party Links",
      paragraphs: [
        "The Website may contain links to third-party services such as WhatsApp. We are not responsible for the privacy practices of those third-party services, and we encourage you to review their respective privacy policies.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time as the Website and our services evolve. Changes will be posted on this page.",
      ],
    },
  ],

  contactSection: {
    heading: "Contact Us",
    before: "If you have questions about this Privacy Policy, please contact us at",
    after: `or via WhatsApp at ${siteConfig.phoneDisplay}.`,
  },
};
