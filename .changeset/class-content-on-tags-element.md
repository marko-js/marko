---
"@marko/runtime-tags": patch
"marko": patch
---

A Tags-API element that renders `content` from a Class-API parent, by spreading an attribute tag onto a native or dynamic tag (`<div ...input.foo/>`, `<${input.tag} ...input.foo/>`) or the input (`<div ...input/>`), or through `content=`, now renders that content and updates with the parent. Previously the element rendered empty, and a dynamic tag's server render failed in development with `Unable to serialize "input.foo"`.
