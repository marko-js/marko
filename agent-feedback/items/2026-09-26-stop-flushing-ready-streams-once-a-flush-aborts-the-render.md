---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushReadyScripts
---

# Stop flushing ready streams once a flush aborts the render

When serializing one ready stream aborts the render (`html/serializer.ts` › `abortUnreachableChannel`, a debug-only diagnostic), the `Boundary` abort listener swaps in a fresh `State`, but `Chunk.flushReadyScripts` keeps flushing the remaining deferred ready chunks. `flushSerializer` then pairs their `writeScopes` with the fresh `State`'s empty `scopes` map and the serializer throws `TypeError: Invalid value used as weak map key`, which replaces the abort's diagnostic as the render's error. Direction: stop the flush (in `flushReadyScripts`, or in `flushSerializer` as `Boundary.flush` already does) once the boundary's signal is aborted, so the render rejects with the abort reason.

Check: fixture with `a.marko`, `b.marko` and `c.marko` = `<let/n=0><p>${n}</p><return=() => n++>` and `template.marko` = three `import X from "./x.marko" with { load: "render" }` lines + `<A/a/><B/b/><const/both={ a, b }><C/c/><button onClick() { both.a(); both.b(); c() }>inc</button>`, `equivalent: false`, steps `[{}, wait]`: the debug `ssr` run fails with `TypeError: Invalid value used as weak map key` from `newScopeReference` under `flushReadyScripts`; dropping `<C/c/>` (and `c()`) makes it fail with the "shared between independently lazy loaded content" abort instead.
