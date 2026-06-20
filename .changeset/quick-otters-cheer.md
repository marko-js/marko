---
"@marko/runtime-tags": patch
---

Fix `async` method-shorthand event handlers (e.g. `async onClick() { … }`) being normalized with their `async` and `generator` flags swapped. The handler was rewritten as a non-async generator, so any `await` inside it failed to compile (`` `await` is only allowed within async functions ``). The flags are now preserved.
