---
"@marko/runtime-tags": patch
---

Fix a `<try>` `@placeholder` that could stay up for good. Removing content that holds a pending `<await>` now dismisses the placeholder, even when the promise never settles or settles in the same update that removes it. An `<await>` given a new value just as its previous one settles no longer throws or renders the older value.
