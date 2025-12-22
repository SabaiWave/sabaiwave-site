// src/data/about.ts
import type { AboutSection } from "@/types";

export const aboutSections: AboutSection[] = [
  {
    title: "Pragmatic Engineering",
    description:
      "We build modern web systems with a focus on clarity, performance, and long-term maintainability. No buzzwords, no over-engineering—just clean architecture that ships.",
    bullets: [
      "Production-grade Next.js, TypeScript, and GraphQL",
      "Clear boundaries between frontend, backend, and infrastructure",
      "Designed for iteration, not rewrites",
    ],
  },
  {
    title: "Automation & Cloud-Native Systems",
    description:
      "We help teams move faster by removing manual work and fragile deployments. From CI/CD to cloud infrastructure, we simplify the path to production.",
    bullets: [
      "Serverless deployments on Vercel, AWS, or Azure",
      "Workflow automation via Zapier, Make, or custom APIs",
      "Reliable CI/CD pipelines with automated testing",
    ],
  },
  {
    title: "Security, Reliability, and Trust",
    description:
      "Your product and customers deserve systems that are secure by default and observable in production.",
    bullets: [
      "Security-first infrastructure and access controls",
      "Monitoring, logging, and alerting baked in",
      "Direct communication—no black boxes, no handoffs",
    ],
  },
];
