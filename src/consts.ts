import type { Links, Page, Site, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Tiktag",
  DESCRIPTION:
    "Settlement for Agentic Commerce. An open-source Tiktag wallet designed for autonomous agents. Instant, private, and high-integrity settlement for DePIN economy.",
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
    TEXT: "Features",
    HREF: "/features",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "SDK",
    HREF: "/sdk",
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
    TEXT: "tiktagapp/tiktag-cli",
    HREF: "https://github.com/tiktagapp/tiktag-cli",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@tiktagapp",
    HREF: "https://twitter.com/tiktagapp",
  },
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "contact@tiktag.app",
    HREF: "mailto:contact@tiktag.app",
  },
];
