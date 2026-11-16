---
"@marko/runtime-tags": patch
---

Fix a value that reads a property of something computed from a tag variable (`<child/r/>`, `<const/o={ ...r }/>`, then `${o.a + other}`) rendering before the tag's `<return>` updates, which left stale text after an update and showed `NaN` when rendered in the browser.
