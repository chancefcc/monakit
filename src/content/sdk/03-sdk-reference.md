---
title: "SDK Reference"
summary: "VGate SDK for agent registration, identity issuance, policy management, and TigerBeetle ledger integration."
date: 2025-01-14
tags: ["sdk", "golang", "typescript", "reference", "VGate"]
draft: false
---

```json
{
  "title": "VGate SDK Reference (Golang & TypeScript)",
  "description": "Comprehensive SDK reference for both Golang and TypeScript implementations. Learn about agent registration and Nkey/JWT identity issuance, policy management for access control, TigerBeetle ledger integration for transfers and balance queries, and Temporal workflow orchestration for reliable agent protocols.",
  "keyPoints": [
    "RegisterAgent() creates a new agent with Ed25519 key pair and issues NATS Nkey/JWT identity",
    "IssueCredential() issues verifiable credentials for P2P trust establishment",
    "CreateTransfer() executes a TigerBeetle transfer between agent accounts",
    "StartWorkflow() initiates a Temporal workflow for multi-step agent protocols",
    "Policy management API for fine-grained access control"
  ],
  "references": [
    "https://github.com/chance-fcc/vgate-sdk",
    "https://docs.vchat.email/sdk/golang",
    "https://docs.vchat.email/sdk/typescript"
  ],
  "tools": [
    "VGate SDK Go",
    "VGate SDK TS",
    "VGate CLI"
  ],
  "mermaidMarkdown": "mindmap\n  root((SDK Reference))\n    Agent Registration\n      RegisterAgent()\n      Ed25519 Key Gen\n      Nkey Identity\n      JWT Authorization\n    Credential Management\n      IssueCredential()\n      VerifyCredential()\n      RevokeCredential()\n    TigerBeetle Ledger\n      CreateTransfer()\n      GetBalance()\n      ListTransfers()\n      Audit Query\n    Temporal Workflows\n      StartWorkflow()\n      SignalWorkflow()\n      QueryWorkflow()\n      Workflow History\n    Policy Management\n      CreatePolicy()\n      UpdatePolicy()\n      DeletePolicy()",
  "url": ""
}
```
