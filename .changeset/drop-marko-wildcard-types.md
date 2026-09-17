---
"@marko/runtime-tags": patch
"marko": patch
---

Remove the `declare module "*.marko"` block from the published types. `index.d.ts` is a module, so the block was a module augmentation that never applied to anything; typing `.marko` imports is `@marko/language-tools`' job, and a wildcard would type away a missing or misspelled template.
