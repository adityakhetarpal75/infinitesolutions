import {
  Code2,
  Coffee,
  Leaf,
  Network,
  Plug,
  LayoutDashboard,
  FileCode2,
  BrainCircuit,
  Sparkles,
  Search,
  Bot,
  Cloud,
  ArrowRightLeft,
  Workflow,
  Puzzle,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory =
  | "Software Development"
  | "AI & Data"
  | "Cloud & Infrastructure"
  | "Business Solutions";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Software Development",
    description:
      "End-to-end design and development of custom applications tailored to your business processes, built for reliability and long-term maintainability.",
    capabilities: [
      "Requirement analysis and technical planning",
      "Backend and frontend development",
      "Clean, documented, maintainable code",
      "Ongoing support after delivery",
    ],
    icon: Code2,
  },
  {
    slug: "java-development",
    title: "Java Development",
    category: "Software Development",
    description:
      "Robust backend systems and enterprise applications built with Java, following industry-standard design patterns and coding practices.",
    capabilities: [
      "Core Java and object-oriented design",
      "Enterprise application development",
      "Performance-focused implementation",
      "Integration with existing systems",
    ],
    icon: Coffee,
  },
  {
    slug: "spring-boot-development",
    title: "Spring Boot Development",
    category: "Software Development",
    description:
      "Production-grade backend services built on Spring Boot, designed for scalability, security and clean separation of concerns.",
    capabilities: [
      "REST API and service layer development",
      "Spring Security and authentication",
      "Database integration with JPA/Hibernate",
      "Configuration for multiple environments",
    ],
    icon: Leaf,
  },
  {
    slug: "microservices",
    title: "Microservices",
    category: "Software Development",
    description:
      "Architecture and development of independently deployable microservices that help your systems scale and evolve without tight coupling.",
    capabilities: [
      "Service decomposition and boundaries",
      "Inter-service communication",
      "Containerized deployment",
      "Monitoring and fault isolation",
    ],
    icon: Network,
  },
  {
    slug: "rest-api-development",
    title: "REST API Development",
    category: "Software Development",
    description:
      "Well-structured, documented REST APIs that make it easy for your applications, partners and mobile apps to exchange data securely.",
    capabilities: [
      "Resource-oriented API design",
      "Authentication and rate limiting",
      "API documentation",
      "Versioning strategy",
    ],
    icon: Plug,
  },
  {
    slug: "react-web-applications",
    title: "React Web Applications",
    category: "Software Development",
    description:
      "Modern, responsive web applications built with React, focused on performance, accessibility and a clean user experience.",
    capabilities: [
      "Component-based frontend architecture",
      "Responsive, mobile-first UI",
      "State management",
      "Integration with backend APIs",
    ],
    icon: LayoutDashboard,
  },
  {
    slug: "python-development",
    title: "Python Development",
    category: "Software Development",
    description:
      "Python-based applications, scripts and services for data processing, automation, backend systems and AI/ML workloads.",
    capabilities: [
      "Backend services and scripting",
      "Data processing pipelines",
      "Integration with AI/ML libraries",
      "Automation tooling",
    ],
    icon: FileCode2,
  },
  {
    slug: "ai-machine-learning",
    title: "AI / Machine Learning",
    category: "AI & Data",
    description:
      "Practical machine learning solutions designed around your data and business problem, from model design to evaluation.",
    capabilities: [
      "Problem framing and data assessment",
      "Model design and training",
      "Evaluation and validation",
      "Deployment considerations",
    ],
    icon: BrainCircuit,
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    category: "AI & Data",
    description:
      "Applied generative AI solutions using modern large language models to support content, automation and decision-support use cases.",
    capabilities: [
      "Use-case scoping and feasibility",
      "Prompt design and evaluation",
      "Integration with business systems",
      "Responsible use guidelines",
    ],
    icon: Sparkles,
  },
  {
    slug: "rag-applications",
    title: "RAG Applications",
    category: "AI & Data",
    description:
      "Retrieval-augmented generation systems that connect language models to your own documents and data for grounded, contextual responses.",
    capabilities: [
      "Document ingestion and indexing",
      "Retrieval pipeline design",
      "Vector search integration",
      "Response grounding and citations",
    ],
    icon: Search,
  },
  {
    slug: "ai-agents-multi-agent-systems",
    title: "AI Agents / Multi-Agent Systems",
    category: "AI & Data",
    description:
      "Task-oriented AI agents and coordinated multi-agent workflows that can plan, use tools and carry out multi-step processes.",
    capabilities: [
      "Agent workflow design",
      "Tool and API integration",
      "Multi-agent orchestration",
      "Guardrails and monitoring",
    ],
    icon: Bot,
  },
  {
    slug: "aws-cloud-solutions",
    title: "AWS Cloud Solutions",
    category: "Cloud & Infrastructure",
    description:
      "Design and implementation of cloud infrastructure on AWS, built around reliability, security and cost awareness.",
    capabilities: [
      "Cloud architecture design",
      "Infrastructure setup and configuration",
      "Security best practices",
      "Cost-conscious resource planning",
    ],
    icon: Cloud,
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    category: "Cloud & Infrastructure",
    description:
      "Structured migration of existing applications and data to the cloud, planned to minimize downtime and disruption.",
    capabilities: [
      "Migration readiness assessment",
      "Phased migration planning",
      "Data transfer and validation",
      "Post-migration support",
    ],
    icon: ArrowRightLeft,
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    category: "Business Solutions",
    description:
      "Automation of repetitive workflows and manual processes to reduce operational overhead and improve consistency.",
    capabilities: [
      "Process mapping and analysis",
      "Workflow automation design",
      "Integration with existing tools",
      "Monitoring and iteration",
    ],
    icon: Workflow,
  },
  {
    slug: "system-integration",
    title: "System Integration",
    category: "Business Solutions",
    description:
      "Connecting disparate software systems, tools and data sources so information flows reliably across your business.",
    capabilities: [
      "Integration architecture design",
      "API and data mapping",
      "Middleware and connectors",
      "Testing and validation",
    ],
    icon: Puzzle,
  },
  {
    slug: "application-maintenance",
    title: "Application Maintenance",
    category: "Business Solutions",
    description:
      "Ongoing maintenance, monitoring and improvement of existing applications to keep them stable, secure and up to date.",
    capabilities: [
      "Bug fixes and stability improvements",
      "Dependency and security updates",
      "Performance monitoring",
      "Incremental enhancements",
    ],
    icon: Wrench,
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Software Development",
  "AI & Data",
  "Cloud & Infrastructure",
  "Business Solutions",
];
