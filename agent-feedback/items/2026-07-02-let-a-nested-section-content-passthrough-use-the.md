---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/binding-prop-tree.ts › isDirectContentBinding
---

# Let a nested-section content passthrough use the slim `_dynamic_tag_content`

`<${expr}/>` always builds the fully general `_dynamic_tag` signal (`visitors/tag/dynamic-tag.ts`), whose string-tag branch pulls `_attrs`, `_attrs_content`, `_attrs_script` and `controllableRenders` (`src/dom/control-flow.ts`) into the shared chunk. A slim `_dynamic_tag_content` already exists, emitted as an extra `directContentExport` a known parent calls instead, so `<${input.content}/>` lets the bundler shake the general signal out. But `isDirectContentBinding` requires `read.section === binding.section`, so the idiomatic optional slot `<if=input.aside><${input.aside.content}/></if>` — the read now lives in the `<if>` body section — gets no direct export and drags `_dynamic_tag` in. Relax the section check (the passthrough is still input-less and parameter-less; only the branch scope differs) so the direct export is emitted there too. Related but separate: the `TODO: Optimize for when we are certain that this is either always a string or always a custom tag` at `tag-name-type.ts:191` would cover the `<let>`-bound tag name case.

Check: compile that `<if>` template with `-o dom` and check for an `export const $input_aside_content_direct = _dynamic_tag_content(0)` beside the `_dynamic_tag` signal, as `<div><${input.content}/></div>` already produces.
