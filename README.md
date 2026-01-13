# Tiktag Web - tiktag.app Landing Site

The `tiktagweb` project serves as the official landing site for tiktag.app - **"Settlement for Agentic Commerce"**. Built with the MonaKit theme and Astro 5, it acts as the front-end layer for the Tiktag ecosystem, connecting autonomous agents to the tiktag-cli settlement layer backend.

## Project Overview

**Purpose**: Tiktagweb is the public-facing website for the Tiktag ecosystem, designed to showcase and promote the **Agentic Commerce** settlement platform. The site serves as:

- An **open-source Taho-fork wallet** designed for autonomous agents
- **Instant, private, and high-integrity settlement** for the DePIN economy
- **Developer portal** for the Agentic SDK and NATS-based wallet signature triggers
- **Integration hub** for Tikoly ZK-proofs, TigerBeetle's Shadow Ledger, and X Layer infrastructure

**Key Value Propositions**:
- 🤖 **Agentic SDK** - Go-based SDK for NATS-based wallet signature triggers
- 🔒 **Privacy-First** - ZK-proofs from Tikoly keep merchant data private while ensuring agents get paid
- ⚡ **TigerBeetle Performance** - 1,000,000+ TPS capability for micro-settlements
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

# MonaKit

Multi-format content platform built with Astro, featuring knowledge cards, articles, presentations, and announcements.

## Features

- **Knowledge Cards** - Research summaries with customizable themes
- **Articles** - Long-form blog content (now repurposed as "Docs" for SDK documentation)
- **Slide Presentations** - Interactive reveal.js presentations
- **Doodles** - Release logs and announcements (Mona Pulse)
- **Search** - Full-text search with Pagefind
- **Promotion** - Product and link showcase

## Tech Stack

- Astro 5 (SSR)
- React 19
- TailwindCSS 4
- Reveal.js with Mermaid plugin
- Pagefind

## Quick Start

```bash
npm create astro@latest my-astro-project -- --template monakit/monakit
```

## Development

```bash
pnpm install
pnpm dev
```

### Available Scripts

```bash
pnpm dev                # Start dev server
pnpm build              # Production build (auto-builds search index)
pnpm build:search-index # Build search index manually
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
- **`/features`** - Core features page (Agentic SDK, Privacy-First, TigerBeetle Performance, etc.)
- **`/blog`** - Blog posts and updates from the Tiktag team
- **`/sdk`** - Developer SDK documentation and API references
- **`/search`** - Full-text search across all content

## Branding Guidelines

### Core Messaging
- **Tagline**: "Settlement for Agentic Commerce"
- **Description**: "An open-source Taho-fork wallet designed for autonomous agents. Instant, private, and high-integrity settlement for the DePIN economy."

### Key Technologies to Highlight
- **X Layer** - Native OKB gas support, ultra-low fees
- **Taho** - Open-source wallet fork, community-driven
- **TigerBeetle** - 1,000,000+ TPS, sub-millisecond double-entry accounting
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
