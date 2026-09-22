export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
}

/**
 * These are example projects / case studies used to illustrate the type of
 * work Infinite Solutions does. They are not tied to named clients, and no
 * client names, logos, revenue figures or performance claims are included.
 */
export const projects: Project[] = [
  {
    slug: "ai-powered-review-detection-system",
    title: "AI-Powered Review Detection System",
    category: "AI / Machine Learning",
    description:
      "A machine-learning system for identifying potentially deceptive or suspicious reviews using NLP and behavioral signals.",
    details: [
      "Text analysis using natural language processing techniques",
      "Behavioral signal analysis alongside text features",
      "Model evaluation focused on precision and recall trade-offs",
      "Designed as a supporting tool for human review, not a fully automated decision system",
    ],
    tech: ["Python", "NLP", "Machine Learning", "PyTorch"],
  },
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    category: "Generative AI / RAG",
    description:
      "A RAG-based knowledge assistant that retrieves relevant information from organizational documents and provides contextual responses.",
    details: [
      "Document ingestion and chunking pipeline",
      "Vector-based retrieval of relevant document sections",
      "Contextual response generation grounded in retrieved content",
      "Designed to reduce time spent searching internal documentation",
    ],
    tech: ["Python", "RAG", "LLM", "LangGraph", "LlamaIndex"],
  },
  {
    slug: "enterprise-java-microservices-platform",
    title: "Enterprise Java Microservices Platform",
    category: "Backend / Microservices",
    description:
      "A scalable backend platform using Java, Spring Boot, REST APIs and microservices architecture.",
    details: [
      "Service decomposition around business domains",
      "REST APIs for inter-service and client communication",
      "Containerized deployment for consistent environments",
      "Structured for independent scaling of individual services",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "Docker"],
  },
  {
    slug: "business-automation-platform",
    title: "Business Automation Platform",
    category: "Business Automation",
    description:
      "An automation solution designed to streamline repetitive business workflows and improve operational efficiency.",
    details: [
      "Mapping of manual, repetitive process steps",
      "Rule-based automation of routine tasks",
      "Integration with existing business tools",
      "Built with monitoring so workflows can be reviewed and adjusted",
    ],
    tech: ["Python", "Workflow Automation", "System Integration"],
  },
];
