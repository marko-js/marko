---
"@marko/compiler": patch
---

Keep TypeScript on attribute methods and tag params in `output: "source"` and `"migrate"`: a shorthand method keeps its type parameters and parameter types (`onClick<T>(event: T) {}`), a function value with a return type is no longer rewritten as a shorthand that drops it, and tag params keep their types (`|x: T|`).
