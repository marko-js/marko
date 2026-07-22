---
"@marko/runtime-tags": patch
---

Stop shipping a dead `_closure_get` pending-resume id in DOM output when a closure's subscriber section is not under a `<try>` `@placeholder` (only a sibling closure is) — the id had no matching HTML-side registration to look it up.
