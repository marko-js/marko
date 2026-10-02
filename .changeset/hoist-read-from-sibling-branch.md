---
"@marko/runtime-tags": patch
---

Fix compile crashes when a tag variable declared in one branch, such as an `<if>`, is read from content inside another branch, such as its `<else>`, and when a hoisted tag variable is the value of a `<const>` or is spread onto a tag. A read only goes through a closure when JavaScript's scoping would allow it; any other read of a tag variable, including one above its declaration, goes through the hoisted variable alone, without an unused closure. A hoisted read also keeps the owner scopes only up to the section its getter is in, so fewer scopes serialize their owner.
