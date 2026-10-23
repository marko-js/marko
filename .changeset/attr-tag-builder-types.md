---
"@marko/runtime-tags": patch
---

Build repeated attribute tags from data without a cast. `attrTag`/`attrTags` (`marko/common/attr-tag`) produce the value a component reads as the singular prop for `<@tab …>` tags, but both were typed against the internal record they store rather than the tag itself: `attrTags(input.tab, next)` failed TS2345 (`AttrTag<Option>` is not assignable to `AttrTag`) and `const tab: Marko.AttrTag<Option> = attrTag(next)` failed TS2322 (missing `value`, `label`), so assembling tags in a story or a test needed a cast or quietly fell back to an array — which iterates, but reads empty at `input.tab.value`, so the component renders a different shape than the caller built. Both builders are now generic over the attrs and take and return `Marko.AttrTag<T>`, and the cheatsheet names them and says an array is not one. Output is unchanged: the published bundles are byte-identical.
