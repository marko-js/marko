---
"@marko/runtime-tags": patch
---

Fix attribute escaping only handling fully-formed, semicolon-terminated character references. HTML parsers also decode semicolon-less numeric references (`&#38x` parses as `&x`) and, in attribute values, legacy named references when the next character is not `=` or alphanumeric (`x &amp y` parses as `x & y`), so several authored values round-tripped to different strings. `&` is now escaped whenever it starts anything that could parse as a reference (`&#` or `&` + ASCII letter); a bare `&` still passes through raw.
