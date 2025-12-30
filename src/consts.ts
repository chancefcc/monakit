export interface CardTheme {
  textColor: string;
  backgroundClass: string;
  accentColor: string;
  borderColor: string;
  subtleColor: string;
  decorativeLineColor: string;
  numberColor: string;
  backgroundColor: string;
  backgroundImage?: string;
  gradient?: string;
  titleColor: string;
  titleFontSize: string;
  titleFontWeight: string;
  titleFontFamily?: string;
  descriptionColor: string;
  descriptionFontSize: string;
  descriptionFontFamily?: string;
  sectionTitleColor: string;
  sectionTitleFontSize: string;
  sectionTitleFontWeight: string;
  sectionTitleFontFamily?: string;
  keyPointColor: string;
  keyPointFontSize: string;
  keyPointFontFamily?: string;
  numberBackgroundColor: string;
  numberTextColor: string;
  numberFontWeight: string;
  numberFontFamily?: string;
  decorativeLineWidth: string;
  decorativeLineHeight: string;
  fontFamily?: string;
  linkColor: string;
}

export interface SlideTheme {
  background: string;
  type: "solid" | "gradient";
  titleFont: string;
  titleWeight: number | "normal" | "bold";
  titleTransform: "uppercase" | "none" | "capitalize" | "lowercase";
  textFont: string;
  titleColor: string;
  textColor: string;
  overlayColor: string;
}

export const SITE_TITLE = "Tiktag";
export const SITE_DESCRIPTION =
  "Settlement and Verification Service for Agentic Commerce";

export const PROD_URL = "https://www.mymona.xyz";

export const isProdEnv = () => {
  if (import.meta.env?.PROD || import.meta.env?.MODE === "production") {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.location.origin === PROD_URL;
  }

  return false;
};

export const isProd = isProdEnv();

export const ASSETS_IMAGES_PREFIX = "/src/assets/images";

export const MERMAID_LIVE_BASE_URL = "https://mermaid.live";

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  showWhenLoggedOut?: boolean;
  showWhenLoggedIn?: boolean;
  title?: string;
  description?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    title: "Home",
    description:
      "Tiktag - Settlement and Verification Service for Agentic Commerce",
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    title: "Products",
    description: "AI-Verified Marketplace for renewable energy systems",
  },
  {
    id: "blogs",
    label: "Blog",
    href: "/blogs",
    title: "Blog",
    description:
      "tiktag bridges gaps between data oracle networks and settlement layers.",
  },
  {
    id: "cards",
    label: "Cards",
    href: "/cards",
    title: "Cards",
    description: "Knowledge cards and research summaries",
  },
  {
    id: "slides",
    label: "Slides",
    href: "/slides",
    title: "Slides",
    description: "Interactive presentations crafted for developers.",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    title: "About",
    description: "Learn about Tiktag and our mission",
  },
];

export const getNavigationItems = (): MenuItem[] => {
  return MENU_ITEMS;
};

export const DOODLE_EMOJIS = [
  "✨",
  "🚀",
  "💡",
  "🎉",
  "🔥",
  "🌟",
  "🤖",
  "🎃",
  "🔊",
  "📡",
];
