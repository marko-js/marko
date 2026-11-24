---
"@marko/runtime-tags": patch
---

Stop reporting a lazy tag's failed input chunk as an unhandled rejection when its setup chunk failed too and `<try>` already caught the failure.
