---
"@marko/runtime-tags": patch
---

Read a tag variable's property from its object once any code assigns that property in place, such as `live.open = true` or `box.count++`. Reads used to go through a copy of the property taken when the variable itself last changed, so a handler, `<lifecycle>` listener or `<script>` reading it after another one assigned it saw the old value. This includes a name destructured from the variable, such as `open` in `<const/{ open }=live>`, and properties assigned deeper in, such as `live.nested.depth = 2`.
