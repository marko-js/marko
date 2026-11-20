---
"@marko/compiler": patch
---

Remove the unused `pluginSyntaxTypeScript` export from `@marko/compiler/internal/babel`; `pluginTransformTypeScript` still includes the syntax plugin it needs.
