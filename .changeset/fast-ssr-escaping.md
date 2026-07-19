---
"@marko/runtime-tags": patch
---

Speed up server-side rendering by making HTML text and attribute-value
escaping scan with `indexOf`/`charCodeAt` instead of regular expressions.
The escapers now take the common already-safe path via a SIMD-accelerated
`indexOf` scan and only build a new string once an unsafe character is found,
which measurably speeds up content-heavy pages (data tables, lists, comment
feeds) with byte-for-byte identical output.
