---
"@marko/runtime-tags": patch
---

A spread into a custom tag whose input rest leaves out a property named like the rest itself (`<const/{ rest: x, ...rest }=input/>`) no longer generates a duplicate parameter, which failed to build.
