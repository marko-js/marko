---
"@marko/runtime-tags": patch
---

Fix a dynamic tag that may name several templates dropping all but one of their inputs when those inputs analyze alike, which could leave out the body renderer another of the templates renders (`ReferenceError: $…_content is not defined`).
