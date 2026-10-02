---
"@marko/runtime-tags": patch
---

Leave nothing of a caught `<try>` body live after the page resumes. Sections the body rendered before its `@catch` fired no longer stay subscribed to closures, which threw on the client once the closure changed. A `@catch` that renders after its `<try>` already streamed is no longer treated as a `<try>` itself, so an error thrown in it reaches the enclosing `@catch` instead of re-rendering the same `@catch`.
