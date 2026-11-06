---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/dom/load.ts › _load_setup
---

# Keep `<try>` placeholder counting out of lazy pages without a `@placeholder`

`dom/load.ts` statically imports `startAwait` and `renderCatch` from `./control-flow`, which package AGENTS.md rules out for main-graph modules such as load. `_load_setup`, `_load_template` and `insertLoaded` call `startAwait` unconditionally. So every page with a `load` import keeps `startAwait`, `createAwaitCounter`, `countAwait`, `dismissPlaceholder`, `createAndSetupBranch`, `detachBranch` and `findTryWithPlaceholder`, even though `startAwait` does nothing without an enclosing `<try>` that has a `@placeholder`. That is a fixed cost on every lazy page: 641 min / 213 brotli out of a 4801 / 2144 minimal bundle. `renderCatch` adds nothing, because the `catch.feat` the compiler injects with every load already keeps it. Reach placeholder counting through a latch that `placeholder.feat` enables (the compiler injects it for any `<try>` with `@placeholder`), the way `catch.feat` installs through `installCatch`, so that `load.ts` imports nothing from control-flow.

Check: bundle this entry with rolldown (treeshake, `define: { MARKO_DEBUG: "false" }`, each `.debug.` module remapped to its production pair): `import { _load_setup } from "./packages/runtime-tags/src/dom.ts"; import "./packages/runtime-tags/src/dom/catch.feat.ts"; export const s = _load_setup(() => import("./x.mjs"));`. The unminified output contains `startAwait`, `countAwait` and `dismissPlaceholder`, and stubbing `load.ts`'s `startAwait` import shrinks the minified bundle from 4801 / 2144 to 4160 / 1931 (min / brotli).
