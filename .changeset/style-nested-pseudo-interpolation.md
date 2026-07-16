---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a `${...}` interpolation in a nested selector's prelude after a pseudo-class colon (e.g. `<style>.foo { &:hover ${x} { … } }</style>`) silently compiling to an invalid `var(--…)` in selector position. The pseudo-class colon was mistaken for a declaration-value colon, suppressing the intended error; such interpolations now correctly report that a `<style>` interpolation only resolves in a declaration value.
