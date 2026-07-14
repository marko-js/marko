---
"@marko/runtime-tags": patch
---

Add a compiler diagnostic for `<if>`/`<else-if>`/`<else if>` conditions that are silently truncated by an unenclosed `>` (e.g. `<if=count > 0>`, where the `>` closes the tag and the rest leaks into the body). The error points at the condition and suggests parenthesizing it: `<if=(count > 0)>`.
