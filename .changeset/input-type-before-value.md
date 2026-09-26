---
"@marko/runtime-tags": patch
---

Apply an `<input>`'s dynamic `type` before its `value`. A checkbox that turns into a text input now shows its new `value` instead of the previous one, text typed into an input no longer becomes its `value` when it turns into a checkbox, and a bound `value:=` is no longer cleared by the previous type's rules (a `type="number"` input turning into a text input).
