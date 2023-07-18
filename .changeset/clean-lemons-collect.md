---
"@marko/translator-default": patch
"marko": patch
---

Switch to .d.marko file for <await> tag types to avoid issues when loaded in a pure typescript project. By default TypeScript doesn't play well with `node_modules` which are seen as `.js` files which is what the jsdoc version of a Marko file appears as. By switching to a `.d.marko` it is instead always seen as `.ts` which is always analyzed by typescript.
