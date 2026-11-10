---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › analyze
---

# Link a dynamic tag's attributes to its known templates' input, as a known tag's are

A dynamic tag links its body to the params of the templates its name resolves to (`setTagContentDerives`) but none of its attributes, so the readers walk in `solve-reasons.ts` and the registration step in `module-registrations.ts` stop at the tag. A template passed through such an attribute to a known template that reads it on the client is written to the page but never registered, so the client renders nothing. A known tag works because `analyzeAttrs` derives each attribute from the child's param. Direction: in analyze, have each attribute derive the input property each known template reads it as (the whole input where a template reads it whole, through a rest, a spread or attribute tags), and let the walk follow a merged member's own derives.

Check: a fixture with `tags/item.marko` `<em>${input.label}</em>`, `tags/frame.marko` `<let/n=0/><button onClick() { n++ }>${n}</button><section><${input.item} label=`${input.label} ${n}`/></section>`, and `template.marko` importing both and rendering `<${input.framed ? Frame : null} item=Item label=input.label/>`, steps `{ framed: true, label: "a" }` then a click on the button: the resumed page's update shows `<section />` (`REMOVE: section > em`), where a client render shows `<em>a 1</em>`. The same through `<frame item=Item label=input.label/>` renders correctly.
