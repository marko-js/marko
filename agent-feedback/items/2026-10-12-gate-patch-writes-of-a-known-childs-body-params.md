---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/finalize-references.ts › resolveBindingSources
---

# Gate patch writes of a body's tag params by what the child renders them with

A body's tag params (`<popover|Context|>`) take their values from the
child's render call (`<${input.content}(Context, $el)/>`), but
`resolveBindingSources` gives such a param only itself as a source. So every
patch writes what derives from it, though the child passes a stable value
(its own `<define>`): a patch that changes only `input.label` still writes
`PatchDynamicTag` for `<Context>` with its tag variable's id. Neither side's
analysis sees the other: the body's template cannot see what the child
passes, and the child cannot see the body's param groups. A direction: the
child's server render call passes a reason per argument position (stable
here) that the body's writes gate on, as call sites gate a child template's
root params with `_set_scope_reason`, with any `$global` an argument reads
reported in it.

Check: a `patches: true` fixture whose `tags/popover.marko` is `<let/value=null/>`, `<define/Context><return=value/></define>`, `<div/$el id="p" popover onBeforeToggle(e) { value = e.newState === "open" ? "1" : null; }><${input.content}(Context, $el)/></div>`, and whose `template.marko` is `<popover|Context|><Context/messageId/><form action=(messageId && "/m/" + messageId)/></popover><p>${input.label}</p>`, with steps `{ label: "a" }`, a `beforetoggle` event (`newState: "open"`) dispatched on `#p`, then `{ label: "b" }`: its `patches.debug.js` writes `"PatchDynamicTag:#text/0"` for `<Context>` in the patch that only changes `label`.
