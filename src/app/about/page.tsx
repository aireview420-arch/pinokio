"use client";
import React, { useEffect, useState } from "react";
import {
  SiCanva,
  SiGoogleads,
  SiGoogleanalytics,
  SiHootsuite,
  SiHubspot,
  SiInstagram,
  SiMailchimp,
  SiMeta,
  SiN8N,
  SiOpenai,
  SiTiktok,
  SiWhatsapp,
  SiWordpress,
  SiZapier,
} from "react-icons/si";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import Script from "next/script";
import { config } from "@/data/config";
import { getAvatarUrl } from "@/lib/avatar";

const CONTACT_LINKS = [
  {
    name: "WhatsApp",
    content: "Message directly",
    href: config.social.whatsapp,
    icon: <SiWhatsapp />,
  },
  {
    name: "Instagram",
    href: config.social.instagramPersonal,
    content: "@peteradventureseeker",
    icon: <SiInstagram />,
  },
  {
    name: "Pyramid Pixel",
    href: config.social.instagramBrand,
    content: "@pyramidpixel",
    icon: <SiInstagram />,
  },
];

const TOOLS = [
  { name: "Meta Ads", content: "Facebook & Instagram advertising campaigns.", icon: <SiMeta size={50} color="#0866ff" /> },
  { name: "Google Ads", content: "Search, display & performance campaigns.", icon: <SiGoogleads size={50} color="#4285f4" /> },
  { name: "Google Analytics", content: "Tracking, attribution & performance data.", icon: <SiGoogleanalytics size={50} color="#e37400" /> },
  { name: "TikTok Ads", content: "Short-form video advertising.", icon: <SiTiktok size={50} color="#fff" /> },
  { name: "OpenAI / ChatGPT", content: "AI-powered content & automation.", icon: <SiOpenai size={50} color="#fff" /> },
  { name: "n8n", content: "Building & selling 100+ AI workflows.", icon: <SiN8N size={50} color="#ea4b71" /> },
  { name: "Zapier", content: "Automating marketing workflows.", icon: <SiZapier size={50} color="#ff4a00" /> },
  { name: "HubSpot", content: "CRM & marketing pipelines.", icon: <SiHubspot size={50} color="#ff7a59" /> },
  { name: "Mailchimp", content: "Email marketing & automation.", icon: <SiMailchimp size={50} color="#ffe01b" /> },
  { name: "Canva", content: "Fast, on-brand creative production.", icon: <SiCanva size={50} color="#00c4cc" /> },
  { name: "Hootsuite", content: "Social scheduling & management.", icon: <SiHootsuite size={50} color="#143059" /> },
  { name: "WordPress", content: "Landing pages & content sites.", icon: <SiWordpress size={50} color="#21759b" /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-zinc-200 pt-20 lg:pt-24 pb-16">
      <Script
        id="ld-json-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "About " + config.author,
            url: `${config.site}/about`,
            description: config.description.short,
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: config.author,
              email: config.email,
              url: config.site,
            },
            publisher: {
              "@type": "Person",
              name: config.author,
            },
          }),
        }}
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-9">
        <aside className="w-full xl:max-w-1/3 xl:col-span-1 xl:justify-self-start">
          <div className="p-5 sm:p-7 lg:p-8 rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md shadow-lg">
            <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-4 sm:gap-6">
              <div className="flex justify-center items-center w-full max-w-[180px] bg-zinc-800 rounded-xl p-4 sm:p-5">
                <img
                  className="rounded-full w-[110px] sm:w-[130px] md:w-[150px] xl:w-[170px] aspect-square bg-zinc-800 shadow-inner"
                  alt="Peter Hany"
                  src={getAvatarUrl("Peter Hany Pyramid Pixel")}
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left xl:items-center xl:text-center">
                <p className="text-lg sm:text-xl md:text-2xl">Peter Hany</p>
                <div className="text-[11px] sm:text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Senior Marketing &amp; Advertising | AI Specialist &amp; Consultant
                </div>
              </div>
            </div>
            <div className="mt-8">
              <hr className="my-6 border-zinc-700" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-14 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border rounded-md transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                      href={link.href}
                    >
                      <div className="w-8 flex items-center justify-center text-lg">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs text-zinc-500 truncate">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="w-full xl:max-w-2/3 xl:col-span-2 xl:justify-self-end">
          <div className="p-4 sm:p-6 lg:p-8 border border-zinc-700/70 rounded-2xl bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md shadow-lg space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">About me</h1>
              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                Hey there! I&apos;m Peter Hany, founder of Pyramid Pixel — a Senior Marketing &amp; Advertising specialist and AI consultant. I&apos;ve led marketing across real estate (Coldwell Banker), food &amp; beverage, hotels &amp; accommodation, electronics, and fashion — and built and sold 100+ n8n-powered AI workflows online.
              </p>
              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                Whether it&apos;s planning a campaign, building an AI-powered workflow, or rethinking a brand&apos;s strategy from the ground up, I combine outside-the-box creative thinking with data-driven execution to get results that actually move the needle.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">Stuff I use</h2>
              <div>
                {!toolsLoaded ? (
                  <div className="h-[120px] bg-zinc-800/40 rounded-lg animate-pulse" />
                ) : (
                  <Splide
                  options={{
                    type: "loop",
                    interval: 2200,
                    autoplay: true,
                    pagination: false,
                    speed: 1200,
                    perPage: 4,
                    perMove: 1,
                    gap: "1.25rem",
                    breakpoints: {
                      1280: { perPage: 3 },
                      1024: { perPage: 2 },
                      768: { perPage: 2 },
                      640: { perPage: 1 },
                    },
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                    aria-label="Tools"
                  >
                    {TOOLS.map((tool) => (
                      <SplideSlide key={tool.name}>
                        <div className="flex flex-col rounded-lg border border-zinc-700 bg-zinc-800 p-4 sm:p-5 justify-center items-center h-[170px] sm:h-[190px] md:h-[200px] text-center gap-2 shadow-md">
                          <div className="mb-2">{tool.icon}</div>
                          <div className="text-base sm:text-lg">{tool.name}</div>
                          <div className="text-xs sm:text-sm text-zinc-500 leading-snug">
                            {tool.content}
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
