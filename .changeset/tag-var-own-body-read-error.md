---
"@marko/runtime-tags": patch
---

In development, reading a custom tag's variable in its own body before the tag's `<return>` now throws "Cannot access before initialization" in the browser even when the read shares an expression with other values (such as `${x + y}`), instead of silently reading `undefined`. A `<define>` tag's variable read in its own body (such as a recursive `<${0 || Foo}/>`) no longer throws that error in the browser, since its value never comes from a `<return>`.
