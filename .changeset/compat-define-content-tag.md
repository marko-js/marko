---
"marko": patch
---

A `<define>` value chosen by a dynamic tag inside a Marko 5 component that a tags child renders reaches the class runtime as the template it is, instead of the render failing with `Invalid dynamic tag value`: the dom compatibility layer now recognizes a tags template under `content` rather than looking only at the value itself.
