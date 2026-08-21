---
type: perf
impact: high
effort: high
site: packages/runtime-tags/src/html/template.ts › ServerRendered.#read
---

# Flush a synchronous page incrementally instead of buffering the whole response

`render` runs `head.render(this, input)` to completion before it constructs the `ServerRendered`, so `#read` only ever sees a finished buffer and a page with no async boundary does not stream at all. `<for|i| to=input.rows><p>row ${i}</p></for>` at 500,000 rows produces an 8,388,907-byte response in exactly one `write`, at 84 ms, so TTFB equals total time, and the string buffer holds 55.0 MB — 6.9x the response — before a byte leaves. It is linear: 2,000,000 rows gives 34,888,908 bytes, still one chunk, 226.7 MB retained, 6.8x. That multiple is per in-flight request, so an abandoned connection on such a page parks it for the life of the socket, and the event loop is blocked for the whole render. The machinery is already there for the async case — an `<await>` page flushes in two chunks with a 0 ms first chunk — so what is missing is a yield point in a synchronous body, e.g. a size threshold in the `Chunk` writer that hands the accumulated HTML to the consumer mid-render.

Check: `template.render({ rows: 500000 }).pipe(sink)` on `<for|i| to=input.rows><p>row ${i}</p></for>` counts `chunks=1` with `ttfb === total === 84ms` and 55.0 MB of heap retained after `render()` returns, against an 8.4 MB response; expect a first chunk in single-digit ms and a high-water mark that does not scale with the response.
