import {
  BrainCircuit,
  Sparkles,
  Search,
  Bot,
  Workflow,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";

// Text and cards for the "AI & Cloud" section on the Home page.
export const aiAndCloud = {
  eyebrow: "AI & Cloud",
  title: "AI capabilities, applied practically",
  description:
    "We work with modern AI techniques and apply them where they create real, measurable value — without overselling what AI can do.",
  capabilities: [
    {
      title: "Machine Learning",
      description:
        "Practical ML models built around your specific data and business problem.",
      icon: BrainCircuit,
    },
    {
      title: "Natural Language Processing",
      description:
        "Text analysis, classification and understanding applied to real business content.",
      icon: MessageSquareText,
    },
    {
      title: "Generative AI",
      description:
        "Applied use of modern language models for content, support and decision workflows.",
      icon: Sparkles,
    },
    {
      title: "RAG (Retrieval-Augmented Generation)",
      description:
        "Language models grounded in your own documents and data for contextual answers.",
      icon: Search,
    },
    {
      title: "AI Agents & Multi-Agent Systems",
      description:
        "Agents that plan, use tools and coordinate to carry out multi-step tasks.",
      icon: Bot,
    },
    {
      title: "AI-Powered Automation",
      description:
        "Combining AI models with workflow automation to reduce manual effort.",
      icon: Workflow,
    },
  ] as { title: string; description: string; icon: LucideIcon }[],
};
