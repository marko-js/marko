---
"@marko/runtime-tags": patch
---

Fix `TypeError: assetFlush is not a function` when a template with a lazily loaded (`import ... with { load }`) tag renders before any page entry has loaded. The lazy import now resolves its assets through the configured asset runtime itself instead of borrowing one a page entry set up.
