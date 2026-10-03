---
"@marko/runtime-tags": patch
---

Let a `<define>` that calls itself, or a template that renders itself, pass its input per prop once its body is analyzed. A whole read of the input that nothing ends up using, such as an unread `<const/all=input>`, used to make the inner call build and pass one object through an extra intersection.
