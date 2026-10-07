---
"@marko/compiler": patch
---

The default `hydrateIncludeImports` now also links `.pcss`, `.postcss`, `.stylus`, `.sss` and vanilla-extract `.css.ts` imports, so a server-only page importing its stylesheet in one of those languages ships it.
