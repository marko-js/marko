---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/client.ts › createStatementTag("client")
---

# Diagnose a `client`/`server` binding read during render

A `client`-scoped module binding is `undefined` on the other platform, and reading one while rendering fails without ever mentioning Marko. `client const CHART = { name: "x" };` with `<div>${CHART.name}</div>` throws a bare `TypeError: Cannot read properties of undefined (reading 'name')` during SSR — no template, no tag, no hint that `CHART` is platform-scoped — while the plain `${CHART}` form renders empty and reports nothing at all. The cheatsheet warns about the call shape (`is not a function`), which covers only one of the three ways this lands. The translator already knows which bindings a `client`/`server` block declares and which expressions run during render, so it can name the binding and the reason. A hard compile error is probably too strong, since a guarded read is legitimate; a `MARKO_DEBUG` diagnostic naming the binding and pointing at `<script>`/`<lifecycle>`/handlers would stop the trip.

Check: compile `client const CHART = { name: "x" };` plus `<div>${CHART.name}</div>` with `-o html -d` and render the result — it throws `TypeError: Cannot read properties of undefined (reading 'name')` with nothing identifying the template, the tag or the binding.
