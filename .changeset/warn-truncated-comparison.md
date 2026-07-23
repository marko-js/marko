---
"@marko/compiler": patch
---

Warn when an unenclosed `>` closes a tag partway through its value expression. `<if=input.n > 0>yes</if>` parses as `<if=input.n>` followed by the text ` 0>yes`, which is a valid but almost never intended reading, so the comparison silently degrades to a truthiness check and the remainder renders as text. Wrapping the value in parentheses keeps the comparison.
