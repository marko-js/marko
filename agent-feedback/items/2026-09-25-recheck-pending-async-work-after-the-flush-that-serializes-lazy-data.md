---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/template.ts › ServerRendered.#read
---

# Recheck pending async work after the flush that serializes lazy data

`ServerRendered.#read` takes its status from `boundary.flush()` and only then runs `head.consume()` and `flushHTML()`, which serialize lazy scopes into their ready stream. A promise serialized there calls `boundary.startAsync()` (`html/serializer.ts › writePromise`), yet a `FlushStatus.complete` status still calls `onClose`, so the stream ends before the promise's `_.a.f(…)` settlement is written and the client-side promise never settles. `#promise` and `toString` compute their status before consuming in the same way. Direction: treat a nonzero `boundary.count` after `flushHTML` as `continue` (and make `toString` throw its async-render error), with a MARKO_DEBUG assert that `boundary.count` is 0 when `onClose` runs.

Check: fixture with `child.marko` = `<const/promise=resolveAfter("hello", 1)/><script>document.getElementById("ref").textContent = await promise;</script><div id="ref">0</div>`, template `import Child from "./child.marko" with { load: "render" }` + `<Child/>`, `equivalent: false`, steps `[{}, wait, wait]`: `writes.debug.html` is a single flush holding the `_.a={f,r(e)…}` handle and no `_.a.f("hello")`, and `render-ssr.debug.md` leaves `#ref` at `0`.
