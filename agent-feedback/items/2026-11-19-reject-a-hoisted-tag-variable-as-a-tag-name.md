---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/const.ts › assertNoHoistedTagName
---

# Reject a hoisted tag variable as a tag name

A tag name that reads a hoisted tag variable is passed the variable's getter, in both outputs and whatever the value is: a `<const>` whose value may be a function, a `<let>`, a native tag's variable. The getter is no tag to render, so the tag renders only its body (nothing, when it has none) and no error is reported. `assertNoHoistedTagName` rejects only a `<const>` whose value is certainly not a function. A tag name is read while rendering, where a hoisted value cannot be read at all ("Hoisted values can only be read in scripts and event handlers"), so every such name could be a compile error.

Check: `pnpm run compile -- -o html` on `<${Tag}>body</>` above `<let/Tag="div"/>` (or above `<const/Tag=input.renderer/>`) prints `_dynamic_tag($scope0_id, "a", $Tag_getter, …)`. As a fixture with steps `[{}]`, the `<const>` shape renders `body`.
