---
"@marko/runtime-tags": patch
---

Give each iteration of an attribute tag `<for>` its own content. Rendering one iteration's content in place of another's (such as switching tabs with `<${tabs[i].content}/>`) now recreates it instead of carrying the previous tab's `<let>` state over, and no longer throws after resuming a server-rendered page.
