---
"@marko/runtime-tags": patch
---

Keep a `<try>`'s `@placeholder` until a lazily loaded tag in its body has inserted when the tag's module was already loaded, for example by the same tag in the placeholder, but its input was not. The body used to swap in before the tag's content, running its effects early. A lazily loaded tag also no longer throws `NotFoundError` on the client when its input lands after the `<try>` around it moved its content to show or dismiss the placeholder.
