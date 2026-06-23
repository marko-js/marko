---
"@marko/runtime-tags": patch
---

Render conditional native attribute values at compile time where possible: the `_attr`/`_attr_class`/`_attr_style` helpers are pushed down through the branches of a conditional and literal branches are serialized at build time (e.g. `title=x ? "a" : "b"` and `class=x ? "on" : "off"` no longer call into the runtime), matching the placeholder text optimization.
