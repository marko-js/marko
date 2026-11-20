---
"@marko/runtime-tags": patch
---

A `style` property may now appear only once across a `style` value. A repeat the compiler can see, such as `style=["color:blue", { color: tint }]` or `style=[{ color: a }, { color: b }]`, is a compile error, and one known only while rendering, such as an imported part that also sets `color`, throws in development. Before, the server wrote every declaration so the later one won, while the client could keep one in the template and update the other alone, so the two disagreed. Give each property one source, such as `style={ color: tint ?? "blue" }`.

In exchange more `style` values update one property at a time: an imported part such as `style=[base, { color: tint }]` stays in the template, and only `color` updates when `tint` changes.
