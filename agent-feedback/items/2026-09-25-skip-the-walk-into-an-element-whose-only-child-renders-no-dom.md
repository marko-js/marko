---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/util/structure.ts › resolveStructure
---

# Skip the walk into an element whose only child renders no DOM

The `StructureKind.Child` case of `resolveStructure` calls `flushSteps` even when `refContent(op.renderer)` is null, so a pending enter step is written for an element whose only child is a custom tag with no DOM (an effect-only template compiles to `$template = ""`). The walker then steps past the empty element (`dom/walker.ts › walkNextNode`), every later walk claim reads the wrong node, and CSR, plus any branch the client creates, crashes. Direction: leave pending steps unflushed in the Child case when the child has no content, and add a CSR fixture.

Check: a fixture with `tags/effect-only.marko` = `<script>console.log(input.n)</script>`, template `<let/n=0/><div><effect-only n=n/></div><span>${n}</span><button onClick() { n++ }/>` and steps `[{}, click]` fails debug csr with "TypeError: Cannot read properties of undefined (reading 'data')" in `_text`; its `dom.bundle.debug.js` has `$walks` = `D/${_w0}&lD l b`, entering the empty `<div>`.
