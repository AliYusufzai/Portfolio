export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "vativeApps LLC",
    duration: "2025 — Present",
    description:
      "Lead cross-functional teams and mentor junior developers across multiple end-to-end projects at once. Migrated infrastructure to AWS — EKS, ECR, and ELB — with zero production downtime. Architected Aurora RDS Serverless to cut idle compute costs while keeping the database scalable. Own the full lifecycle: requirements, architecture, development, review, deployment, and post-launch optimization.",
  },
  {
    role: "Software Engineer",
    company: "Strugbits Solutions",
    duration: "2024 — 2025 (Contract)",
    description:
      "Turn slow, tangled codebases into fast, stable systems. Ship backend features for real client products, on schedule, in agile teams. Catch problems before they become downtime — then fix them for good.",
  },
  {
    role: "Software Engineer",
    company: "Array Digitals",
    duration: "2022 — 2024",
    description:
      "Built the backend for WeWrangle — real-time video chat with WebRTC + Socket.io, handling peer-to-peer signaling and session management. Developed the API layer for Personality Development, letting users build and publish personalized portfolio pages with dynamic templates. Designed REST APIs, database schemas, and third-party integrations across multiple products.",
  },
];
