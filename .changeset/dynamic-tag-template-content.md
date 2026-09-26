---
"@marko/runtime-tags": patch
---

Fix a `ReferenceError` in the browser for a dynamic tag with a body that chooses between imported templates (`<${useB ? B : A}>Hello</>`, `<${show && A}>Hello</>`): the body is now kept when only one of the templates reads `input.content` or when the name can be falsy, and left out of the browser code when nothing can render it.
