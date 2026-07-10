---
"@marko/runtime-tags": patch
---

Fix `<define>` with a destructured tag variable plus body content crashing on the client with `ReferenceError: $define_content is not defined` (also reproducible with an identifier variable whose content is never read). The content section's renderer declaration is elided when nothing reads the content, but the `content:` property still referenced it; both are now elided under the same condition.
