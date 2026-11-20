---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/dom.ts › _attr_style_item
---

# Set an `!important` style item value with its priority

`_attr_style_item` calls `element.style.setProperty(name, value)`, which ignores a value carrying `!important` (the priority is its own argument), while the server writes `color:red !important` through `stringifyStyleEntry`. So `style={ color: c }` with `c = "red !important"` renders red on the server and loses the declaration on the first client update of that item. Direction: split a trailing `!important` into `setProperty`'s priority argument, or document that item values take no priority.

Check: in Chromium and Firefox, `<div>` then `el.style.setProperty("color", "red !important")` leaves `getAttribute("style")` `null`, while `<div style="color:red !important">` computes `rgb(255, 0, 0)`.
