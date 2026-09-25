---
"@marko/runtime-tags": patch
---

The `content` attribute of native tags now rejects a string in TypeScript, except on `<meta>`, where `content` is the HTML attribute. A string was never rendered as content: the server threw ``Invalid `content` attribute``, so `<button content="Save"/>` or `render({ content: "Save" })` against an `Input` extending `Marko.HTML.Button` type-checked and then failed at runtime.
