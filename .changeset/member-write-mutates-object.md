---
"@marko/runtime-tags": patch
---

Assigning, updating or deleting a member of a tag variable (`settings.theme = "light"`, `count.n++`) now mutates the object instead of writing to a copy of that property, and no longer compiles to invalid JavaScript (`$scope.ctx?.fillStyle = "red"`) when the variable may be nullish.
