---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › addAwaitCounter
---

# Catch a `@placeholder` render error in its own `<try>` on the client

`addAwaitCounter` creates the placeholder branch with `tryBranch[AccessorProp.Owner]` as its parent, so the placeholder's `ParentBranch` chain skips the try, and `renderCatch` walks past the try's own `@catch` when a render in the placeholder throws. SSR renders that `@catch` for the same template; the client throws the error out of the flush. Direction: link the placeholder branch to its try for `renderCatch` only (it stays outside the try for effects and DOM), and add a `try-placeholder-throws` fixture.

Check: fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<try><@placeholder>LOADING ${(() => { throw new Error("placeholder") })()}</@placeholder><@catch|e|>caught ${e.message}</@catch><await|v|=resolveAfter(1)>value ${v}</await></try>`, `equivalent: false`, steps `[{}, flush, wait]`: `render-ssr.debug.md` shows `caught placeholder`, and `csr` fails with `Error: placeholder` thrown from the placeholder's setup render.
