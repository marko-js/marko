---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/sources.ts › unionParamSources
---

# Merge a section's slot reasons without re-filtering every param per merge

`mergeSlotReasons` folds every slot's reason into the section's with `mergeSources`, and each `unionParamSources` call re-filters the whole merged param list through `someUpToAliasRoot(…, isInParams, merged)`. A section whose slots read many distinct params (content passing many components their own input) pays that per slot, so the fold grows quadratically with the section's width. It is a small share of compile time while Babel's traversal of the quadratic html output dominates (see "Keep a wide template's server output flat and linear"), and becomes the analysis cost that grows fastest once that output is linear. Union all slot reasons' params first and filter the property aliases once, or skip the filter for params whose alias root is not in the merged set.

Check: generate siblings (`<define/Layout|input|><${input.content}/></define><Layout>`, then `<p>${input.aN}</p>` for N = 0…count-1, `</Layout>`), compile each with `node --stack-size=60000 --cpu-prof -r ~ts scripts/inspect-compiled-output.mts -- -o html <file>`, and sum the samples under `mergeSlotReasons`: about 0.08 s at 1,000 siblings and 0.94 s at 3,000 (`isInParams`: 0.14 s and 1.48 s), about 12 times the cost for 3 times the width.
