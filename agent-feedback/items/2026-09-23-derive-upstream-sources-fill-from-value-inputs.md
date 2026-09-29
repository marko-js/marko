---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/patch/structure.ts › upstreamSourcesFill
---

# Walk a binding's value inputs through one helper

`upstreamSourcesFill` follows `binding.upstreamAlias`, else `binding.upstreams`, which is the walk `getValueInputs` in `translator/util/references.ts` does from the program's value-expression map (`upstreams` is exactly `getValueReferences` of those expressions, recorded because the map drops after resolution). Two spellings of one fact drift: an input rule added to one (as `getCanonicalExtra` was to `getValueReferences`) silently misses the other. Have `getValueInputs` read `upstreams` once sources resolve, and call it from `upstreamSourcesFill`.

Check: `grep -n "upstreams" packages/runtime-tags/src/translator/util/patch/structure.ts packages/runtime-tags/src/translator/util/references.ts` shows the two walks.
