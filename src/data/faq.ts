import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} secure?`,
    answer:
      "Absolutely. All projects follow modern security best practices — encrypted connections, secure API keys, and least-privilege access for data and infrastructure.",
  },
  {
    question: `Can I work with ${siteDetails.siteName} remotely?`,
    answer:
      `Yes. ${siteDetails.siteName} collaborates fully remotely with clients worldwide, using async tools and cloud environments for seamless delivery.`,
  },
  {
    question: "What kind of projects does Sabai Wave take on?",
    answer:
      "We handle web applications, API development, automation workflows, and system integrations for startups and small to midsize businesses.",
  },
  {
    question: "Do I need technical experience to work with you?",
    answer:
      "Not at all. We communicate in plain English and guide you through the technical decisions so you can focus on business outcomes.",
  },
  {
    question: "How can I get started?",
    answer:
      "Reach out through our contact form or email us directly. We'll schedule a short discovery call to understand your goals and next steps.",
  },
];
