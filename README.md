# Tiktag Web - tiktag.app Landing Site

The `tiktagweb` project serves as the official landing site for tiktag.app, representing the AI-Verified Marketplace for renewable energy systems. Built with the MonaKit theme and Astro 5, it acts as the front-end layer for the Tiktag ecosystem, connecting users to the tiktag-cli settlement layer backend.

## Project Overview

**Purpose**: Tiktagweb is the public-facing website for the Tiktag ecosystem, designed to showcase and promote the AI-Verified Marketplace for renewable energy systems. Following the 2025 strategic pivot, the site now focuses on selling business outcomes to two primary personas:

- **RayGo Solar** - Solar panel installers seeking verified renewable energy assets
- **NextG Power** - Solar panel manufacturers looking to list and notarize their products

**Key Responsibilities**:
- 📢 Product showcase and business value communication
- 📚 Knowledge dissemination via cards, articles, and presentations
- 🔗 Front-end integration point for tiktag-cli backend services
- 🔐 Authentication gateway using Logto OIDC
- 📊 Real-time settlement status display via NATS pub/sub
- 🌐 Public portal for the AI-Verified Marketplace

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
- **Articles** - Long-form blog content
- **Slide Presentations** - Interactive reveal.js presentations
- **Doodles** - Release logs and announcements (Mona Pulse)
- **Search** - Full-text search with Pagefind
- **Promotion** - Product and link showcase

## Tech Stack

- Astro 5 (SSR)
- React 19
- TailwindCSS 4
- Reveal.js
- Pagefind

## Quick Start

```bash
npm create astro@latest my-astro-project -- --template monakit/monakit
```

## Development

```bash
pnpm install
cp .env.example .env
pnpm migrate
pnpm dev
```

### Available Scripts

```bash
pnpm dev                # Start dev server
pnpm build              # Production build (auto-builds search index)
pnpm build:search-index # Build search index manually
pnpm check              # Type check and lint
pnpm fix                # Auto-fix issues
```

## Content Structure

```
src/content/
├── cards/    # Knowledge cards (Markdown)
├── blogs/    # Blog articles (Markdown)
├── slides/   # Presentations (Markdown)
└── doodles/  # Announcements (Markdown)
```

Content organized by year/month subdirectories.

## Product Data

All products data is defined in `src/assets/creations.json`.
