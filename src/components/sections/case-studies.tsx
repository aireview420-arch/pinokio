"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp, BookOpen } from "lucide-react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import RevealAnimation from "../reveal-animations";
import { cn } from "@/lib/utils";

type CaseStudy = {
  title: string;
  category: string;
  stat: string;
  description: string;
  image?: string;
  isDemo?: boolean;
  href?: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Redbubble — Fashion & Apparel",
    category: "Paid Social · Meta Ads",
    stat: "1,935 orders · 483,750 EGP · 7.0x ROAS",
    description: "Creative direction and Meta Ads management for a global print-on-demand fashion campaign.",
    image: "/assets/case-studies/redbubble-meta-ads.png",
  },
  {
    title: 'Redbubble — "Find Your Thing"',
    category: "Creative Direction",
    stat: "Global apparel campaign",
    description: "Ad creative directed and produced for the same 7.0x ROAS campaign.",
    image: "/assets/case-studies/redbubble-starry-night.png",
  },
  {
    title: 'Redbubble — "Uncommon Designs"',
    category: "Creative Direction",
    stat: "Global apparel campaign",
    description: "Second creative direction from the same fashion campaign line.",
    image: "/assets/case-studies/redbubble-uncommon-designs.png",
  },
  {
    title: "Testimonial, Referral & Deal-Onboarding Automation",
    category: "n8n Workflow",
    stat: "5 connected automations · 30+ nodes",
    description: "One canvas orchestrating NPS-based referral outreach (GPT-4 drafted), automated invoicing, and HubSpot deal-to-onboarding handoff — end to end, no manual steps.",
    image: "/assets/case-studies/n8n-testimonial-workflow.png",
  },
  {
    title: "Finance & Reporting Automation",
    category: "n8n Workflow",
    stat: "Zero manual reconciliation",
    description: "Reconciles budget vs. actuals, generates and stores invoices as PDF, and reports variance straight to Slack — replacing a manual weekly finance task entirely.",
    image: "/assets/case-studies/n8n-finance-workflow.png",
  },
  {
    title: "Electronics — Paid Social",
    category: "Meta Ads",
    stat: "200 → 1,599 orders · 7.0x ROAS",
    description: "Scaled a baseline campaign into an optimized structure, growing order volume 8x at held ROAS.",
  },
  {
    title: "E-commerce Growth",
    category: "Shopify · Lifecycle Marketing",
    stat: "+130% gross sales · 24.98K sessions",
    description: "Store performance growth via automated abandoned-checkout recovery and campaign work.",
  },
  {
    title: "Social Growth",
    category: "Instagram",
    stat: "59,237 views · +2,403.7% reach",
    description: "Organic content and reach growth across posts, stories, and reels for a client account.",
    image: "/assets/case-studies/instagram-insights.png",
  },
  {
    title: "SIRA — Travel & Hospitality Concept",
    category: "Product & Brand",
    stat: '"Your Journey, Simplified"',
    description: "Brand and app concept spanning hotel, dining, transport, and travel planning.",
    image: "/assets/case-studies/sira-app-mockup.png",
  },
  {
    title: "AI Lead Qualification & CRM Routing",
    category: "n8n Workflow",
    stat: "Concept build",
    description: "Enriches inbound leads, scores them with GPT-4, then routes qualified leads to HubSpot + Slack and the rest into a Mailchimp nurture sequence.",
    image: "/assets/case-studies/demo-lead-qualification-workflow.png",
    isDemo: true,
  },
  {
    title: "Aurora Coffee Co. — Campaign Concept",
    category: "Creative Direction",
    stat: '"Your Morning, Elevated"',
    description: "Fictional brand concept built to demonstrate ad creative direction for a food & beverage launch.",
    image: "/assets/case-studies/demo-aurora-coffee-ad.png",
    isDemo: true,
  },
  {
    title: "Experience Engineering: Beyond the Product",
    category: "Strategy Write-Up",
    stat: "Coffee · Juice · Bakery · Fitness",
    description: "A strategic breakdown of how F&B and wellness spaces can engineer environment, ritual, and psychology to build real customer loyalty. Read the full piece.",
    href: "/blogs/fb-experience-engineering",
  },
];

const CaseStudiesSection = () => {
  return (
    <SectionWrapper
      id="case-studies"
      className="flex flex-col items-center justify-center min-h-fit py-20 md:py-32"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="case-studies"
          title="Selected Work"
          desc="Real campaigns, real workflows, real results."
          className="mb-14 md:mb-20 mt-0 relative"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((item, i) => {
            const CardInner = (
              <div
                className={cn(
                  "h-full rounded-2xl border border-zinc-700/60 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md overflow-hidden",
                  "shadow-lg hover:border-zinc-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                )}
              >
                {item.image ? (
                  <div className="relative w-full h-52 bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    {item.isDemo && (
                      <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide bg-black/70 text-amber-300 border border-amber-300/40 rounded-full px-2.5 py-1 backdrop-blur-sm">
                        Concept
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-52 flex items-center justify-center bg-zinc-900/60">
                    {item.href ? (
                      <BookOpen size={40} className="text-zinc-600" />
                    ) : (
                      <TrendingUp size={40} className="text-zinc-600" />
                    )}
                  </div>
                )}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/90">
                    {item.stat}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
            return (
              <RevealAnimation key={item.title + i} delay={(i % 3) * 0.1}>
                {item.href ? (
                  <Link href={item.href} className="block h-full">
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudiesSection;
