---
"@marko/runtime-tags": patch
---

Warn in development when a controlled `<select>`'s `value` matches no `<option>`. A single select always forces one option selected, so an unmatched value cannot round-trip through SSR resume (the server serializes which option is selected, not the value) and the controlled value is lost on the client. Both the server and client runtimes now emit a `MARKO_DEBUG` `console.error` so the mistake is surfaced during development.
