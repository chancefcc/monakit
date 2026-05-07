---
title: "Security & Governance"
summary: "VKey-based authentication, JWT authorization, Subject-Based Access Control, and cryptographic audit trails."
date: 2025-01-14
tags: ["sdk", "security", "governance", "messaging", "JWT", "SBAC"]
draft: false
---

```json
{
  "title": "Security & Governance",
  "description": "Comprehensive security and governance framework for the vchat.email protocol. Learn about messaging VKey-based authentication with Ed25519 key pairs, JWT-based authorization with scoped permissions, Subject-Based Access Control (SBAC) for fine-grained security policies, and cryptographic audit trails for all agent interactions.",
  "keyPoints": [
    "VKey-based authentication uses Ed25519 key pairs for cryptographic agent identity",
    "JWT authorization provides scoped, time-limited permissions for agent actions",
    "Subject-Based Access Control (SBAC) enables fine-grained security policies on messaging subjects",
    "Cryptographic audit trails record all agent interactions for compliance and forensics",
    "Identity revocation and key rotation provide full lifecycle management"
  ],
  "references": [
    "https://docs.nats.io/security/auth",
    "https://github.com/chance-fcc/vgate-security"
  ],
  "tools": [
    "VGate CLI",
    "VGate CLI",
    "JWT Library"
  ],
  "mermaidMarkdown": "mindmap\n  root((Security & Governance))\n    VKey Authentication\n      Ed25519 Keys\n      VKey Format\n      Identity Verification\n      Non-Repudiation\n    JWT Authorization\n      Scoped Permissions\n      Time-Limited Tokens\n      Claim Validation\n      Token Revocation\n    Subject-Based ACL\n      Subject Patterns\n      Publish/Subscribe Rules\n      Fine-Grained Access\n      Policy Enforcement\n    Audit Trails\n      Event Recording\n      Cryptographic Proofs\n      Compliance Reports\n      Forensics Support\n    Lifecycle Management\n      Identity Creation\n      Key Rotation\n      Identity Revocation\n      Credential Renewal",
  "url": ""
}
```
