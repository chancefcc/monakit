import type { Links, Page, Site, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Tiktag",
  DESCRIPTION:
    "Settlement for Agentic Commerce. Enterprise-grade real-world asset settlement for institutions and banking operations. Instant, private, and high-integrity settlement with compliant audit trails.",
  AUTHOR: "Tiktag.app",
};

// Export individual constants for easier imports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;

// Features Page
export const FEATURES: Page = {
  TITLE: "Features",
  DESCRIPTION: "Enterprise-grade settlement features for institutions: Privacy-First Architecture, High-Performance Ledger, Agentic SDK with AP2 and x402 Payment Streaming.",
};

// SDK Page
export const SDK: Page = {
  TITLE: "SDK",
  DESCRIPTION: "Developer documentation and API references for Tiktag's Agentic SDK. Build autonomous agents with Agent Payment Protocol (AP2) and x402 Payment Streaming.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Articles and updates on agentic commerce settlement, enterprise blockchain solutions, and institutional DePIN applications.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search through Tiktag's SDK documentation, API references, and blog articles on agentic commerce settlement.",
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
