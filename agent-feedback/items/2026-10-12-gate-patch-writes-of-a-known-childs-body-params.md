---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/write-guard.ts › getPatchWriteOwnership
---

# Gate patch writes of a known child's body params by what the child renders them with

A body's tag params (`<popover|Context|>`) take their values from the child's render call (`<${input.content}(Context, $el)/>`), but `resolveBindingSources` gives such a param only itself as a source, so `getPatchWriteOwnership` finds no root param and writes everything derived from it on every patch. Besides the wasted bytes, a value the child derives from client state is overwritten with the server's initial one: a form `action` built from `Context`'s `<return>` of the child's `<let>` is removed by every patch. Client-side reasons already map these params through `section.derives` → `getRendererReason` (main neither bundles nor serializes a body param the child only ever renders with constants), but reusing that for patches is unsound: it drops `$global` (which client reasons never track, yet changes per request) and must leave a `<define>` body called in place (`callSections`) to its call-site param groups. Direction: let the child's render call gate the body's param groups the way call sites gate a child template's root params (`_set_scope_reason`), with the child's arguments reporting any `$global` they read.

Check: a `patches: true` fixture whose `tags/popover.marko` is `<let/value=null/>`, `<define/Context><return=value></define>`, `<div/$el id="p" popover onBeforeToggle(e) { value = e.newState === "open" ? "1" : null; }><${input.content}(Context, $el)/></div>`, and whose `template.marko` is `<popover|Context|><Context/messageId/><form action=(messageId && "/m/" + messageId)/></popover><p>${input.label}</p>`, with steps `{ label: "a" }`, a `beforetoggle` event (`newState: "open"`) dispatched on `#p`, then `{ label: "b" }`: `pnpm run test:update -- --grep "runtime-tags/translator <name> "` fails with "A patched page left a client render of the same steps", and its `patches.debug.js` writes `PatchDynamicTag` for `<Context>` and `PatchAttr` `action` for a patch that only changes `label`.
