import {
  FiCpu,
  FiCloud,
  FiZap,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiSettings,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Modern Development",
    description:
      "Build fast, scalable web apps with clean architecture and production-grade code. Sabai Wave delivers pragmatic engineering—no bloat, no buzzwords.",
    bullets: [
      {
        title: "Full-Stack Expertise",
        description:
          "Next.js, TypeScript, GraphQL, and cloud-ready APIs built for long-term maintainability.",
        icon: <FiCode size={26} />,
      },
      {
        title: "Performance-Driven",
        description:
          "Optimized builds, caching, and serverless deployment for lightning-fast load times.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Scalable by Design",
        description:
          "Clean, modular systems that grow with your product—no rewrites required.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Cloud & Automation",
    description:
      "Move faster with intelligent automation and reliable cloud infrastructure. We simplify DevOps so you can focus on building value.",
    bullets: [
      {
        title: "Smart Integrations",
        description:
          "Automate workflows with Zapier, Make, or custom API bridges that save hours every week.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "Serverless & Cloud-Native",
        description:
          "Deploy seamlessly to Vercel, AWS, or Azure with zero-maintenance pipelines.",
        icon: <FiCloud size={26} />,
      },
      {
        title: "CI/CD Confidence",
        description:
          "Automated testing and deployment so your code is always production-ready.",
        icon: <FiCpu size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Security & Reliability",
    description:
      "Your systems, data, and customers deserve enterprise-grade protection. Sabai Wave follows modern best practices end-to-end.",
    bullets: [
      {
        title: "Hardened Infrastructure",
        description:
          "Security-first setups with TLS, firewalls, and least-privilege access policies.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Monitoring & Alerts",
        description:
          "Stay ahead of incidents with uptime monitoring and automated health checks.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Collaboration & Transparency",
        description:
          "Direct access to your engineers—clear reporting, no black boxes.",
        icon: <FiUsers size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
