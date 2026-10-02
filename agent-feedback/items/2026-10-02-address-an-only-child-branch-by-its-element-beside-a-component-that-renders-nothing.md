---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/is-only-child-in-parent.ts › isOnlyChild
---

# Address an only-child branch by its element beside a component that renders nothing

`isOnlyChild` lets an `<if>`, `<for>` or `<show>` drop its own marker when every sibling renders nothing, but refuses any custom tag sibling, even one whose template renders nothing (`getNodeContentType` already gives `null` for it), so `<div><noop v=x/><if=x><span/></if></div>` still clones `<div><!></div>`. Allowing it fails only the walk-order check: the element's node binding is created when the `<if>` is analyzed, after the component's child scope binding, so ids follow that order while the walk visits the element first (`a section's walk holds scope indexes [1,0,2,4,3,5] of its 6` on `only-child-beside-component-keeps-marker`). Direction: create the element's node binding in the native tag's analyze `enter` (`visitors/tag/native-tag.ts`) when a child control flow tag takes it as its only-child parent, so its id precedes its children's; then drop the custom tag clause from `isOnlyChild` and confirm resume still finds the branch. A component that renders anything still needs the marker, since the branch clears its element with `textContent = ""` (`setConditionalRenderer`).

Check: `pnpm run compile -- -o dom -d` on the `only-child-beside-component-keeps-marker` fixture gives `<div>${_w0}<!>${_w1}</div><ul><!></ul>`.
