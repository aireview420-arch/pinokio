"use client";

import { Sparkles, Bot, TrendingUp } from "lucide-react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import RevealAnimation from "../reveal-animations";
import { cn } from "@/lib/utils";

type ExpertiseItem = {
  label: string;
  description: string;
};

type ExpertiseGroup = {
  title: string;
  icon: React.ReactNode;
  accent: string;
  items: ExpertiseItem[];
};

const GROUPS: ExpertiseGroup[] = [
  {
    title: "What Sets Me Apart",
    icon: <Sparkles size={26} />,
    accent: "from-fuchsia-500/20 to-fuchsia-500/0",
    items: [
      {
        label: "Engineering-Grade Systems Thinking",
        description:
          "Approaches creative and business problems like a systems architect, breaking down complex client funnels, operational bottlenecks, and product roadmaps into structured, repeatable workflows.",
      },
      {
        label: "Bridge Between Technical & Creative",
        description:
          "Possesses the rare ability to write modular automation logic, deploy API-driven pipelines, and simultaneously direct high-fidelity visual assets, storytelling, and brand identity.",
      },
      {
        label: "Methodical Execution & Reliability",
        description:
          "Prioritizes structure, clear deliverables, and solid data over vague promises, giving clients and stakeholders confidence in execution.",
      },
      {
        label: "Rapid Technology Adoption",
        description:
          "Consistently stays at the bleeding edge, mastering emerging AI media models, custom autonomous agent architectures, and ad-tech tooling ahead of the wider market.",
      },
      {
        label: "Product-Minded Commercial Focus",
        description:
          "Looks beyond isolated marketing tasks to evaluate the entire business engine — from onboarding mechanics and user retention to cost efficiency and unit economics.",
      },
    ],
  },
  {
    title: "AI Consulting",
    icon: <Bot size={26} />,
    accent: "from-emerald-500/20 to-emerald-500/0",
    items: [
      {
        label: "Workflow Architecture & Orchestration",
        description:
          "Designing multi-step, event-driven pipelines (n8n, Make, custom webhooks) that connect CRMs, databases, and messaging endpoints.",
      },
      {
        label: "Custom AI Agent & Chatbot Deployment",
        description:
          'Implementing retrieval-augmented generation (RAG), tool-calling agents, autonomous customer-facing bots, and internal "digital employee" systems.',
      },
      {
        label: "Business Process Audit & ROI Scoping",
        description:
          "Evaluating a client's manual operations, identifying high-friction tasks, and calculating clear cost-per-hour and time-saved projections before building.",
      },
      {
        label: "Generative Media Production Pipelines",
        description:
          "Integrating high-tier image, voice, and video synthesis engines into automated creative pipelines for marketing, prototyping, and asset scaling.",
      },
      {
        label: "System Integration & API Management",
        description:
          "Securely managing endpoints, token consumption, rate limits, and third-party SaaS integrations without creating brittle architectures.",
      },
      {
        label: "Change Management & Client Enablement",
        description:
          "Translating technical AI capabilities into plain-English value propositions and training client teams to adopt and manage new automated systems.",
      },
    ],
  },
  {
    title: "Senior Digital Marketing",
    icon: <TrendingUp size={26} />,
    accent: "from-amber-500/20 to-amber-500/0",
    items: [
      {
        label: "Full-Funnel Strategy & Attribution",
        description:
          "Architecting connected acquisition, activation, and retention engines while tracking cross-platform conversion data across complex user journeys.",
      },
      {
        label: "Advanced Ad-Tech & Paid Media Governance",
        description:
          "Managing enterprise tracking tools (Campaign Manager 360, Meta Ads Manager, GA4), server-side tagging, and optimizing blended CAC/ROAS.",
      },
      {
        label: "Data Synthesis & Performance Analytics",
        description:
          "Moving past surface metrics (clicks, impressions) to analyze customer lifetime value (LTV), cohort retention, and churn drivers.",
      },
      {
        label: "High-Impact Creative Direction",
        description:
          "Developing structured testing frameworks for ad creatives, hooks, landing page variants, and persuasive copywriting tailored to specific audience segments.",
      },
      {
        label: "MarTech Stack Optimization",
        description:
          "Unifying email/SMS flows, lead enrichment tools, and CRM pipelines to maximize conversion speed and minimize lead leakage.",
      },
      {
        label: "Commercial Positioning & Go-To-Market (GTM)",
        description:
          "Conducting competitor gap analyses, crafting sharp market positioning, and launching new digital products with clear validation metrics.",
      },
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <SectionWrapper
      id="expertise"
      className="flex flex-col items-center justify-center min-h-fit py-20 md:py-32"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="expertise"
          title="Expertise"
          desc="Strategy, creativity, and AI — working together."
          className="mb-14 md:mb-20 mt-0 relative"
        />

        <div className="flex flex-col gap-16">
          {GROUPS.map((group, gi) => (
            <div key={group.title}>
              <RevealAnimation delay={gi * 0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-zinc-800/80 border border-zinc-700/60 shrink-0">
                    {group.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
              </RevealAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item, i) => (
                  <RevealAnimation key={item.label} delay={gi * 0.1 + i * 0.05}>
                    <div
                      className={cn(
                        "relative h-full rounded-2xl border border-zinc-700/60 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md p-5",
                        "shadow-lg hover:border-zinc-500/60 transition-colors duration-300"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-x-0 top-0 h-14 rounded-t-2xl bg-gradient-to-b pointer-events-none",
                          group.accent
                        )}
                      />
                      <div className="relative">
                        <h4 className="text-sm font-semibold text-foreground mb-1.5">
                          {item.label}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExpertiseSection;
