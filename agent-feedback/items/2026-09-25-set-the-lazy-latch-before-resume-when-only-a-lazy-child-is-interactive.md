---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/resume.ts › lazyEnabled
---

# Set the lazy retention latch before resume when only a lazy child is interactive

`render.m` routes branch markers to `createVisitBranches` only when `branchesEnabled`, and otherwise keeps them for later only when `lazyEnabled && render.b`. `lazyEnabled` is set only by `withLazy` around `dom/load.ts`'s `_load_*` helpers, and when the page template itself is static, `translator/util/entry-builder.ts` › `builder.build` emits a page entry that just calls `init()`, so nothing sets it; the comment on `lazyEnabled` ("set ... before any resume") is false there. The first walk then consumes the lazy child's BranchStart as a plain node visit, and once the child's module enables branches, the matching BranchEnd pops an empty `branchStarts` and the optimized resume throws `Cannot read properties of undefined (reading 'parentNode')`. Debug builds never tree-shake the latches, so only optimized builds fail. Direction: have the page entry set the branch/html latches (or `lazyEnabled`) its lazy subtrees need before `init`, and cover it with an optimize fixture.

Check: a fixture whose `template.marko` is `import Child from "./child.marko" with { load: "render" }` + `<div>before</div><Child/>` and whose `child.marko` is `import { resolveAfter } from "../../utils/resolve";` + `<let/count=0/><try><await|v|=resolveAfter(10, 1)><button onClick() { count++ }>${count}:${v}</button></await></try>`, with `equivalent: false` and steps `[{}, wait, flush, wait, click, wait]`: `pnpm run test:update -- --grep "runtime-tags/translator <fixture> "` fails `optimize › ssr` with that TypeError from `render.m`, while `render-ssr.debug.md` counts up.
