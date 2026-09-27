---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/resume.ts › createVisitBranches
---

# Catch a resumed `@placeholder`'s render error in its own `<try>`

A stateful `@placeholder` resumed from SSR never gets the `AccessorProp.TryBranch` link that `addAwaitCounter` sets on a client-created one, so `renderCatch` walks past its `<try>`; and when the try's sync body wrote nothing resumable (`tryBoundary` returns `renderersAtSettle`), the try's `CatchContent` only arrives with the settled body. An error thrown by an update inside the live placeholder therefore escapes the flush, while CSR renders the try's `@catch`. Direction: have the walker set the link from the placeholder's end mark, whose accessor is `AccessorProp.PlaceholderBranch + branchId` (the walker already stores that mark under `owner[AccessorPrefix.BranchScopes + AccessorProp.PlaceholderBranch + branchId]`, which nothing on the client reads), and have `_try`/`tryBoundary` write the try renderers before settle when the `@placeholder` is stateful.

Check: fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<let/clicks=0><try><@placeholder><button onClick() { clicks++ }>loading ${clicks ? (() => { throw new Error("placeholder " + clicks) })() : clicks}</button></@placeholder><@catch|err|>caught ${err.message}</@catch><await|value|=resolveAfter("body", 2)>${value}</await></try>`, `equivalent: false`, steps `[{}, flushRAF, click, wait, flush]`: `render-csr.debug.md` ends on `caught placeholder 1`, while `ssr` fails with `Error: placeholder 1` thrown from the flush.
