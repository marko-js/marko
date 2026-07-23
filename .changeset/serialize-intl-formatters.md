---
"@marko/runtime-tags": patch
---

Serialize `Intl` formatters and `Intl.Locale` so they can be read from content that updates in the browser, instead of failing to serialize. Formatters are rebuilt from `resolvedOptions()`; note that `Intl.DateTimeFormat` reports a resolved `month`/`weekday` width that can differ from the requested one in some locales (`ja`, `zh`), so a rebuilt formatter may render those fields differently than the server did.
