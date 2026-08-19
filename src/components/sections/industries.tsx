"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, UtensilsCrossed, Hotel, Cpu, Shirt } from "lucide-react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import RevealAnimation from "../reveal-animations";
import { SlidingNumber } from "../ui/shadcn-io/sliding-number";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  {
    name: "Real Estate",
    detail: "Coldwell Banker",
    icon: <Building2 size={26} />,
  },
  {
    name: "Food & Beverage",
    detail: "Brand & campaign strategy",
    icon: <UtensilsCrossed size={26} />,
  },
  {
    name: "Hotels & Accommodation",
    detail: "Hospitality marketing",
    icon: <Hotel size={26} />,
  },
  {
    name: "Electronics",
    detail: "Retail & product marketing",
    icon: <Cpu size={26} />,
  },
  {
    name: "Fashion",
    detail: "Brand & campaign strategy",
    icon: <Shirt size={26} />,
  },
];

const IndustriesSection = () => {
  const statRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      id="industries"
      className="flex flex-col items-center justify-center min-h-fit py-20 md:py-32"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="industries"
          title="Industries & Impact"
          desc="Real work, across real industries."
          className="mb-14 md:mb-20 mt-0 relative"
        />

        <div
          ref={statRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10"
        >
          <RevealAnimation>
            <StatTile
              value={inView ? 100 : 0}
              suffix="+"
              label="AI workflows built with n8n & sold online"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <StatTile
              value={inView ? 5 : 0}
              suffix="+"
              label="Industries served"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <StatTile
              value={inView ? 1 : 0}
              suffix=""
              label="Agency built from the ground up — Pyramid Pixel"
              isText
            />
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <RevealAnimation key={industry.name} delay={i * 0.1}>
              <div
                className={cn(
                  "h-full rounded-2xl border border-zinc-700/60 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md p-6",
                  "shadow-lg hover:border-zinc-500/60 hover:-translate-y-1 transition-all duration-300",
                  "flex flex-col items-center text-center gap-3"
                )}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-800/80 border border-zinc-700/60">
                  {industry.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {industry.name}
                </h3>
                <p className="text-xs text-muted-foreground">{industry.detail}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Detailed campaign case studies coming soon.
        </p>
      </div>
    </SectionWrapper>
  );
};

const StatTile = ({
  value,
  suffix,
  label,
  isText,
}: {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
}) => (
  <div className="h-full rounded-2xl border border-zinc-700/60 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center gap-2">
    {isText ? (
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        Pyramid Pixel
      </div>
    ) : (
      <div className="flex items-baseline text-4xl md:text-5xl font-bold text-foreground">
        <SlidingNumber number={value} />
        <span>{suffix}</span>
      </div>
    )}
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export default IndustriesSection;
