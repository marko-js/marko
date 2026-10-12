---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/program/dom.ts › translate.exit
---

# Keep content registrations driven only by the template's input with the callers that can drive them

A `_content` registration whose renderer reason (`getRendererReason`) holds only the template's own params is registered by the template's module, with its setup and every closure that setup reads, though the server writes it only under a group bit a caller sets: a page that renders the template at its root (whose input never changes on the client) ships it for nothing. The same holds for a dynamic tag's body when its name comes from the input (`<${input.as || "div"}>`) and for content closing over loop values. Emitting it pure alone breaks resume (`dom/resume.ts › getRegisteredWithScope` throws on an unregistered id), so whatever may set the bit must keep it: export each such registration under its register id, have a known call site whose `ParamGroup` slot reason may set it import its per-export module (`util/module-registrations.ts › resolveRegisterModule`), pass it up as the caller's own when the caller's params decide that slot, let a `<load>` child's load entry assign it to `_resumed`, register a closures wrapper through a pure `_resume(id, value)` so whatever keeps the content keeps it, and leave a template that renders itself to keep its own. A dynamic tag body is dropped by a caller passing only native tag names (tell them apart by walking the passed value's branches and `<const>` values, as `util/tag-name-type.ts › analyzeExpressionTagName` does for a name). Measured on a full implementation: −4.4 KB brotli across 16 existing fixtures' page bundles (several pages −600 to −700 B), +19 B brotli of runtime, no change to the counter and comments floor.

Check: a fixture whose `template.marko` is `<define/Counter><let/n=0/><button.inc onClick() { n++ }>${input.label} ${n}</button></define><define/Other><i>${input.label}</i></define><${input.which ? Counter : Other} label=input.label/>` rendered with `{ which: true, label: "a" }`: its page bundle (`sizes.json`, 2,140 B brotli) keeps both renderers and both `label` closures though nothing on the client can switch them.
