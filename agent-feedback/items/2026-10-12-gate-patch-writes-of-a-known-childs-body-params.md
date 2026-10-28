---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/finalize-references.ts › resolveBindingSources
---

# Write a body's tag params in a patch only when what the child renders them with changes

A body's tag params (`<popover|Context|>`) take their values from the child's render call (`<${input.content}(Context, $el)/>`), but `resolveBindingSources` gives such a param only itself as a source, so every patch re-sends what derives from it even when the child passes the same values: in the check below, a patch that only changes `label` re-sends `<Context>`'s dynamic tag entry (`ca:{cAb:{fa:["a b1",0,0,"a0"]}}`, about 30 B per instance). Client state is no longer overwritten (the form keeps its `action`); what remains is the wire. Direction: let the child's render call gate the body's param groups the way call sites gate a child template's root params (`_set_scope_reason`), with the child's arguments reporting any `$global` they read; a `<define>` body called in place (`callSections`) keeps its call-site groups.

Check: a `patches: true` fixture whose `tags/popover.marko` is `<let/value=null/>`, `<define/Context><return=value></define>`, `<div/$el id="p" popover onBeforeToggle(e) { value = e.newState === "open" ? "1" : null; }><${input.content}(Context, $el)/></div>`, and whose `template.marko` is `<popover|Context|><Context/messageId/><form action=(messageId && "/m/" + messageId)/></popover><p>${input.label}</p>`, with steps `{ label: "a" }`, a `beforetoggle` event (`newState: "open"`) dispatched on `#p`, then `{ label: "b" }`: its `patches.js` still carries the `<Context>` `PatchDynamicTag` entry for the label-only patch.
