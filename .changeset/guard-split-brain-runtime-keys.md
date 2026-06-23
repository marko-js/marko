---
"@marko/runtime-tags": patch
---

Share the inline-runtime `RuntimeKey` enum between the SSR writer and the DOM resume reader so the two sides can no longer drift, and add a test asserting `accessor.ts` and `accessor.debug.ts` stay structurally in sync (identical member names, unique values). No change to generated output.
