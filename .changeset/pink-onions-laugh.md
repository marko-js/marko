---
"marko": patch
"@marko/runtime-tags": patch
---

On a page with Class API components, a Tags `<define>`, attribute tag or template module namespace (`import * as Child from "./child.marko"`) rendered through a dynamic tag no longer fails with `Invalid dynamic tag value` or remounts on the first update after resume, and an attribute tag with no content renders the dynamic tag's body as it does without them.
