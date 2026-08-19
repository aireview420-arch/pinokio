"use client";

import { Compass, Sparkles, Brain, Rocket } from "lucide-react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import RevealAnimation from "../reveal-animations";
import { cn } from "@/lib/utils";

type ExpertiseCategory = {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: string[];
};

const CATEGORIES: ExpertiseCategory[] = [
  {
    title: "Strategy & Insight",
    icon: <Compass size={28} />,
    accent: "from-blue-500/20 to-blue-500/0",
    skills: [
      "Market & Competitor Analysis",
      "Brand Positioning & Strategy",
      "Strategic Planning & Execution",
      "Consumer & Audience Research",
      "Data-Driven Decision Making",
    ],
  },
  {
    title: "Creative & Content",
    icon: <Sparkles size={28} />,
    accent: "from-fuchsia-500/20 to-fuchsia-500/0",
    skills: [
      "Outside-the-Box Creative Ideation",
      "Copywriting & Storytelling",
      "Content Strategy",
      "Creative Direction",
      "Campaign Concepting",
    ],
  },
  {
    title: "AI & Automation",
    icon: <Brain size={28} />,
    accent: "from-emerald-500/20 to-emerald-500/0",
    skills: [
      "Prompt Engineering",
      "n8n Workflow Automation (100+ built & sold)",
      "AI Tool Integration & Consulting",
      "Process Optimization",
      "Custom AI Agent Design",
    ],
  },
  {
    title: "Growth & Performance",
    icon: <Rocket size={28} />,
    accent: "from-amber-500/20 to-amber-500/0",
    skills: [
      "Online & Offline Campaign Management",
      "Paid Social (Meta, TikTok Ads)",
      "Google Ads & SEM",
      "Performance Analytics & Reporting",
      "Cross-Channel Growth Strategy",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((category, i) => (
            <RevealAnimation key={category.title} delay={i * 0.1}>
              <div
                className={cn(
                  "relative h-full rounded-2xl border border-zinc-700/60 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md p-6",
                  "shadow-lg hover:border-zinc-500/60 hover:-translate-y-1 transition-all duration-300"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-24 rounded-t-2xl bg-gradient-to-b pointer-events-none",
                    category.accent
                  )}
                />
                <div className="relative flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-800/80 border border-zinc-700/60">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground leading-snug flex gap-2"
                      >
                        <span className="text-zinc-500">—</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExpertiseSection;
