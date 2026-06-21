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
    description: "Next.js, modern cloud-native stacks",
  },
  {
    icon: Zap,
    title: "Workflow automation",
    description: "Your tools, actually talking to each other",
  },
  {
    icon: Bot,
    title: "AI-assisted systems",
    description: "Multi-agent pipelines, not gimmicks",
  },
  {
    icon: Layers,
    title: "Architecture & system design",
    description: "Built right the first time, documented, maintainable",
  },
];
