---
"@marko/runtime-tags": patch
---

The body of a dynamic tag named by an input property (`<${input.as || "div"}>`) is no longer registered unconditionally for the client: each caller registers it only when the value it passes may be a component, so a body only ever named by strings is left out of the bundle. A body whose tag name is always a string is never registered.
