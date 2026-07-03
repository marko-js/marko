---
"@marko/runtime-tags": patch
---

Compile a dynamic tag whose name is a non-nullable, statically enumerable set of safe native tag names (for example `<${link ? "a" : "span"}>`) as a real native element instead of routing it through the general dynamic tag runtime. The element and its attributes are inlined like an ordinary native tag, and a name change becomes an in-place element swap (attributes and children are moved to the renamed element) rather than tearing down and re-rendering a branch. This drops the branch, renderer, and form-control machinery `_dynamic_tag` would otherwise pull in for these tags. Anything outside the supported shape (nullable or non-enumerable names, form-control/void element names, bodies, tag variables, spread or event attributes) continues to use the general dynamic tag.
