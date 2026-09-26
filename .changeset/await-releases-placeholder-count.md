---
"@marko/runtime-tags": patch
---

Fix a `<try>` `@placeholder` that could stay up for good. Removing content that holds a pending `<await>` now dismisses the placeholder, even when the promise never settles or settles in the same update that removes it. A value that replaces a pending one now settles the same placeholder even after a conditional `@placeholder` goes away, and removing the `@placeholder` before it first shows no longer throws. An `<await>` given a new value just as its previous one settles no longer throws or renders the older value.
