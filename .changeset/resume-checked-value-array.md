---
"@marko/runtime-tags": patch
---

Keep a checkbox group's bound `checkedValue:=` array intact on resume. The array was rebuilt from the checked checkboxes, so a value with no rendered checkbox (a filtered or paged list) was dropped by the first toggle after the page resumed. The server now sends the bound values and resume starts from them.
