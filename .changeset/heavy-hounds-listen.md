---
"@marko/runtime-tags": patch
"marko": patch
---

Allow a Class-API parent to pass an inline function prop (`<tags-child onChange() {...}/>`) to a Tags-API child: it previously failed to serialize, breaking hydration for the whole page.
