---
"@marko/runtime-tags": patch
---

Fix a `<try>`'s `@placeholder` staying on the page forever when a nested `<try>` streamed in its body: a nested `@placeholder` before the body's first `<await>`, a nested `@catch` that fired while earlier content held the stream, or a nested `@placeholder` that throws, which now shows the outer `@catch`. The inline reorder runtime is also smaller.
