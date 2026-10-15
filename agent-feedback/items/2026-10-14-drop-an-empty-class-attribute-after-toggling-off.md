---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/dom/dom.ts › _attr_class_item
---

# Decide whether a class toggled off leaves `class=""`

A class the compiler toggles per name (`class={ odd }`, and `class=(odd ? "x" : "")`, which compiles the same way) is updated with `classList.toggle`, so turning the last one off leaves `class=""`. A server render of the same state omits the attribute (`_attr_class` drops an empty value too), so the client's markup differs from SSR's after an update; nothing renders differently, but `[class]` selectors and markup comparisons see it. Dropping the attribute when `classList` empties costs bytes in every bundle that toggles a class (not the counter/comments floors); leaving it deserves a site comment saying it is deliberate.

Check: render `<let/odd=true/><p class={ odd }>c</p><button onClick() { odd = !odd }>t</button>` and click: the `<p>` ends with `class=""`; an SSR render with `odd` false writes `<p>`.
