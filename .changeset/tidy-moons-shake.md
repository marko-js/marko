---
"@marko/runtime-tags": patch
---

Drop the per-scope `AbortController` behind closure subscriptions, cutting the cost of building and tearing down keyed lists.
