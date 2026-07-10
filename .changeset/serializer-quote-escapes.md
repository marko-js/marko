---
"@marko/runtime-tags": patch
---

Fix serialized strings corrupting in transit: unpaired surrogates and NUL were emitted raw, so UTF-8 encoding (or the HTML tokenizer inside the inline script) replaced them with U+FFFD before the client could resume them. Both now escape, and a fast-path regex guard skips the escape loop entirely for strings that need no escaping (the common case, measurably faster than before).
