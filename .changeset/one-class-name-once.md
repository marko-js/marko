---
"@marko/runtime-tags": patch
---

A class name may now appear only once in a `class` value, and debug builds no longer write a `class` or `style` value's parts out again in a separate check on every render. The compiler rejects a repeated literal name, such as `class=["a", "b a"]`, and in development the server throws as it writes a class with a repeated name, which checks every combination of a few toggles as the template's module loads. The server also checks in development that a style property appears in only one part of a `style` value.
