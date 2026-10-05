---
"@marko/runtime-tags": patch
---

Render a `class` built from stylesheet module reads (CSS modules, vanilla-extract `.css.ts`, or a `<style/styles>` block) like a literal class. The client template holds it and toggles such as `[styles.a, active && styles.b]` or `{ [styles.b]: active }` update only that class; the server computes each combination's markup once as the module loads instead of on every render.
