---
title: "API Reference"
summary: "VGate REST API, NATS Subject Map, and TigerBeetle integration endpoints."
date: 2025-01-14
tags: ["sdk", "api", "rest", "nats", "tigerbeetle"]
draft: false
---

```json
{
  "title": "VGate API Reference",
  "description": "Complete API reference documentation for the vchat.email ecosystem. Includes VGate REST API endpoints for agent management and identity issuance, comprehensive NATS Subject Map for agent-to-agent communication, and TigerBeetle integration for high-performance accounting and settlement.",
  "keyPoints": [
    "VGate REST API provides endpoints for agent registration, policy management, and monitoring",
    "NATS Subject Map defines subscription patterns for agent-to-agent communication",
    "TigerBeetle integration provides transfer execution, balance queries, and audit trails",
    "Temporal workflow API for starting, signaling, and querying agent workflows",
    "All APIs available with both REST and NATS-based interfaces"
  ],
  "references": [
    "https://docs.vchat.email/api/rest",
    "https://docs.vchat.email/api/nats",
    "https://tigerbeetle.com/docs"
  ],
  "tools": [
    "VGate REST API",
    "NATS Client",
    "TigerBeetle Client",
    "Temporal Client"
  ],
  "mermaidMarkdown": "mindmap\n  root((API Reference))\n    VGate REST API\n      Agent Management\n      Identity Issuance\n      Policy Administration\n      System Monitoring\n    NATS Subject Map\n      Agent Communication\n      Event Streaming\n      Command Subjects\n      Response Subjects\n    TigerBeetle API\n      Transfer Creation\n      Balance Queries\n      Account Management\n      Audit Queries\n    Temporal API\n      Workflow Start\n      Workflow Signal\n      Workflow Query\n      History Access\n    Integration Patterns\n      REST + NATS Hybrid\n      Event-Driven Architecture\n      Webhook Callbacks\n      Streaming Responses",
  "url": ""
}
```
