---
"marko": patch
---

Persisted update renders now replay `<if>` conditionals whose test reads
`$global` directly (eg `<if=$global.params.sale>`). Reads recorded after
their owning expression was merged into another node's extra (promoted
`$global` reads are tracked at identifier-visit time, after a branch tag's
analyze merged its test) landed on the stale extra, so the merged
expression resolved without them — the update entry defined a body merge
nothing dispatched and the branch never toggled. Reads now resolve
through the merge target, which also consolidates `input ∩ $global`
intersections into their proper signal.
