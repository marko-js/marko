---
"@marko/runtime-tags": patch
---

A `<@content>` attribute tag is now a compile error under any tag, since a tag's `content` is its body: write it as the tag's body, or pass it with `content=`. Attribute tags under a native tag are an error too: a compile error on a native tag or on a dynamic tag whose name only resolves to native tags, and an error in debug builds when a dynamic tag renders a native tag with an attribute tag in its input. A native tag's content, from `content=`, a spread or a dynamic tag, is body content, a `<define>` tag variable or attribute tag holding it, or a falsy value; anything else is an error in debug builds.
