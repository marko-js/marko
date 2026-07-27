---
"@marko/runtime-tags": patch
---

Drop `$global` from the input a mounted template's `update` forwards, matching `mount`. A template that spreads its input previously threw `Invalid attribute name: "$global"` on update, since the branch's global is fixed at mount and the property was passed through as an ordinary one.
