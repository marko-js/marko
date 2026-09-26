---
"@marko/runtime-tags": patch
---

Fix functions that a `<for of>` or `<for in>` passes to its body, such as event handlers, not reaching the browser. Debug builds threw `Unable to serialize`, and production builds dropped them.

Fix templates that failed to load, or broke in the browser, when an object method uses `super`, or an arrow function in a class uses `this`, `arguments`, `super` or `new.target`, and the value holding it is used in the browser. These functions now stay as written: they work in a browser render, and a debug server render reports them as unserializable, like any other value it cannot send.
