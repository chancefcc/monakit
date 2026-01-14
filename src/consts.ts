import type { Links, Page, Site, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "tiktag",
  DESCRIPTION:
    "Settlement for Agentic Commerce. The real-world asset wallet designed for autonomous agents. Instant, private, and high-integrity settlement for DePIN economy.",
  AUTHOR: "Tiktag.app",
};

// Export individual constants for easier imports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;

// Features Page
export const FEATURES: Page = {
  TITLE: "Features",
  DESCRIPTION: "Core features of Tiktag's agentic settlement platform.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Articles and updates from the Tiktag team.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "SDK",
  DESCRIPTION: "Developer documentation and API references.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search through our collection of SDK documentation and blog articles.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Features",
    HREF: "/features",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Search",
    HREF: "/search",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "tiktagapp",
    HREF: "https://github.com/tiktagapp",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@tiktagapp",
    HREF: "https://twitter.com/tiktagus",
  },
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "contact@tiktag.app",
    HREF: "mailto:contact@tiktag.app",
  },
];
