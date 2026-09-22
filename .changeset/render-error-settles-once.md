---
"marko": patch
---

`await template.render(input)` rejects when the render errors before the promise is attached, instead of resolving with the partial output. `render(input, callback)` and `renderToString(input, callback)` call the callback once with the error, no longer a second time with the partial result.
