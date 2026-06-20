---
"@marko/runtime-tags": patch
---

Add a `MARKO_DEBUG`-only `console.error` when a `<for>` tag's `by` attribute returns a value that is not a string or number. Such keys can't reliably track item identity or survive SSR serialization/resume, so this surfaces the misuse during development in both the server (HTML) and client (DOM) runtimes.
