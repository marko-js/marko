---
"marko": patch
"@marko/runtime-tags": patch
---

Rework scope serialization and resumption: scopes serialize through a per-render context with canonical ids (smaller payloads; scopes that serialize no props are elided entirely), registered factories are invoked through that context, async serialized values (promises/streams) settle through the mutation queue so completions are no longer dropped or misordered across flushes, and embedded renders resume through the same machinery.
