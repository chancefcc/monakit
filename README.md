# vchat.email Landing Site

The `vchat-landing` project serves as the official landing site for vchat.email — **"Agent-Native Identity & Ledger Protocol"**.

This site is built with Astro 5 and acts as the front-end layer for the vchat.email ecosystem, providing sovereign identity for autonomous agents with decentralized A2A communication, P2P trust, and high-performance settlement.

## Project Overview

**Purpose**: vchat-landing is the public-facing website for the vchat.email ecosystem, designed to showcase and promote the **Agent-Native Identity & Ledger Protocol**. The site serves as:

- **Protocol documentation** for the Agent SOUL identity and VGate orchestrator
- **Developer portal** for the VGate SDK and agent deployment templates
- **Knowledge base** for agent-native identity, P2P trust, and settlement concepts
- **Integration hub** for NATS, TigerBeetle, and Temporal infrastructure

**Key Value Propositions**:
- 🔐 **Sovereign Agent Identity** - NATS Nkey/JWT-based cryptographic identity for every agent
- 🤝 **P2P Trust Network** - Verifiable credentials and decentralized reputation scoring
- ⚡ **TigerBeetle Ledger** - 100,000+ TPS double-entry accounting with financial-grade integrity
- 🔄 **Temporal Workflows** - Reliable orchestration of multi-step agent protocols
- 🎛️ **VGate Orchestrator** - Unified control plane for agent lifecycle management

---

## Features

- **Full-text Search** - Client-side fuzzy search using Fuse.js with SolidJS reactivity
- **Blog/Articles** - Long-form blog content for SDK documentation and updates
- **Responsive Design** - Mobile-first with TailwindCSS
- **Dark Mode** - Toggle between light and dark themes
- **Particle Animations** - Interactive star and meteor effects on the home page

## Tech Stack

- Astro 5 (SSG)
- SolidJS (for interactive components)
- TailwindCSS 3
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
├── blog/     # Blog articles (Markdown)
├── sdk/      # SDK documentation (Markdown)
└── legal/    # Legal pages (Markdown)
```

## Product Data

All products data is defined in `src/assets/creations.json`.

## Site Structure

- **`/`** - Landing page with "Agent-Native Identity & Ledger Protocol" hero
- **`/features`** - Core features page (Sovereign Identity, P2P Trust, TigerBeetle Ledger, etc.)
- **`/blog`** - Blog posts and updates from the vchat.email team
- **`/search`** - Full-text search across all content

## Branding Guidelines

### Core Messaging
- **Tagline**: "Agent-Native Identity & Ledger Protocol"
- **Description**: "Sovereign identity for autonomous agents. Decentralized agent-to-agent communication, P2P trust, and high-performance settlement built on NATS, Temporal, and TigerBeetle."

### Key Technologies to Highlight
- **NATS** - Nkey/JWT-based agent identity and messaging infrastructure
- **TigerBeetle** - High-performance double-entry accounting engine
- **Temporal** - Durable workflow orchestration for agent protocols
- **VGate** - Agent lifecycle management and identity issuance platform

### Target Personas
- **Agent Developers** - Building autonomous agents with sovereign identity
- **Platform Engineers** - Deploying agent-native infrastructure
- **Enterprise Architects** - Integrating agent protocols into existing systems

### Visual Style
- Dark theme with #0A0A0F background
- Blue-to-purple gradient accents
- Clean, professional, and technical
- Emphasis on security, autonomy, and decentralization
