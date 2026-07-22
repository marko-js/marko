---
"@marko/runtime-tags": patch
---

Drop a synchronously-failing `<try>` body's already-written scopes from the SSR resume payload, so a `@catch` no longer ships dead scope fills (and their retained registry references) for DOM that was replaced.
