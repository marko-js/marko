---
"@marko/runtime-tags": patch
---

Fix server streaming around `<try>`. A promise sent to the browser from a `<try>` that had already settled could end the stream before a later `<await>` rendered, a promise in a `@placeholder` could lose its resolution when a sibling `<try>` caught, lazily loaded content flushed after its `<try>` caught could discard other lazy content's queued resume data, and lazily loaded content directly inside a `<try>` did not resume as part of its branch. A value that cannot be serialized in lazily loaded content inside a `<try>` now fails the render as it does elsewhere, instead of showing the `@catch`. `@placeholder` and async `@catch` content inside a `<select value>` now also mark their matching `<option>` as `selected`.
