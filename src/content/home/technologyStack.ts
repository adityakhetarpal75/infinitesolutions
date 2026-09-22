import {
  SiSpringboot,
  SiApachekafka,
  SiReact,
  SiPython,
  SiPytorch,
  SiDocker,
  SiKubernetes,
  SiOpensearch,
} from "react-icons/si";
import {
  Network,
  Braces,
  BrainCog,
  Sparkles,
  Database,
  Coffee,
  Cloud,
  GitBranch,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType | LucideIcon;
}

export interface TechGroup {
  group: string;
  items: TechItem[];
}

// Text and badges for the "Technology Stack" section on the Home page.
// Only shown on the Home page, so everything for it lives in this one file.
export const technologyStack = {
  eyebrow: "Technology Stack",
  title: "Technologies we work with",
  description:
    "A modern, proven stack spanning backend engineering, frontend development, AI/ML and cloud infrastructure.",
  groups: [
    {
      group: "Backend & Architecture",
      items: [
        { name: "Java", icon: Coffee },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "Microservices", icon: Network },
        { name: "REST APIs", icon: Braces },
        { name: "Kafka", icon: SiApachekafka },
      ],
    },
    {
      group: "Frontend",
      items: [{ name: "React", icon: SiReact }],
    },
    {
      group: "AI & Machine Learning",
      items: [
        { name: "Python", icon: SiPython },
        { name: "PyTorch", icon: SiPytorch },
        { name: "BERT", icon: BrainCog },
        { name: "Generative AI", icon: Sparkles },
        { name: "RAG", icon: Database },
        { name: "LLM", icon: BrainCog },
        { name: "LangGraph", icon: GitBranch },
        { name: "LlamaIndex", icon: Layers },
      ],
    },
    {
      group: "Cloud & Infrastructure",
      items: [
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "OpenSearch", icon: SiOpensearch },
      ],
    },
  ] as TechGroup[],
};
