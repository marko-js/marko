---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a dynamic tag name built with `??` (such as `<const/Tag = input.tag ?? Fallback/>` used as `<${Tag}/>`) being statically collapsed to the right-hand operand in the DOM output, so the left operand was ignored and the wrong tag rendered.
