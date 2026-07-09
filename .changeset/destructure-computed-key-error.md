---
"@marko/runtime-tags": patch
---

Report a code-frame compile error for unsupported keys in destructuring patterns. Previously a computed key with an identifier expression (`{ [key]: value }`) was silently treated as a literal property name, producing mismatched server/client values, and other computed keys threw a raw error with no template location.
