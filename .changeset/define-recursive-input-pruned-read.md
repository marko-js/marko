---
"@marko/runtime-tags": patch
---

Fix a `<define>` or template that renders itself throwing after the page resumes when its input is read whole somewhere pruning removes, such as an unread `<const/all=input/>`.
