---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/interop/feature-detection.ts › addFeature
---

# Frame the mixed-API error in the file `isTagsAPI` scans

`isTagsAPI(file = getFile())` scans the file it is given, but `addFeature` builds "Cannot mix Tags API and Class API features in the same file" with `buildAggregateError(getFile(), …)`. A scan of any file other than the current compilation would print that file's node locations against the current file's name and source. This cannot happen today. The only caller that passes a file, the interop entry builder's `visit` (`interop/index.ts`), passes a child whose own compile already called `isTagsAPI()` from the merged hooks and either cached `featureType` or threw there. Carry the scanned file in `FeatureState` and pass it to `buildAggregateError`, so the parameter cannot be misused.

Check: read `isTagsAPI` → `scanBody`/`scanTag` → `addFeature`, then `grep -rn "isTagsAPI(" packages/runtime-tags/src/translator`.
