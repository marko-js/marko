---
"@marko/runtime-tags": patch
---

Fix a hydration mismatch for a dynamic tag with positional args and a fallback body. When the tag resolves to `null` (or a string), `<${tag}(1, 2)>Fallback</>` rendered nothing on the server but the fallback body on the client; the server now renders the fallback too.
