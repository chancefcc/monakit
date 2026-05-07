# MUST Generalized Keywords

> Applies to both `vchat-landing` and `deck-vchat`.

When writing content for vchat.email, generalize the following specific technologies into the generic terms listed below. This ensures the pitch and documentation describe the *protocol* and its *capabilities*, not the underlying implementation details — for competitive obscurity and architectural flexibility.

---

## Technology Generalization Table

| ❌ Specific Technology | ✅ Generalized Term | Context / Usage |
|----------------------|-------------------|-----------------|
| `NATS`, `NATS.io`, `NATS-based` | **Messaging** / **Messaging Layer** | Agent communication. "Agents discover, communicate, and coordinate via the messaging layer." |
| `NKey`, `Nkey`, `NKEY` | **VKey** | Agent identity keys. "Every agent gets a cryptographically verifiable identity using VKey authentication." |
| `Temporal`, `Temporal.io`, `Temporal-backed` | **Durable Layer** / **Durable Workflow Engine** / **Durable Execution** | Workflow orchestration. "Durable execution for long-running agent processes with automatic retries and state persistence." |
| `TigerBeetle`, `TigerBeetle-powered` | **Distributed Ledger** / **Distributed High-Performance Ledger** | High-performance agent settlement accounting. "The distributed ledger settles agent transactions with financial-grade integrity." |
| `Ed25519`, `ed25519` | **asymmetric** / **elliptic curve** | Cryptographic key algorithm. Use `asymmetric key pair` instead of `Ed25519 key pair`. |
| `JWT`, `JWTs` (standalone) | **signed token** / **verifiable credential** | Token format for auth. Keep `VKey/JWT` as a compound brand term, but replace standalone JWT references. |
| `Subject-Based Access Control (SBAC)` | **Policy-Based Access Control (PBAC)** | Security model name. |
| `pub/sub`, `Publish/Subscribe` | **message routing** / **publish/subscribe (spelled out)** | Messaging pattern. Prefer `message routing`. |
| `JetStream` | **persistent message storage** | Message persistence mechanism. |
| `PicoClaw` | **agents** / **agent** | Agent management tool. Replace with generic `agent` references. e.g. `PicoClaw Agent Manager` → `Agent Manager`, `PicoClaw agent management` → `agent management`.
| `StartWorkflow()`, `SignalWorkflow()`, `QueryWorkflow()` | `start()`, `signal()`, `query()` | Use lowercase generic function names, not Temporal-specific ones. |
| `Workflow History` | **Execution History** | Workflow record. |

---

## Value Proposition & SEO

| ❌ Old | ✅ New | Where |
|-------|-------|-------|
| `Agent-Native Identity & Ledger Protocol` | **Agent-Native Commerce Protocol** | Everywhere — metadata, hero, taglines |
| `Sovereign Identity for Autonomous Agents` | (can remain as secondary descriptor) | But **Agent-Native Commerce Protocol** must be the primary value prop |

**SEO title format:** Always use `{page title} | vchat.email`. The site description should lead with `Agent-Native Commerce Protocol`.

---

## Performance & Capability Numbers — Generalize

Avoid specific performance benchmarks that fingerprint the underlying technology:

| ❌ Specific Number | ✅ Generalized |
|-------------------|----------------|
| `100k+ ops/sec`, `100,000+ transactions per second` | `high-throughput` / `industrial-scale throughput` |
| `sub-millisecond latency`, `single-digit microsecond latency` | `minimal latency` / `near-instant settlement` |
| `double-spend is mathematically impossible` | `spend integrity is cryptographically guaranteed` |
| `two-phase commit protocol` | `atomic settlement protocol` |
| `deterministic accounting` | `verifiable accounting` |
| `double-entry bookkeeping` / `double-entry accounting` | `balance-guaranteed accounting` |

---

## Code & API Examples — Sanitize

Code examples must not reveal the underlying tech stack through function signatures, argument names, or algorithm identifiers.

| ❌ Reveals Too Much | ✅ Sanitized |
|--------------------|-------------|
| `--key-type ed25519` | `--key-type asymmetric` |
| `publicKey: "ed25519:abc..."` | `publicKey: "asymmetric:abc..."` |
| `ledger.create_transfer({debit: agent_001, credit: agent_002, amount: 1000, code: agent_settlement})` | Use pseudocode: `transfer(agent_001 → agent_002, 1000 credits, for: settlement)` |
| `vgate register --agent-id "agent-001"` | `vgate register --agent "agent-001"` |
| `"SBAC"` in tags | `"PBAC"` in tags |
| `"JWT"` in tags | `"signed token"` in tags |

---

## External Links

| ❌ Never Link To | ✅ Instead Link To |
|-----------------|-------------------|
| `nats.io/documentation/` | `docs.vchat.email/messaging` |
| `temporal.io/docs` | `docs.vchat.email/durable-layer` |
| `docs.nats.io/security/auth` | `docs.vchat.email/security` |
| `tigerbeetle.com/docs` | `docs.vchat.email/distributed-ledger` |

---

## Organizational Branding (Powered By / Built With Sections)

"Powered By" and "Built with" sections do **not** list technology layers. They list the organizations behind the protocol:

```
CHATEK.CO    BREAKPOINTS.LIVE    RMAICT.COM.HK
```

Stack cards should link to these org domains:
- `https://chatek.co`
- `https://breakpoints.live`
- `https://rmaict.com.hk`

---

## Social & Contact

| Field | Value |
|-------|-------|
| GitHub org | `github.com/chatek` |
| Twitter/X handle | `@chancejiang` — `x.com/chancejiang` |
| Email | `chance@vchat.email` |

---

## SDK Documentation Writing Rules

- Reference capabilities by their generalized names (e.g., "the messaging layer provides subject-based agent communication" rather than "NATS subjects").
- Do not include external links to nats.io, temporal.io, tigerbeetle.com in `references` arrays.
- Use `distributed ledger` not `TigerBeetle` for accounting/settlement descriptions.
- Use `durable layer` not `Temporal` for workflow descriptions.
- Use `VKey/JWT` as the compound brand for auth; use `signed token` for standalone JWT references.
- Use `asymmetric key pairs` not `Ed25519 key pairs`.
- Use `Policy-Based Access Control (PBAC)` not `Subject-Based Access Control (SBAC)`.
