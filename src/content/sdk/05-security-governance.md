---
title: "Security & Governance"
summary: "Nkey-based authentication, JWT authorization, Subject-Based Access Control, and cryptographic audit trails."
date: 2025-01-14
tags: ["sdk", "security", "governance", "NATS", "JWT", "SBAC"]
draft: false
---

```json
{
  "title": "Security & Governance",
  "description": "Comprehensive security and governance framework for the vchat.email protocol. Learn about NATS Nkey-based authentication with Ed25519 key pairs, JWT-based authorization with scoped permissions, Subject-Based Access Control (SBAC) for fine-grained security policies, and cryptographic audit trails for all agent interactions.",
  "keyPoints": [
    "Nkey-based authentication uses Ed25519 key pairs for cryptographic agent identity",
    "JWT authorization provides scoped, time-limited permissions for agent actions",
    "Subject-Based Access Control (SBAC) enables fine-grained security policies on NATS subjects",
    "Cryptographic audit trails record all agent interactions for compliance and forensics",
    "Identity revocation and key rotation provide full lifecycle management"
  ],
  "references": [
    "https://docs.nats.io/security/auth",
    "https://github.com/chance-fcc/vgate-security"
  ],
  "tools": [
    "NATS CLI",
    "VGate CLI",
    "JWT Library"
  ],
  "mermaidMarkdown": "mindmap\n  root((Security & Governance))\n    Nkey Authentication\n      Ed25519 Keys\n      Nkey Format\n      Identity Verification\n      Non-Repudiation\n    JWT Authorization\n      Scoped Permissions\n      Time-Limited Tokens\n      Claim Validation\n      Token Revocation\n    Subject-Based ACL\n      Subject Patterns\n      Publish/Subscribe Rules\n      Fine-Grained Access\n      Policy Enforcement\n    Audit Trails\n      Event Recording\n      Cryptographic Proofs\n      Compliance Reports\n      Forensics Support\n    Lifecycle Management\n      Identity Creation\n      Key Rotation\n      Identity Revocation\n      Credential Renewal",
  "url": ""
}
```
