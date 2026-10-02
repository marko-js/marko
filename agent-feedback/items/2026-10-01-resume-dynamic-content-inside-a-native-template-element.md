---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze
---

# Resume dynamic content inside a native `<template>` element, or reject it

The HTML parser moves a `<template>` element's children into its `.content` fragment, so the resume walker, which walks the document's child nodes, never reaches markers or nodes the server wrote inside it, and resuming any control flow or placeholder there throws. Treat the body as `<textarea>`'s is treated: a value of the element, rendered as markup and applied on the client as its `innerHTML` (which fills `.content`), with nothing inside it to walk or resume.

Check: a fixture with `<let/show=true/><template><if=show><span>a</span></if></template><button onClick() { show = !show }>toggle</button>` and steps `[{}, click]` fails in `ssr` (resume) with `TypeError: Cannot read properties of undefined (reading 'nodeType')` from `setConditionalRenderer`; adding text after the `<if>` inside the `<template>` fails the same way.
