---
"@marko/compiler": patch
"marko": patch
---

Drop dependencies that Node now covers. The compiler resolves modules with `createRequire`, caching one per directory, instead of `resolve-from`; the require hook maps stack traces through Node's own source maps instead of `source-map-support`; and the `raptor-regexp` wildcard helper is inlined. The compiler also stops depending on `complain` and `self-closing-tags`, which it never imported, and `marko` resolves with `createRequire` instead of `resolve-from`.
