---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

A custom tag invoked with arguments and a body (`<my-tag("a")>hi</my-tag>`) is now a compile error instead of silently dropping the body; dynamic tags still allow arguments with fallback content.
