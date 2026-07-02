---
"@marko/runtime-tags": patch
---

Throw a clear `ReferenceError` (in debug browser builds) when template content reads a binding declared in a `server` statement. These bindings are stripped from the browser build, so such reads previously crashed at runtime with a cryptic `TypeError` on the first client render that evaluated them. The error only fires if the read actually executes in the browser, so server-only usage and `typeof` guards are unaffected, and optimized builds are unchanged.
