// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
// NOTE: the `name` field on every entry below MUST stay exactly as-is —
// it matches a keycap object baked into public/assets/skills-keyboard.spline.
// Only label / shortDescription / color / icon are safe to restyle freely;
// the physical keycap graphic itself can only change inside Spline's editor.
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "Claude",
    shortDescription: "the AI I talk strategy and copy with 🤝✨",
    color: "#d97757",
    icon: "https://cdn.simpleicons.org/anthropic",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "ChatGPT",
    shortDescription: "fast drafts, brainstorms, and idea sparring 💬⚡",
    color: "#10a37f",
    icon: "https://cdn.simpleicons.org/openai",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "Midjourney",
    shortDescription: "campaign visuals that stop the scroll 🎨🖼️",
    color: "#e34c26",
    icon: "https://cdn.simpleicons.org/midjourney",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "Flow",
    shortDescription: "AI filmmaking for ads that actually move 🎬🌀",
    color: "#4285f4",
    icon: "https://cdn.simpleicons.org/googlegemini",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Gemini",
    shortDescription: "research, planning, and Google-ecosystem magic ✨🔎",
    color: "#4285f4",
    icon: "https://cdn.simpleicons.org/googlegemini",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Runway",
    shortDescription: "AI video editing and generation, on fast-forward 🎥🚀",
    color: "#41b883",
    icon: "https://cdn.simpleicons.org/runway",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Sora",
    shortDescription: "text-to-video for concepts before the real shoot 🎞️🪄",
    color: "#fff",
    icon: "https://cdn.simpleicons.org/openai",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "ElevenLabs",
    shortDescription: "AI voiceovers for ads and reels 🎙️🌪️",
    color: "#38bdf8",
    icon: "https://cdn.simpleicons.org/elevenlabs",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Perplexity",
    shortDescription: "market research and fact-checking on demand 🔍🟢",
    color: "#20808d",
    icon: "https://cdn.simpleicons.org/perplexity",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Zapier",
    shortDescription: "wiring campaigns and clients together, automatically 🔗💨",
    color: "#ff4a00",
    icon: "https://cdn.simpleicons.org/zapier",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "HubSpot AI",
    shortDescription: "CRM and pipelines that stay organized 🐘💾",
    color: "#ff7a59",
    icon: "https://cdn.simpleicons.org/hubspot",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "Notion AI",
    shortDescription: "campaign docs and client notes that write themselves 🗂️🍃",
    color: "#000000",
    icon: "https://cdn.simpleicons.org/notion",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Canva AI",
    shortDescription: "on-brand creative, shipped fast ⏳🎨",
    color: "#00c4cc",
    icon: "https://cdn.simpleicons.org/canva",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "Adobe Firefly",
    shortDescription: "generative edits inside the tools clients already trust 🐙🤝",
    color: "#e2231a",
    icon: "https://cdn.simpleicons.org/adobe",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "HeyGen",
    shortDescription: "AI avatars for scalable video content 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.simpleicons.org/heygen",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Suno",
    shortDescription: "original audio and jingles in minutes 📦🎵",
    color: "#fff",
    icon: "https://cdn.simpleicons.org/suno",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Descript",
    shortDescription: "video and podcast editing, as easy as a doc 🔥🎒",
    color: "#ffca28",
    icon: "https://cdn.simpleicons.org/descript",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "landing pages and content sites that convert 🧓🔌",
    color: "#007acc",
    icon: "https://cdn.simpleicons.org/wordpress",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Copy.ai",
    shortDescription: "ad copy and captions at scale 🧙‍♂️📝",
    color: "#e94162",
    icon: "https://cdn.simpleicons.org/copyai",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Ideogram",
    shortDescription: "AI text-in-image for bold, on-brand posters 🐳📦",
    color: "#2496ed",
    icon: "https://cdn.simpleicons.org/ideogram",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Leonardo AI",
    shortDescription: "concept art and product mockups, fast 🏎️🌀",
    color: "#008000",
    icon: "https://cdn.simpleicons.org/leonardoai",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Meta AI",
    shortDescription: "smarter targeting across Facebook & Instagram 🌐⚡",
    color: "#0866ff",
    icon: "https://cdn.simpleicons.org/meta",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Synthesia",
    shortDescription: "AI presenters for training and ad content 🧙‍♂️🎬",
    color: "#e34c26",
    icon: "https://cdn.simpleicons.org/synthesia",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Google Ads AI",
    shortDescription: "performance campaigns tuned by machine learning 🚀🌿",
    color: "#4285f4",
    icon: "https://cdn.simpleicons.org/googleads",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2023",
    endDate: "Present",
    title: "Founder & AI Consultant",
    company: "Pyramid Pixel",
    description: [
      "Built an agency from the ground up advising brands on marketing strategy, advertising, and practical AI automation.",
      "Designed and sold 100+ AI-powered workflows for content, campaign optimization, and client reporting.",
      "Plan and run paid advertising across Meta and Google, from targeting and creative to budget and reporting.",
    ],
    skills: [
      "AI Consulting",
      "Workflow Automation",
      "Meta Ads",
      "Google Ads",
      "Brand Strategy",
    ],
  },
  {
    id: 2,
    startDate: "—",
    endDate: "—",
    title: "Senior Marketing & Advertising Specialist",
    company: "Coldwell Banker",
    description: [
      "Led marketing and advertising strategy for real estate listings and agent brands.",
      "Ran online and offline campaigns to drive leads and property visibility in a competitive market.",
      "Combined competitor analysis and local market insight with sharp creative to stand out.",
    ],
    skills: [
      "Real Estate Marketing",
      "Competitor Analysis",
      "Campaign Strategy",
      "Copywriting",
    ],
  },
  {
    id: 3,
    startDate: "—",
    endDate: "—",
    title: "Marketing Consultant — Multi-Industry",
    company: "Food & Beverage · Hospitality · Electronics",
    description: [
      "Delivered marketing and advertising strategy across food & beverage, hotels & accommodation, and electronics brands.",
      "Adapted positioning, creative, and campaign execution to each industry's audience and buying behavior.",
    ],
    skills: [
      "Brand Positioning",
      "Content Strategy",
      "Performance Marketing",
      "Creative Direction",
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
