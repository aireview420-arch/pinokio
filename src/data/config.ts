const config = {
  title: "Peter Hany | Pyramid Pixel — Marketing, Advertising & AI Consultant",
  description: {
    long: "Peter Hany, founder of Pyramid Pixel — a Senior Marketing & Advertising specialist and AI consultant. Helping brands grow with data-driven advertising, creative strategy, and practical AI automation. Let's build something amazing together!",
    short:
      "Peter Hany (Pyramid Pixel) — Senior Marketing & Advertising specialist and AI consultant.",
  },
  keywords: [
    "Peter Hany",
    "Pyramid Pixel",
    "marketing consultant",
    "advertising specialist",
    "AI consultant",
    "AI specialist",
    "digital marketing",
    "brand strategy",
    "social media advertising",
    "Meta Ads",
    "Google Ads",
    "AI automation",
    "marketing strategy",
    "advertising campaigns",
    "growth marketing",
  ],
  author: "Peter Hany",
  email: "",
  site: "https://my-3d-portfolio.vercel.app",

  // for github followers button
  githubUsername: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagramPersonal: "https://www.instagram.com/peteradventureseeker",
    instagramBrand: "https://www.instagram.com/pyramidpixel",
    whatsapp: "https://wa.me/201019268416",
  },
};
export { config };
