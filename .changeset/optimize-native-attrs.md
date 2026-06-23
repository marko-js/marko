---
"@marko/runtime-tags": patch
---

Render native attribute values at compile time. Conditional and logical attribute values are pushed down to their branches so the literal side is serialized at build time, and a shared `name=` prefix is hoisted out so only the differing value stays dynamic — e.g. `title=x ? "a" : "b"` compiles to `title=${x ? "a" : "b"}`, and `aria-hidden=x && "true"` serializes the `"true"` side without re-evaluating `x`. Because `class`/`style` omit a falsy value, `class=x && "active"` further simplifies to `x ? " class=active" : ""`. A `class` object/array with a static base is resolved up front without re-evaluating any toggle: a single toggle picks a precomputed literal, a few index a hoisted table packed from the toggles, and more concatenate the string for `_attr_class` — in every case the class array/object is no longer allocated and the quoting is resolved at build time.
