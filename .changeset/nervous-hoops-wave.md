---
"@marko/runtime-tags": patch
---

Report a dev-mode error when a client-reactive expression reads a `$global` key that was not serialized, instead of silently evaluating to `undefined`.
