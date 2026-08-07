---
"@marko/runtime-tags": patch
---

Error at compile time when a `<try>` receives an attribute tag other than `<@placeholder>`/`<@catch>`, with a near-miss suggestion — a typo previously compiled clean and silently dropped the pending/error UI.
