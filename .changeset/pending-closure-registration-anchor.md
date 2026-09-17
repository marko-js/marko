---
"@marko/runtime-tags": patch
---

Anchor pending closure registrations against tree shaking, and emit them only when resumable. A `_closure_get` carrying a pending resume register id was pure-annotated, so a bundler with no static reference to it dropped the registration and resuming a `<try>` placeholder boundary crashed invoking an id the client never registered; the annotation is now stripped for exactly those calls, since serialized resume data is their only anchor. The pending id itself is now also gated the way the HTML output's registration is (a serialized dynamic closure with sources), so closures the server can never replay keep the annotation, stay shakeable, and no longer ship a dead id.
