---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/finalize-references.ts › getLastOwnSourceReturn
---

# Render a function that reads its own tag variable on a client render

With `<define/A|{ calc }|><return=calc/></define>` and a `<let/s=0/>`, `<A/v calc() { return s + (typeof v) }/>` builds `calc` through `_or(…, 1, "#scopeOffset/1")`: an intersection of `s` and `v` that waits for `v` and for `A`'s scope offset (`getLastOwnSourceReturn`), although `v` is what `A` returns from that same intersection, and `v`'s signal runs it again. A client render never runs it, so `${v()}` renders an empty button where a resumed page shows `0function`; the first change to `s` shows `1function`. Each change to `s` then queues the intersection again after it ran, which debug builds log as "A render was queued again after it ran in this update…" on both client and resumed pages, while optimized builds stay silent. A tag variable read only inside a function in its own tag's attributes is read when the function is called, so it should neither count toward that attribute's `_or` nor make it wait on its tag's scope offset, just as `<const/v=function () { return s + (typeof v) }/>` compiles to a plain function of `s`.

Check: a runtime-tags fixture with that template plus `<button onClick() { s++ }>${v()}</button>`, steps `[{}, click]`, and `equivalent: false` (by default the client and server logs share `render.md` and fail as a snapshot conflict, so the client log is never written). `render-csr.debug.md` shows an empty button, then `1function` and the error after the click; `render-ssr.debug.md` shows `0function`, then the same error. `pnpm run compile -- -o dom -d` shows `$s__OR__v = _or(…, 1, "#scopeOffset/1")`, with `$v` calling it.
