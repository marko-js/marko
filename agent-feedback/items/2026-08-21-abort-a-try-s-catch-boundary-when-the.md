---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/writer.ts › tryCatch
---

# Abort a `<try>`'s catch boundary when the render is aborted

`tryCatch` builds `new Boundary(state, undefined, boundary)`, so a `<try>` that has a `<@catch>` gets a child boundary that never subscribes to anything and `Boundary.abort` never walks children. `_await` gates its body on `!boundary.signal.aborted`, and for an `<await>` inside such a `<try>` that boundary is the catch boundary, which no abort ever reaches — so after the consumer gives up, every pending region in the page keeps rendering into a stream nobody reads. Aborting a 3-region page 50 ms after the shell flush still ran the bodies at +315 ms, +1116 ms and +2616 ms, while the same page with no `<try>`, or with a `<try>` carrying only a `<@placeholder>` (which forks on the parent boundary), stops immediately; both `$global.signal` and the async iterator's `return()` behave the same way. The parent's signal cannot just be forwarded, because `catchBoundary.signal.aborted` doubles as "the body threw" and would render `<@catch>` on a disconnect; the reorder flush already walks `boundary.parent` for an aborted ancestor, and `_await` can make the same walk before `chunk.render`.

Check: render three `<try><await|v|=deferred><@catch>` regions to an async iterator and abort `$global.signal` 50 ms after the first chunk — all three bodies still execute today; expect none to execute after the abort, which is already what happens when the `<@catch>` is removed.
