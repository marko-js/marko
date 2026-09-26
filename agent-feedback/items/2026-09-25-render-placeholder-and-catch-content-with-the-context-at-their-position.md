---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushPlaceholder
---

# Render placeholder and catch content with the context captured at their position

`withContext` sets a key on the chunk's shared `context` object and restores it when its callback returns, but `Chunk.flushPlaceholder` renders `placeholder.render`, and `tryBoundary`'s catch branch renders `catchContent` through `chunk.fork`, only later and with that already restored object. Content that reads a context value there renders without it: inside `<select value="b">`, a `<try>`'s `@placeholder` `<option value="b">` and an async `@catch` `<option value="b">` both render without `selected`, so the placeholder or fallback shows the wrong option. `_await` already snapshots the context (`{ ...chunk.context, [kPendingContexts]: 0 }`) when `kPendingContexts` is set. Direction: take the same snapshot when `tryPlaceholder` records `chunk.placeholder` and when `tryBoundary` defers the catch, and render the deferred content under it.

Check: fixture with template `<select value="b"><option value="a">A</option><try><await|v|=resolveAfter("b", 1)><option value=v>async ${v}</option></await><@placeholder><option value="b">placeholder b</option></@placeholder></try></select>`, `equivalent: false`, steps `[{}, flush]`: `writes.debug.html` has `<option value=b>placeholder b</option>` with no `selected`, while the reordered `<option value=b selected>async b</option>` has it. Swapping the placeholder for `<@catch><option value="b">catch b</option></@catch>` and the await for `rejectAfter(new Error("x"), 1)` writes `<option value=b>catch b</option>`, also without `selected`.
