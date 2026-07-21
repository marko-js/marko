---
"@marko/runtime-tags": patch
---

Escape NUL and lone surrogates in a serialized `RegExp` source. `RegExp.source` leaves a raw NUL or lone surrogate in the pattern unescaped, and the resume payload embeds the `/.../` literal directly into a `<script>`, where a NUL is folded to U+FFFD and a lone surrogate is unencodable in UTF-8 — silently corrupting the resumed regex (an SSR/CSR mismatch). Such characters are now emitted as `\x00` / `\uXXXX` escapes; paired surrogates and normal escapes are unaffected.
