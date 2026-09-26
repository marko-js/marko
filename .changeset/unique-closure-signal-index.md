---
"@marko/runtime-tags": patch
---

Fix updates reaching the wrong node when content reads values from two different enclosing bodies, such as a tag body nested in another tag body that reads a `<let>` from each. The two values could share the key that records which update applies to that content, so changing one of them updated the node that shows the other.
