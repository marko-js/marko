---
"@marko/runtime-tags": patch
---

Fix a `<define>` whose body starts or ends with a placeholder of a constant value (`${"Z"}`), called beside text such as another call of itself, which merged the two texts in the client template and made the client render throw.
