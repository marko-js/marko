---
"@marko/runtime-tags": patch
---

Build a new array for a whole-array rest such as `<const/[...chars]=text>`, as destructuring does, instead of reading it as the value it rests. A string or other iterable source used to be read directly, so `chars.join("-")` threw in the browser, and on the server when the rest was read in another section.
