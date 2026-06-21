---
"@marko/runtime-tags": patch
---

Error in development when a `<for>` tag's `by` attribute returns an invalid key — a non-string/number value (e.g. an object, which collapses every item to `[object Object]`) or a duplicate value. These previously only logged a `console.error` warning while silently corrupting keyed reconciliation (state, focus, and animations attaching to the wrong items). The checks are `MARKO_DEBUG`-only and stripped from production.
