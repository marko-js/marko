---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/placeholder.ts
---

# Resume a dynamic placeholder directly inside `<noscript>`, `<template>` or `<iframe>`

A dynamic `${x}` written directly inside `<noscript>`, `<template>` or `<iframe>` crashes the first client update after resume with `TypeError: Cannot read properties of undefined (reading 'data')` in `_text`. The server writes the text's resume marker inside that element, where the browser keeps it as raw text (`<noscript>` with scripting on, `<iframe>`) or in the `<template>`'s content fragment, so the resume walk never visits it and the scope has no node at that accessor. Either reject a dynamic placeholder there at compile time, or address the node another way (through the element, which the walk does reach).

Check: a fixture `<let/x=1/><noscript>${x}</noscript><button onClick() { x++ }>inc</button>` with a click step fails both `ssr` (resume) runs with that TypeError.
