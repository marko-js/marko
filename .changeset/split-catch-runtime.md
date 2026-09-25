---
"@marko/runtime-tags": patch
---

Pages with `<try>`, `<await>` or lazy tags no longer always ship the `@catch` and pending-work runtime: routing render errors to `@catch` only ships with a `<try>` that has one, and holding renders and effects for pending work only with an `<await>` or lazy tag the browser can wait on.
