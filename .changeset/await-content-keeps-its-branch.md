---
"@marko/runtime-tags": patch
---

Fix interactive content inside an `<await>` stopping after resume once a later sibling `<if>` or `<for>` branch is removed. Its `$signal` was aborted and its updates stopped because the removed branch had claimed the await content as its own; resolved `<await>` content that resumes is now kept within its own branch. Content that streams in behind a `<try>` `@placeholder` after its enclosing branch was removed no longer runs its effects.
