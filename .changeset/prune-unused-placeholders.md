---
"@marko/runtime-tags": patch
---

A `<try>`'s `@placeholder` no longer ships to the browser, or into the resume data, when nothing in the try's body can start waiting in the browser: an `<await>` whose value changes there, one the browser creates (in an `<if>`, `<for>`, or content it renders), a lazy tag it renders, or a dynamic tag.
