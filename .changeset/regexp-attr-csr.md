---
"@marko/runtime-tags": patch
---

Fix RegExp attribute values rendering differently on the client than on the server. SSR special-cased `RegExp` to write its `.source` while the DOM runtime stringified the whole expression, so the first post-hydration update corrupted an SSR-rendered attribute. The special case is removed: both targets now stringify RegExp values the same way (`pattern="/^a+$/"`).
