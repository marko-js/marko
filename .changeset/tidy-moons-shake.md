---
"@marko/runtime-tags": patch
---

Unsubscribe closure scopes without a per-scope `AbortController`, cutting the cost of building and tearing down keyed lists.
