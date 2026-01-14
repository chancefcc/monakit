# Tiktag Web - tiktag.app Landing Site

The `tiktagweb` project serves as the official landing site for tiktag.app - **"Settlement for Agentic Commerce"**. Built with the [astro-sphere](https://github.com/tiktagapp/astro-sphere) theme and Astro 5, it acts as the front-end layer for the Tiktag ecosystem, connecting autonomous agents to the tiktag-cli settlement layer backend.

## Project Overview

**Purpose**: Tiktagweb is the public-facing website for the Tiktag ecosystem, designed to showcase and promote the **Agentic Commerce** settlement platform. The site serves as:

- An **open-source Taho-fork wallet** designed for autonomous agents
- **Instant, private, and high-integrity settlement** for the DePIN economy
- **Developer portal** for the Agentic SDK and NATS-based wallet signature triggers
- **Integration hub** for Tikoly ZK-proofs, High-Performance Ledger's Shadow Ledger, and X Layer infrastructure

**Key Value Propositions**:
- 🤖 **Agentic SDK** - Go-based SDK for NATS-based wallet signature triggers
- 🔒 **Privacy-First** - ZK-proofs from Tikoly keep merchant data private while ensuring agents get paid
- ⚡ **High-Performance Ledger** - 1,000,000+ TPS capability for micro-settlements
- 🌐 **Open Source Heritage** - Community-driven Taho fork, non-custodial alternative to proprietary wallets
- 💰 **ASEAN Settlement** - Native OKB gas support on X Layer for ultra-low fees

**Integration with tiktag-cli**:
The website connects to the tiktag-cli daemon via documented NATS API endpoints for:
- Asset notarization requests (`$SRV.SETTLE.PROVE`)
- Settlement status queries (`$SRV.SETTLE.LIST`)
- Ledger balance synchronization (`$SRV.LEDGER.SYNC`)
- Agent authorization management (`$SRV.AGENTS.AUTHORIZE`)
- Social graph operations (`$SRV.SOCIAL.FOLLOW`)

---

## Features

- **Full-text Search** - Client-side fuzzy search using Fuse.js with SolidJS reactivity
- **Blog/Articles** - Long-form blog content for SDK documentation and updates
- **Presentations** - Interactive content with Mermaid diagrams
- **Releases** - Release logs and announcements
- **Responsive Design** - Mobile-first with TailwindCSS 4
- **Dark Mode** - Toggle between light and dark themes

## Tech Stack

- Astro 5 (SSR)
- React 19
- SolidJS (for interactive components)
- TailwindCSS 4
- Fuse.js (fuzzy search)
- Biome (linting and formatting)

## Development

```bash
pnpm install
pnpm dev
```

### Available Scripts

```bash
pnpm dev                # Start dev server
pnpm build              # Production build
pnpm preview            # Preview production build
pnpm check              # Type check and lint
pnpm fix                # Auto-fix issues
pnpm format             # Format code with Biome
```

## Content Structure

```
src/content/
├── blogs/    # Blog articles / SDK Documentation (Markdown)
├── cards/    # Knowledge cards (Markdown)
├── slides/   # Presentations (Markdown)
└── doodles/  # Announcements (Markdown)
```

Content organized by year/month subdirectories.

## Product Data

All products data is defined in `src/assets/creations.json`.

## Site Structure

- **`/`** - Landing page with "Settlement for Agentic Commerce" hero
- **`/features`** - Core features page (Agentic SDK, Privacy-First, High-Performance Ledger, etc.)
- **`/blog`** - Blog posts and updates from the Tiktag team
- **`/search`** - Full-text search across all content

## Branding Guidelines

### Core Messaging
- **Tagline**: "Settlement for Agentic Commerce"
- **Description**: "An open-source Taho-fork wallet designed for autonomous agents. Instant, private, and high-integrity settlement for DePIN economy."

### Key Technologies to Highlight
- **X Layer** - Native OKB gas support, ultra-low fees
- **Taho** - Open-source wallet fork, community-driven
- **High-Performance Ledger** - 1,000,000+ TPS, sub-millisecond double-entry accounting
- **NATS.io** - Micro service architecture for agent-to-settlement communication
- **Polygon ID** - ZK-proof verification for privacy-first design

### Target Personas
- **Go Developers** - Building autonomous agents with the Agentic SDK
- **DePIN Projects** - Requiring high-performance settlement for micro-transactions
- **ASEAN Commerce** - Leveraging X Layer's regional liquidity and OKB gas

### Visual Style
- Premium-dark aesthetic with blue/purple gradient accents
- High-tech, industrial, and professional
- Clean, high-conversion landing page design
- Emphasis on performance, privacy, and open-source values
