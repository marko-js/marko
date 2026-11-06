---
"@marko/runtime-tags": patch
---

Fix the wording of compile errors: `<return>` names its control-flow parent without quotes, `<style>`'s html-attribute error links the `<style>` and `html-style` docs like `<script>`'s, and a range `<for>` suggests `by=(num) => ...` for a string `by`.
