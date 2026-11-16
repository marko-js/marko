---
"@marko/compiler": patch
---

Fix every compile throwing `Cannot read properties of undefined (reading 'findConfigFile')` when the app depends on `@babel/core` but `browserslist` cannot be loaded from `@marko/compiler` (eg Yarn Plug'n'Play): without `browserslist` no browserslist config is searched for, and targets that need it (browser queries, a named browserslist config, `esmodules`) fail with an error naming the missing package.
