---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/dom/queue.ts › _enable_catch
---

# Split rarely-used dom machinery out of the eager runtime chunks

A module is hosted in exactly one chunk, so machinery co-hosted with common helpers ships to every app that uses any of them. Three splits: (1) `queue.ts` imports `renderCatch` from `./control-flow` at module top level, so every stateful app's queue chunk drags in branch machinery — move catch/pending installation to a new `dom/catch.ts` that installs its wrappers through an internal queue hook, and move `setConditionalRenderer` to `dom/scope`, its dependency home. (2) Move `_attrs`/`_attrs_content` and helpers out of `dom/dom.ts` into a new `dom/spread.ts`. (3) Split `dom/controllable.ts` into one module per control kind (input value, checked, select, details/dialog open) over a shared change-detection core. Measured 2026-07-30, only the combined cut pays: `src/dom/` is one strongly-connected import component of 12 modules and rolldown 1.1.4 assigns chunks on the _pre-tree-shake_ graph, so a page whose only client work is a lazy island still statically imports the whole live runtime (`template.marko.page.mjs` is `import { r as init } from "./<runtime>.mjs"; init();`) and `load:` costs +317 brotli instead of deferring anything; split (1) alone moves zero bytes, because `dom.ts` → `control-flow` for `setConditionalRenderer` keeps it eagerly reachable from `resume.ts`, so only the `queue.ts` cut _together with_ the `setConditionalRenderer` → `dom/scope` move relocates `control-flow.ts` into the island chunk (-348 min / -141 brotli). The remaining ~1300 brotli would mean severing `resume.ts` → renderer/scope/signals, which `init` genuinely needs (`setParentBranch`, `destroyScope`) to resume the island's SSR'd content.

Check: public exports and compiled output are unchanged (two bundle snapshots lose a `_script$1` collision suffix), diff fixture `sizes.json`, and compare an eager against a `load: "on-click body"` variant of the same child as two fixtures, classifying each chunk by the static-import closure of `*.page.mjs`.
