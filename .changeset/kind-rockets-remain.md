---
"@marko/runtime-tags": patch
---

Ensure when tag arguments are used for a dynamic tag with a single argument that it does not become treated the same as normal input. The normal input runtime will add the `content` as well as default to an empty object which was breaking some usages of tag arguments.
