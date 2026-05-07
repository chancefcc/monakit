---
title: "SDK Reference"
summary: "VGate SDK for agent registration, identity issuance, policy management, and Distributed Ledger ledger integration."
date: 2025-01-14
tags: ["sdk", "golang", "typescript", "reference", "VGate"]
draft: false
---

```json
{
  "title": "VGate SDK Reference (Golang & TypeScript)",
  "description": "Comprehensive SDK reference for both Golang and TypeScript implementations. Learn about agent registration and VKey/token identity issuance, policy management for access control, Distributed Ledger ledger integration for transfers and balance queries, and durable workflow orchestration for reliable agent protocols.",
  "keyPoints": [
    "RegisterAgent() creates a new agent with asymmetric key pair and issues VKey/token identity",
    "IssueCredential() issues verifiable credentials for P2P trust establishment",
    "CreateTransfer() executes a Distributed Ledger transfer between agent accounts",
    "startWorkflow() initiates a durable workflow for multi-step agent protocols",
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
  "mermaidMarkdown": "mindmap\n  root((SDK Reference))\n    Agent Registration\n      RegisterAgent()\n      Key Generation\n      VKey Identity\n      Signed Token Authorization\n    Credential Management\n      IssueCredential()\n      VerifyCredential()\n      RevokeCredential()\n    Distributed Ledger\n      CreateTransfer()\n      GetBalance()\n      ListTransfers()\n      Audit Query\n    Durable Workflows\n      startWorkflow()\n      signalWorkflow()\n      queryWorkflow()\n      Execution History\n    Policy Management\n      CreatePolicy()\n      UpdatePolicy()\n      DeletePolicy()",
  "url": ""
}
```
