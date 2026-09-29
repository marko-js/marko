---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/load.ts › insertLoaded
---

# Insert a lazy tag under its marker's parent at insertion time

`insertLoaded` stores `marker.parentNode` as `parent` when it is called, then uses it later in `clone` (`parent.namespaceURI`) and in `insert`, which calls `insertBranchBefore(branch, parent, marker)`. When the chunks listed in `branch[AccessorProp.Load]` are still pending, `insert` runs later, from `queueAsyncRender`. By then the marker may have moved. This happens to a `load: "render"` tag inside `<await>` content under a `<try>` `@placeholder`, when an earlier instance of the same tag has already started loading its module. `insertLoaded` runs while the try content is still in its detached `DocumentFragment`. The `<await>` then settles and the content moves into the document. The stored `parent` is now the detached fragment and the marker's parent is `BODY`, so `insertBefore` throws and the lazy content never appears. The same thing happens with nested `<try>` `@placeholder`s and with sibling `<await>`s that settle on different ticks. Direction: read `marker.parentNode` inside `clone` and `insert` instead of storing it up front. Doing that locally makes the fixture below render.

Check: fixture with `child.marko` = `<let/count=0/>` + `<button class=input.label onClick() { count++ }>${input.label}:${count}</button>`, `template.marko` = `import Child from "./child.marko" with { load: "render" }` + `import { resolveAfter } from "../../utils/resolve"` + `<try><@placeholder>loading</@placeholder><await|y|=resolveAfter("y", 1)><Child label=y/></await></try>` + `<Child label="x"/>`, and `test.ts` = `export const config: TestConfig = { equivalent: false, steps: [{}, wait] };` (with `wait` imported from `../../utils/resolve`). Run `pnpm run test:update -- --grep "runtime-tags/translator <fixture> "`. Actual: `ssr` passes, but `debug` › `csr` fails with `NotFoundError: The child can not be found in the parent.`, thrown from `insertBranchBefore` inside `insertLoaded`'s `insert`. Expected: `render-csr.debug.md` ends on an update that inserts `.y`, showing `<button class="y">y:0</button>` before `<button class="x">x:0</button>`.
