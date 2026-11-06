---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/dom/load.ts › _load_setup
---

# Keep `<try>` placeholder counting out of lazy pages without a `@placeholder`

`dom/load.ts` statically imports `startAwait` and `renderCatch` from `./control-flow`, which package AGENTS.md rules out for main-graph modules such as load. `_load_setup`, `_load_template` and `insertLoaded` call `startAwait` unconditionally. So every page with a `load` import keeps `startAwait`, `createAwaitCounter`, `countAwait`, `dismissPlaceholder`, `createAndSetupBranch`, `detachBranch` and `findTryWithPlaceholder`, even though `startAwait` does nothing without an enclosing `<try>` that has a `@placeholder`. That is a fixed cost on every lazy page: 641 min / 213 brotli out of a 4801 / 2144 minimal bundle. `renderCatch` adds nothing, because the `catch.feat` the compiler injects with every load already keeps it. A latch `placeholder.feat` enables is the direction, but where the check sits decides whether it saves anything: in a split build rolldown folds a latch only within a chunk. Handing `startAwait` to a latch in `load.ts` grew placeholder-only pages by about 250 B min; checking at the top of `startAwait` grew 71 fixtures (+10.7 KB min in total); a small `placeholderEnabled && startAwait(scope)` wrapper beside `startAwait` in control-flow, called from `load.ts`, shrank 21 lazy fixtures without a placeholder by 446 to 528 B min but grew the 16 with both a lazy tag and a placeholder by 56 to 62 B. That last version is parked on branch `dpiercey-w1-agent-feedback-0knu2t-lazy-try-placeholder`; whether its trade-off is worth taking, or a cheaper shape exists, is open.

Check: bundle this entry with rolldown (treeshake, `define: { MARKO_DEBUG: "false" }`, each `.debug.` module remapped to its production pair): `import { _load_setup } from "./packages/runtime-tags/src/dom.ts"; import "./packages/runtime-tags/src/dom/catch.feat.ts"; export const s = _load_setup(() => import("./x.mjs"));`. The unminified output contains `startAwait`, `countAwait` and `dismissPlaceholder`, and stubbing `load.ts`'s `startAwait` import shrinks the minified bundle from 4801 / 2144 to 4160 / 1931 (min / brotli).
