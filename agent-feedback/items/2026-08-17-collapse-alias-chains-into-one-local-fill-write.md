---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/persisted/delivery.ts › isPatchFillBinding
---

# Collapse alias chains into one local fill write

`getCanonicalBinding` (`util/references.ts`) collapses one alias hop, and property aliases hang off the immediate alias, so `<for|item|><const/a=item/><const/b=a/>${b.id + a.id + item.id + count}` classifies `item.id`, `a.id`, and `b.id` as three server-owned local fills: three `_patch_value` writes per item per frame and three `_fill_join`/`_fill_const` wrappers in the bundle for one value. Correct output, N× cost. Resolve property aliases against the alias root (or canonicalize through the chain) to collapse them.

Check: the template above under `persisted: true`; `patches.debug.js` carries three `PatchValue` keys per item.
