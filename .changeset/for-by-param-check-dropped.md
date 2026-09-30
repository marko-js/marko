---
"@marko/runtime-tags": patch
---

Stop rejecting a `<for>` whose `by=` names a loop param at compile time, a check that also rejected an outer binding sharing a param's name. Keying by a param now fails at render, since `by=` is evaluated before the loop runs.
