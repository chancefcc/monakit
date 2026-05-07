---
title: "Integration Guide"
summary: "Integrating VGate SDK with NATS, TigerBeetle, and Temporal for complete agent-native infrastructure."
date: 2025-01-14
tags: ["sdk", "integration", "NATS", "TigerBeetle", "Temporal"]
draft: false
---

```json
{
  "title": "Integration with NATS, TigerBeetle & Temporal",
  "description": "Learn how to integrate the VGate SDK with NATS for messaging, TigerBeetle for accounting, and Temporal for workflow orchestration. Configure NATS subjects for agent communication, set up TigerBeetle accounts for settlement, and deploy Temporal workflows for reliable agent protocols.",
  "keyPoints": [
    "NATS integration provides subject-based messaging for agent-to-agent communication",
    "TigerBeetle integration enables financial-grade double-entry accounting for agent settlement",
    "Temporal integration ensures reliable execution of multi-step agent protocols",
    "VGate orchestrates all three components through a unified API",
    "Subject-Based Access Control (SBAC) provides fine-grained security"
  ],
  "references": [
    "https://nats.io/documentation/",
    "https://tigerbeetle.com/docs",
    "https://temporal.io/docs"
  ],
  "tools": [
    "VGate SDK",
    "NATS CLI",
    "TigerBeetle CLI",
    "Temporal CLI"
  ],
  "mermaidMarkdown": "mindmap\n  root((Integration Guide))\n    NATS Integration\n      Subject Configuration\n      Agent-to-Agent Messaging\n      JetStream Persistence\n      Security Policies\n    TigerBeetle Integration\n      Account Setup\n      Transfer Execution\n      Balance Queries\n      Audit Trails\n    Temporal Integration\n      Workflow Definition\n      Activity Registration\n      Error Handling\n      State Persistence\n    VGate Orchestration\n      Unified API\n      Cross-Component Coordination\n      Monitoring & Alerting\n      Policy Enforcement",
  "url": ""
}
```
