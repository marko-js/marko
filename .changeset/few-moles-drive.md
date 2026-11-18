---
"@marko/runtime-tags": patch
---

`<for>` rows, `<await>` and `<@catch>` bodies receive their params as arguments instead of an array, removing an allocation per row, settle and catch. `<for>` and `<@catch>` now reject rest params, and `<@catch>` a second param, at compile time, as `<await>` already did.
