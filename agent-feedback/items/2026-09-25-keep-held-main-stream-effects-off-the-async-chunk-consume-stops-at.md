---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/writer.ts › Chunk.consume
---

# Keep held main-stream effects off the async chunk `Chunk.consume` stops at

`Chunk.consume` folds every predecessor's `effects`, `scripts`, `lastEffect` and `deferredReady` into the first async chunk it reaches, and `Chunk.flushScript` parks reordered effects on that same chunk while in-order content streams. That chunk can belong to an owner that later discards or redirects its output. When it is the body of an in-order `<try>` with `@catch`, the catch branch of `tryBoundary`'s `catchBoundary.onNext` resets its `scripts`/`effects`/`lastEffect`/`deferredReady`, dropping effects rendered before the try: a preceding tag's handler, and a preceding `@placeholder` try's effects and its `_placeholderDismiss`. When it is lazy content (`serializeState.readyId`, an `import … with { load }` tag whose body awaits), `flushReadyScripts` later writes the held main effects into `M._.b[readyId]`, so they wait for the lazy module and never run if it fails to load. Direction: hold main-stream output on something the async chunk's owner cannot reset or redirect (a main-stream carrier that `flushScript` releases, rather than the async chunk's own fields), guarded by fixtures `try-catch-async-keeps-preceding-effects` and `lazy-tag-async-keeps-preceding-effects`.

Check: with `tags/counter.marko` = `<let/count=0><button onClick() { count++ }>${count}</button>`, `equivalent: false` and steps `[{}, flush, click]`: (1) template `<counter/><try><await|v|=rejectAfter(new Error("ERROR!"), 1)>${v}</await><@catch|e|>${e.message}</@catch></try>`: no flush in `writes.debug.html` carries `tags/counter.marko_0 2`, and `render-ssr.debug.md` shows the click leaving the button at `0` (CSR counts to `1`); (2) template `import Child from "./child.marko" with { load: "idle" }` + `<counter/><Child/>` with `child.marko` = `<await|v|=resolveAfter("done", 1)><span>${v}</span></await>`: the second flush writes `M._.b={"ready:…/child.marko":["…/tags/counter.marko_0 2"]}` and the click changes nothing (with a synchronous `child.marko` of `<span>done</span>` it counts to `1`). The fixture `try-placeholder-promise-settles-after-sibling-catch` hits (1) through a preceding `@placeholder`'s `<script>`: its `render-ssr` snapshots leave `#ref` at `0` and should read `hello` once fixed.
