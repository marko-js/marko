---
"@marko/runtime-tags": patch
---

Error in development when a native tag attribute or text interpolation receives a value that can't meaningfully render (a plain object, a promise, a symbol, or a function). For example `<div title={ ... }>` or `${somePromise}` previously rendered useless output like `[object Object]`. Object and function attribute literals are also caught at compile time. `class`/`style`, `content`, event handlers, and change handlers, as well as arrays and values with a meaningful `toString`, are unaffected.
