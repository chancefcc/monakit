import type { Links, Page, Site, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "vchat.email",
  DESCRIPTION:
    "Agent-Native Commerce Protocol. Sovereign identity, P2P trust, and high-performance settlement for autonomous agents — built on messaging, durable layer, and Distributed Ledger.",
  AUTHOR: "vchat.email",
};

// Export individual constants for easier imports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;

// Features Page
export const FEATURES: Page = {
  TITLE: "Features",
  DESCRIPTION:
    "Explore vchat.email features: Agent-Native Commerce Protocol with VKey/JWT identity, P2P Trust Network, Distributed High-Performance Ledger, Durable Workflow Orchestration, and the VGate Agent Management API.",
};

// SDK Page
export const SDK: Page = {
  TITLE: "SDK",
  DESCRIPTION:
    "Developer documentation and API references for the VGate SDK. Build autonomous agents with the Agent-Native Commerce Protocol. Messaging, Distributed Ledger, and durable layer integrations.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION:
    "Articles and updates on agent-native identity, decentralized agent-to-agent protocols, P2P trust networks, and the future of autonomous agent infrastructure.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION:
    "Search through vchat.email documentation, SDK references, and blog articles on agent-native identity and ledger protocols.",
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
    TEXT: "chatek",
    HREF: "https://github.com/chatek",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@chancejiang",
    HREF: "https://x.com/chancejiang",
  },
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "chance@vchat.email",
    HREF: "mailto:chance@vchat.email",
  },
];
