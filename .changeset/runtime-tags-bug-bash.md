---
"@marko/runtime-tags": patch
---

Fix a batch of runtime and translator bugs:

- Fix an array-pattern rest element in a tag param or nested destructure (e.g. `<for|[first, ...rest] of rows|>`) being aliased to a sibling binding, which produced wrong values for the rest and its siblings.
- Fix `${...}` interpolation that includes a template literal (e.g. a `<textarea>` body) losing escape sequences by using the cooked instead of raw quasi value.
- Fix a run of adjacent static-text placeholders with no intervening text node (e.g. `<div>${"a"}${"b"}${dynamic}</div>`) dropping a DOM walk step, and two static texts separated only by a static placeholder or comment (e.g. `a${"x"}b`) over-counting it — either of which misaligned a following dynamic node.
- Fix a typed-array view that starts at offset 0 but doesn't span its whole buffer serializing a truncated buffer, breaking a later view that shares the buffer.
- Fix a registered/resumable object or class method with a computed key losing its `computed` (and `static`) flag during SSR translation, changing the property name.
- Reject a string `by` key on `<for in>`/`<for to>`/`<for until>` at compile time with a helpful error instead of crashing at render (string `by` is only supported on `<for of>`).
