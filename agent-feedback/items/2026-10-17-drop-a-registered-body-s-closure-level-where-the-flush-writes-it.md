---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › getContentClosureValues
---

# Drop a registered body's closure level from a patch where the flush writes the closure

A patch render's dynamic tag entry and bind carry a registered body's
closure levels (`getContentClosureValues`, through the `_content_resume`
locals) even where the same flush writes each closure into its own scope:
`patch-loop-define-content-owner` sends `fa:["^F N N a0",0,0,0,{h:"c"}]`
inside the row entry that sets `va12:"c"`. Gating a level on
`scopePageIdentifier` lets the entry's trailing trim drop it (`bindEntry`
would need the same trim), but only where every closure in it arrives each
flush. `getPatchFill(…).fill === true` covers no fixture: that row value's
fill carries `contents` conditions, yet `writeLocalFill` writes it gated by
its group's ownership alone. A predicate naming what `writeLocalFill` and an
unconditional `gatePatchWrite` write, shared with those writers, would cover
it. A closure no patch writes keeps its level, as a body the client creates
after the flush reads it.

Check: `patch-loop-define-content-owner`'s `patches.js` has `h: "c"` in the
row entry that sets `va12: "c"`; `patch-bind-loop-dynamic-tag-body` and
`patch-loop-dynamic-tag-body-stateful-if` render blank if every level is
gated.
