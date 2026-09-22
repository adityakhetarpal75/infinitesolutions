import type { Metadata } from "next";
import PolicyContent from "@/components/privacy/PolicyContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, explaining how information submitted through this website is handled.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PolicyContent />;
}
