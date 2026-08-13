---
"@marko/runtime-tags": minor
---

Add a `<for-await>` core tag that renders one keyed branch per item of an async iterable. On the server each item streams to the browser as it arrives (in document order, holding the response open until the iterator completes); in the browser items append incrementally, a new iterable restarts iteration reusing existing items by `by=` key, and pending/error UI delegates to an enclosing `<try>` exactly like `<await>`. Sync iterables fall back to the `<for of>` path.
