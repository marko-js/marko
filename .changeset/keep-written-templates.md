---
"@marko/runtime-tags": patch
---

Keep an imported template in the client bundle when the server writes it to the resume data, as a `<let>` or `<const>` holding it, an attribute a child stores, or a tag variable a child returns it as. A resumed page no longer removes the content of a dynamic tag rendering such a template when it updates.
