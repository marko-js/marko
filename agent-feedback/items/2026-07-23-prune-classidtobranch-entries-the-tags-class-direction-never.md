---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/dom/compat.ts › classIdToBranch
---

# Prune `classIdToBranch` entries the tags→class direction never looks up

`compat.init`'s `SET_SCOPE_REGISTER_ID` handler adds every resumed scope carrying `m5c` to the process-global `classIdToBranch`, but the only `delete` is in `compat.render`, which runs for the class→tags direction only; tags→class scopes (written by `writeSetScopeForComponent`, read on the client only as `scope.m5c` in `renderAndMorph`) are retained forever. They also outlive `initEmbedded`'s teardown, which drops `curRenders[renderId]` and releases the parallel `scopesByRender` record, leaving this map the last strong ref to a destroyed branch. Gate the `set` on `scope.m5i === undefined`, the key only the tags→class payload carries. Note the same handler retains every registered scope in `scopesByRender` for the render's lifetime, so top-level renders gain nothing. Distinct from "Compat resume runs the event resolver over every key of every boundary scope", which targets the other cost in this same handler and is worth fixing in one pass.

Check: `rg -n classIdToBranch packages/runtime-tags/src/dom/compat.ts` still shows one `set` (init) and one `delete` (render).
