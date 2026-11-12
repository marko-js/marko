---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/writer.ts › holdReorderEffects
---

# Run a held reorder's effects only once the client applied the reorder

While in-order content streams, `Chunk.flush` holds a reorder's effects and later releases them into the main resume array, where they run whether or not the inline reorder runtime ever saw that reorder's `<t hidden>`; the `runtime.j[id]` callback path only runs them once the walker reaches it. The inline walker (`inlined-runtimes.debug.ts` › `WALKER_RUNTIME_CODE`) only moves forward from the script that last called it, so a `<t>` the HTML parser foster-parents out of an open `<table>`/`<tbody>`/`<tr>` lands behind it and is never walked: its markers never become visits, the released effect runs on a scope with no nodes, and `_on` throws from `render.w`. Direction: keep held effects tied to their reorder being applied, as the callback path is, so a missed reorder stays inert.

Check: a fixture with `<let/value=0/><try><@placeholder>loading</@placeholder><await|x|=resolveAfter(1, 2)><button onClick() { value++ }>${value}</button></await></try><table><tbody><await|v|=resolveAfter("a", 1)><tr><td>${v}</td></tr></await><await|v|=resolveAfter("b", 3)><tr><td>${v}</td></tr></await></tbody></table>`, `skip_csr: true` and steps `[{}, flush, flush, flush]` fails `ssr` with `TypeError: Cannot set properties of undefined (setting '1click')` at `_on`.
