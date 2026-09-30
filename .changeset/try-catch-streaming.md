---
"@marko/runtime-tags": patch
---

Fix how a server-rendered `<try>` streams when its body throws or rejects.

- A `@catch` now streams in its body's place, so it shows without JavaScript, and a `<try>` whose body arrives in one piece no longer sends catch markers or the script that moves the catch into place.
- A throwing `@placeholder` has its `@catch` replace the body before any of the body is sent, and the rest of a body stops rendering once its `@catch` takes over, including after a throw inside a lazily loaded tag or a nested `<try>` without a `@catch`.
- Several orderings no longer leave a `@placeholder` on the page forever, close the stream early without the `@catch` and the rest of the page, crash the server process with an uncaught exception, or fail with `Invalid value used as weak map key`.
