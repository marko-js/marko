---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/dom/patch-ready.feat.ts › pending
---

`pending` maps `RenderData` to deferred patch state and only deletes entries
when a channel drains, a frame fails, or a load fails. An embedded render
removed from the document (`initEmbedded`'s MutationObserver in
`src/dom/resume.ts` destroys its scopes and deletes it from `curRenders`)
leaves its `pending` entry — and any unresolved `applyPatch` promises —
alive forever. Hook the embed-teardown path (or key weakly) so discarded
renders settle and release their deferred data.

Check: apply a deferred patch to an embedded render, disconnect its anchor,
and observe the `pending` entry (and unsettled promise) survive.
