---
"@marko/runtime-tags": patch
---

Content that streams in out of order (a `<try>` with a `@placeholder`) or loads lazily (`load`) no longer becomes interactive while in-order content, such as an `<await>` without a placeholder, is still streaming. Its effects now wait with the rest of the page's, so a value changed meanwhile can no longer leave the in-order content showing the server's stale value.
