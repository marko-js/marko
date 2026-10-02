---
"@marko/runtime-tags": patch
---

Stream a `<try>`'s `@catch` in its body's place, so it shows without JavaScript. When none of the body has streamed yet, the `@catch` takes its place outright. Once part of the body has streamed, the `@catch` follows it and an empty reorder removes that part. A `@catch` with an `<await>` of its own still streams out of order, so nothing after it waits. A `<try>` whose body settles before the stream reaches it no longer writes reorder markers, and a `@catch` that throws partway no longer streams its partial content.
