---
"@marko/runtime-tags": patch
---

Only treat a non-page template as an `embed` (with a randomized, non-idempotent render id) when the `linkAssets` compiler option is configured. Without it — as in most test and SSR-only setups — every template keeps a deterministic render id, so server integration tests that render templates directly stay idempotent.
