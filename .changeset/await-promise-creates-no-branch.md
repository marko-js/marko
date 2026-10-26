---
"@marko/runtime-tags": patch
---

Content rendered inside an `<await>` body no longer ships for the client to create when only the await's promise could change it: a settled promise updates the body the await's owner made, and never creates it anew.
