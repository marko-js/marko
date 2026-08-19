---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/dom/resume.ts › initEmbedded
---

# Use the mutation records instead of rescanning every embedded anchor

`initEmbedded()`'s `MutationObserver(...).observe(document, { childList: true, subtree: true })` callback ignores its records and iterates all of `embedRenders`, testing `anchor.isConnected` for every embedded render on every document-wide child-list batch. Once one embed exists, any page that mutates the DOM pays embedded-count × batch work. Inspect the records' `removedNodes` (or debounce the sweep) while preserving move/reinsert, adoption, nested removal, and exactly-once `destroyScope`.

Check: the `embed-removal` and `embed-counter` fixtures still destroy scopes exactly once.
