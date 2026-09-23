---
"@marko/compiler": patch
---

Template text now collapses only HTML's ASCII whitespace (space, tab, newline, carriage return, form feed). A non-breaking space, U+2028, U+2029 or U+FEFF typed in text is kept instead of becoming a plain space, matching attribute values.
