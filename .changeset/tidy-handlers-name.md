---
"@marko/runtime-tags": patch
---

Assigning a destructured value whose change handler the same pattern names after it (`<child/{ value, valueChange }/>`, `|{ value, valueChange }|`) now calls that handler by the author's name instead of a second, generated one. A renamed handler (`{ valueChange: onValue, value }`) no longer makes the server output declare it twice, which failed to compile. An assignment in a function a render-time value creates (`[1].map((valueChange) => () => { value = 1 })`) now calls the handler even where an inner name shadows it, instead of throwing that it is not a function.
