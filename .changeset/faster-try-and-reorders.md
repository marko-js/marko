---
"@marko/runtime-tags": patch
---

Speed up streaming pages with many `<try>` tags or many out-of-order `@placeholder` parts still waiting. Each `<try>` no longer creates an `AbortController` or adds an abort listener to the one around it, and parts waiting in a reorder no longer get rechecked on every flush. Content that a caught `<try>` body's `<await>` rendered no longer streams.
