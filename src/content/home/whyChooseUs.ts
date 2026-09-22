import {
  Handshake,
  Code,
  ShieldCheck,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

// Text and cards for the "Why Choose Us" section on the Home page.
export const whyChooseUs = {
  eyebrow: "Why Choose Us",
  title: "Why businesses work with Infinite Solutions",
  reasons: [
    {
      title: "Direct partnership",
      description:
        "As a partnership firm, you work directly with the people responsible for your project — no layers of account management.",
      icon: Handshake,
    },
    {
      title: "Clean, maintainable code",
      description:
        "We build software that's documented and structured to be maintained and extended over time, not just shipped.",
      icon: Code,
    },
    {
      title: "Honest communication",
      description:
        "We explain what's realistic, what trade-offs exist, and what a solution actually requires — no overpromising.",
      icon: MessagesSquare,
    },
    {
      title: "Security-conscious development",
      description:
        "We follow secure development practices and avoid exposing sensitive data or credentials in the systems we build.",
      icon: ShieldCheck,
    },
  ] as { title: string; description: string; icon: LucideIcon }[],
};
