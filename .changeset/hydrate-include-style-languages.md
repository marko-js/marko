---
"@marko/compiler": patch
---

The default `hydrateIncludeImports` now matches `.pcss`, `.postcss`, `.stylus`, `.sss` and vanilla-extract `.css.ts` (`.css.[cm]?[jt]s`) imports, and asset imports with a `?query` suffix. A server-only page that imports its stylesheet one of these ways now links it into its page entry instead of shipping without it. The Marko 5 translator's `hydrate` output includes these imports too.
