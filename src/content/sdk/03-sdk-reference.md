---
title: "SDK Reference"
summary: "Authentication, AP2 Proxy Management, x402 Transaction Engine, and High-Performance Ledger Integration."
date: 2025-01-14
tags: ["sdk", "golang", "typescript", "reference"]
draft: false
---

```json
{
  "title": "SDK Reference (Golang & TypeScript)",
  "description": "Comprehensive SDK reference for both Golang and TypeScript implementations. Learn about secure authentication and handshake protocols, AP2 proxy management (RegisterProxy, RevokeProxy), x402 transaction engine operations (InitializeStream, SettleMomentary), and high-performance ledger integration for syncing Shadow Ledger with on-chain events.",
  "keyPoints": [
    "Authentication & Handshake provides secure connection between TikoVM and Tiktag Wallet",
    "RegisterProxy() assigns an agent to an asset (e.g., Battery, Fleet)",
    "RevokeProxy() implements owner-side override and security protocols",
    "InitializeStream() starts continuous value flow between agents",
    "SettleMomentary() handles one-off agentic purchases",
    "High-Performance Ledger Integration syncs Shadow Ledger with on-chain events"
  ],
  "references": [
    "https://github.com/tiktagapp/tiktag-sdk",
    "https://docs.tiktag.app/sdk/golang",
    "https://docs.tiktag.app/sdk/typescript"
  ],
  "tools": [
    "Tiktag SDK Go",
    "Tiktag SDK TS",
    "High-Performance Ledger"
  ],
  "mermaidMarkdown": "mindmap\n  root((SDK Reference))\n    Authentication & Handshake\n      Secure Connection\n      TikoVM Integration\n      Tiktag Wallet\n      Protocol Security\n    AP2 Proxy Management\n      RegisterProxy()\n      Assign Agent to Asset\n      RevokeProxy()\n      Owner Override\n      Security Protocols\n    x402 Transaction Engine\n      InitializeStream()\n      Continuous Value Flow\n      SettleMomentary()\n      One-off Purchases\n      Agentic Transactions\n    High-Performance Ledger Integration\n      Shadow Ledger\n      On-Chain Events\n      Event Syncing\n      Ledger Consistency",
  "url": ""
}
