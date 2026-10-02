---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/is-only-child-in-parent.ts › isOnlyChild
---

# Address an only-child branch by its element beside a component that renders nothing

`isOnlyChild` lets an `<if>`, `<for>` or `<show>` drop its own marker when every sibling renders nothing, but refuses any custom tag sibling, even one whose template renders nothing (`getNodeContentType` already gives `null` for it), so `<div><noop v=x/><if=x><span/></if></div>` still clones `<div><!></div>`. Nothing else blocks it now that `allocateIds` numbers dom bindings by the structure stream: with the `(sibling.isMarkoTag() && !isCoreTag(sibling))` clause dropped, the whole suite passes, the `only-child-beside-component-keeps-marker` fixture's resume and click steps included, and that fixture clones `<div>${_w0}${_w1}</div><ul></ul>` with no markers. A component that renders anything still needs the marker, since the branch clears its element with `textContent = ""` (`setConditionalRenderer`). Left to do: drop the clause, rename that fixture for what it then pins, and add a changeset.

Check: `pnpm run compile -- -o dom -d` on the `only-child-beside-component-keeps-marker` fixture gives `<div>${_w0}<!>${_w1}</div><ul><!></ul>`.
