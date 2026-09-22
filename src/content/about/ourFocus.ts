import { Building2, Code2, Target, type LucideIcon } from "lucide-react";

// Text and cards for the "Our Focus" section on the About page.
export const ourFocus = {
  eyebrow: "Our Focus",
  title: "What we work on",
  areas: [
    {
      title: "Software Engineering",
      description:
        "Custom application development using Java, Spring Boot, React and Python, built with maintainability in mind.",
      icon: Code2,
    },
    {
      title: "Cloud",
      description:
        "Cloud architecture, migration and infrastructure work on AWS for reliable, well-structured deployments.",
      icon: Building2,
    },
    {
      title: "AI / ML",
      description:
        "Applied machine learning and generative AI, including RAG systems and AI agents, grounded in practical use cases.",
      icon: Target,
    },
    {
      title: "Business Automation",
      description:
        "Automating repetitive workflows and integrating systems to reduce manual operational overhead.",
      icon: Building2,
    },
  ] as { title: string; description: string; icon: LucideIcon }[],
};
