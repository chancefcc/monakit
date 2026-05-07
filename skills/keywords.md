# MUST Generalized Keywords

When writing content for vchat.email, generalize the following specific technologies into the generic terms listed below. This ensures the pitch and documentation describe the *protocol* and its *capabilities*, not the underlying implementation details.

| ❌ Specific Technology | ✅ Generalized Term | Context / Usage |
|----------------------|-------------------|-----------------|
| `NATS`, `NATS.io`, `NATS-based` | **Messaging** / **Messaging Layer** | Decentralized pub/sub for agent communication. "Agents discover, communicate, and coordinate via the messaging layer." |
| `NKey`, `Nkey`, `NKEY` | **VKey** | Ed25519-based agent identity keys. "Every agent gets a cryptographically verifiable identity using VKey authentication." |
| `Temporal`, `Temporal.io`, `Temporal-backed` | **Durable Layer** / **Durable Workflow Engine** / **Durable Execution** | Workflow orchestration for multi-step agent protocols. "Durable execution for long-running agent processes with automatic retries and state persistence." |
| `TigerBeetle`, `TigerBeetle-powered` | **Distributed Ledger** / **Distributed High-Performance Ledger** | High-performance double-entry accounting for agent settlement. "The distributed ledger settles agent transactions at 100k+ ops/sec." |
| `Agent-Native Identity & Ledger Protocol` | **Agent-Native Commerce Protocol** | The one-line value proposition. This is the brand tagline — use consistently in all SEO metadata, page titles, and hero sections. |

## Additional Notes

- **Tech stack lists** (e.g., "Built with" or "Powered By" sections) should use the generalized terms: "Messaging Layer", "Distributed Ledger", "Durable Layer".
- **External links** — avoid linking to specific technology homepages (nats.io, temporal.io, tigerbeetle.com). Link to `https://vchat.email` or relevant protocol documentation instead.
- **SDK documentation** — reference capabilities by their generalized names (e.g., "the messaging layer provides subject-based agent communication" rather than "NATS subjects").
- **SEO titles** always use the format: `{page title} | vchat.email` and should lead with **"Agent-Native Commerce Protocol"** in the site description.
