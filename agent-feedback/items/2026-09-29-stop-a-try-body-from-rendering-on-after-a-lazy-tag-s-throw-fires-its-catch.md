---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/writer.ts › writeWaitReady
---

# Stop a `<try>` body from rendering on after a lazy tag's throw fires its `@catch`

A throw inside a lazily loaded tag is caught by the lazy body's own `Chunk.render`, which aborts the boundary and returns, so the enclosing body render goes on after its `@catch` already fired and cut the body. Everything it writes next lands in the chunk the cut turned into the body's end marker (or in one that already streamed), so it streams after `!id`, outside the range the `@catch` replaces, and stays on the page, scripts included. Lazy content rendered there registers its scopes on the aborted boundary's fresh `State`, so serializing it reads an unknown scope and the render fails with `TypeError: Invalid value used as weak map key` (`newScopeReference`). A throw in lazy content should end the enclosing body render the way a throw in the body itself does, since the rest of the body is dead once the catch fired, or writes after the cut should go to a detached chunk.

Check: a fixture with `thrower.marko` = `${(() => { throw new Error("ERROR!") })()}`, `template.marko` = `import { resolveAfter } from "../../utils/resolve";` + `import Thrower from "./thrower.marko" with { load: "render" }` + `<try><await|b|=resolveAfter("b", 1)><Thrower/><p>dead</p></await><@catch|err|>caught ${err.message}</@catch></try>` + `<p>after</p>`, and `test.ts` with `equivalent: false`, steps `[{}, flush, wait]`: `writes.html` streams `<!--M_!b--><p>dead</p>` and the final `render-ssr.md` keeps "dead" beside "caught ERROR!". Adding a second `load: "render"` tag that writes a scope after `<Thrower/>` makes the render fail with the weak map `TypeError`.
