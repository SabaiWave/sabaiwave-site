import type { LucideIcon } from "lucide-react";
import { Globe, Zap, Bot, Layers } from "lucide-react";

export interface WhatWeBuildItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whatWeBuildItems: WhatWeBuildItem[] = [
  {
    icon: Globe,
    title: "Web apps & dashboards",
    description: "From MVP to internal tool. Fast, scalable Next.js apps you can actually hand off to your team.",
  },
  {
    icon: Zap,
    title: "Workflow automation",
    description: "Your tools, actually talking to each other. API integrations, scheduled jobs, and workflows that eliminate the manual stuff.",
  },
  {
    icon: Bot,
    title: "AI-assisted systems",
    description: "Multi-agent pipelines, not gimmicks. AI wired into real workflows where it saves time, not where it sounds impressive.",
  },
  {
    icon: Layers,
    title: "Architecture & system design",
    description: "Built right the first time. Schemas, service boundaries, and docs your next engineer will thank you for.",
  },
];
