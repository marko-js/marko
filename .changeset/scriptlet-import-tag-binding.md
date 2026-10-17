---
"@marko/compiler": patch
---

A tag imported in a `static`, `server` or `client` statement (`static import Card from "./card.marko"`, then `<Card/>`) resolves to that import again, instead of failing with "Local variables must be in a dynamic tag unless they are PascalCase".
