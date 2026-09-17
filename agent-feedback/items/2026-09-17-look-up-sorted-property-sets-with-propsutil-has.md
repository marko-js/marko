---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › propsUtil
---

# Look up sorted property sets with `propsUtil.has`

`Binding.excludeProperties` and `Binding.noSerializeProperties` are kept
sorted by `propsUtil`, and some sites test membership with `propsUtil.has`
while others use the linear `includes` from `optional.ts`
(`getKnownFromPropTree`, `getSingleKnownSpread`, the known-spread attribute
loop in `analyzeParams`, `computeBindingSerialization`,
`mapParamBindingToExpr`, the spread-property loop in `native-tag.ts`, and
`set-tag-sections-downstream.ts`). One convention for sorted data keeps an
accidental unsorted write visible, as `bindingUtil.has` does for binding
sets. Same-size arrays either way, so no behavior or output change.

Check: `grep -rn "includes(.*\(excludeProperties\|noSerializeProperties\)" packages/runtime-tags/src/translator` lists eight sites beside the three `propsUtil.has` ones.
