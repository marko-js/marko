---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Run a parent effect that reads a lazy tag's variable once the variable arrives

A lazily loaded tag's variable (and values aliasing or derived from it) reaches the resumed parent from the tag's ready stream (`_var_scope`), after the parent's main-stream effects have run. A parent `<script>` that reads that variable therefore runs at resume with `undefined` and never runs again when the value arrives, since a ready fill is data only; a client render runs the same effect once, with the value. Direction: write an effect whose signal reads a lazy tag's variable through that tag's ready stream too (as `_var_scope` does for the value), so it runs in the ready batch after the fill; an effect reading variables of several lazy tags needs every one of their channels.

Check: fixture with `child.marko` = `<let/n=0><p>n ${n}</p><return=() => n++>` and `template.marko` = `import Child from "./child.marko" with { load: "render" }` + `<Child/api/>` + `<script>console.log("effect", typeof api)</script>`, `equivalent: false`, steps `[{}, wait, wait]`: `render-ssr.debug.md` logs `"effect" "undefined"` only, while `render-csr.debug.md` logs `"effect" "function"`.
