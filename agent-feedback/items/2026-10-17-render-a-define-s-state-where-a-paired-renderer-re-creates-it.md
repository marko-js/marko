---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/patch/refresh.ts › getCreatedInits
---

# Render a `<define>` body's state where a paired renderer re-creates it

A `<define>` var passed as `content` to a loop of dynamic tags (`<${input.card ? Card : "span"} label=tag content=Label/>`, `Label` reading `${input.label} ${n}` with `<let/n>` beside it) renders without `n` once a patch keeps a row's `Card` and its `<if=label>` re-creates `Label`: the row shows `<em>c </em>` where a client render shows `c 1`. The row the patch creates renders right, so the re-created body misses the init of the state closure it reads (`n`), which a created scope gets from its shell or the flush.

Check: the template above with `<define/Card|{ label, content }|><p>${label}<if=label><${content}/></if></p></define>`, `<button onClick() { n++ }>${n}</button>`, steps `[{ card: true, label: "a", tags: ["x"] }, click, { card: true, label: "c", tags: ["y", "z"] }]`: the csr check after the second patch fails on the first row.
