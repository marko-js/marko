---
"@marko/runtime-tags": patch
---

Report a compile error when code assigns a rest element, such as `rest` in `<const/{ ...rest }=input.obj>` or `args` in `<for|...args| of=list>`. A rest has no change handler to receive a new value, so the assignment used to compile into one that did nothing. Assigning a member of a rest taken beside other names, such as `rest.b = 5` with `<const/{ a, ...rest }=input.obj>`, is also an error: that rest is a copy rebuilt whenever its source changes, so later reads never saw the assignment.
