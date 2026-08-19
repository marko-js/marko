---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › translateDOM
---

# Consolidate each lazy template behind one load adapter

The `isLoad` branch emits a separate virtual module, dynamic import, and `_load_signal` loader per lazy input binding (`buildLoadSignalVirtualModule`), plus one more pair for setup (`buildLoadSetupVirtualModule`), even though every one resolves to the same child template; setup also allocates a fresh uid per tag while signals at least dedupe on trigger+file+export. The cost is runtime as well as bytes — each `_load_setup` (`packages/runtime-tags/src/dom/load.ts`) keeps its own `pending`/`renderer` and re-runs `_content(...)`. Use one cached adapter per trigger/template while retaining fine-grained exports so per-input chunking is not lost.

Check: on the `lazy-tag-twice` fixture's dom snapshot, which shows two `_load_setup` uids for one child, then across increasing input counts plus shared, nested, error, and unmount cases.
