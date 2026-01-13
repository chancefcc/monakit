---
title: "Core Concepts"
summary: "Asset Proxies (AP2), Payment Streams (x402), Settlement Flywheel, and X Layer zkEVM Validium."
date: 2025-01-14
tags: ["sdk", "core-concepts", "AP2", "x402", "zkEVM"]
draft: false
---

```json
{
  "title": "Core Concepts",
  "description": "Deep dive into the fundamental building blocks of the Tiktag settlement layer. Understand how Asset Proxies (AP2) enable agents to obtain legal and cryptographic authority, how Payment Streams (x402) implement real-time flow-based settlement, the Settlement Flywheel mechanism connecting Tikoly ZK-proofs to financial events, and the X Layer zkEVM Validium architecture.",
  "keyPoints": [
    "Asset Proxies (AP2) allow agents to obtain legal/cryptographic authority to settle on behalf of human owners",
    "Payment Streams (x402) implement real-time, flow-based settlement instead of static batch transactions",
    "The Settlement Flywheel connects Tikoly ZK-proofs to trigger Tiktag financial events",
    "X Layer (zkEVM Validium) provides performance and fee dynamics within the OKX ecosystem",
    "Agents can autonomously manage asset transactions with proper authorization",
    "Real-time settlement enables micro-transactions and continuous value flow"
  ],
  "references": [
    "https://tikoly.com/docs/zk-proofs",
    "https://okx.com/docs/x-layer"
  ],
  "tools": [
    "Tiktag SDK",
    "AP2 Protocol",
    "x402 Protocol"
  ],
  "mermaidMarkdown": "mindmap\n  root((Core Concepts))\n    Asset Proxies (AP2)\n      Legal Authority\n      Cryptographic Authority\n      Agent Settlement\n      Owner Delegation\n    Payment Streams (x402)\n      Real-time Flows\n      Flow-Based Settlement\n      Micro-Transactions\n      Continuous Value Flow\n    Settlement Flywheel\n      Tikoly ZK-Proofs\n      Financial Events\n      Proof Triggers\n      Settlement Automation\n    X Layer zkEVM Validium\n      Performance Dynamics\n      Fee Dynamics\n      OKX Ecosystem\n      Validium Architecture",
  "url": ""
}
