---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › bindingUtil
---

# Order bindings from different templates by a key that cannot collide

`compareBindings` orders by `section.id`, dom-first, `id` and `uid`, all counted per program, so bindings from two templates can compare equal, and `Sorted.add` (`addSorted`) then keeps only one of them. `getDynamicTagInputBindings` (`visitors/tag/dynamic-tag.ts`) collects every candidate template's input binding into one such list, so a dynamic tag over two small templates loses one template's input reads: when only the lost template reads `input.content`, the body renderer is treated as unread and never declared (`mapParamReason` mixes params across programs the same way). "Stop naming an elided body renderer at dynamic tag call sites" covers the undeclared reference when no candidate reads `input.content`; here one does, so the body must not be elided at all. Direction: compare a stable program key first (for example the program's file name), then section, dom-first and `uid`, rather than the `id` that `finalizeReferences` renumbers while pruned bindings and pure aliases keep their creation `id`. Add an internal error when the compare returns 0 for two distinct bindings.

Check: write `a.marko` = `<div>A ${input.x}</div>`, `b.marko` = `<span>B <${input.content}/></span>` and a template with the lines `import A from "./a.marko";`, `import B from "./b.marko";`, `<let/useB=true/>`, `<${useB ? B : A} x=1>Hello</>`, `<button onClick() { useB = !useB }/>`. `pnpm run compile -- -o dom -d` on it emits `_dynamic_tag("#text/0", $useBBA_content)` with no `$useBBA_content = _content(...)` declaration, and a fixture of it fails debug ssr with "ReferenceError: $useBBA_content is not defined". Swap the two children's bodies and `$useBBA_content = _content(...)` is declared.
