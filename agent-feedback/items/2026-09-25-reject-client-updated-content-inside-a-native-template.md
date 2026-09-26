---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze
---

# Reject client-updated content inside a native `<template>`

A native `<template>`'s children live in its `.content` fragment rather than its child nodes, yet the translator walks into it and writes resume comments inside it like any element. The client walk from a cloned `<template>` finds no children and the resume walker never enters `.content`, so `<template><i>${n}</i></template>` throws `Cannot read properties of undefined (reading 'data')` on a client render and on the first update after resume. Direction: report a compile error for placeholders, handlers, native tag variables and control flow that need client work inside a native `<template>` (static content, such as declarative shadow DOM, stays legal), and add an error fixture.

Check: fixture `<let/n=0>` + `<template><i>${n}</i></template>` + `<button onClick() { n++ }>${n}</button>` with steps `[{}, click]`: debug csr throws `reading 'data'` in `_text` during mount, and the ssr modes throw the same on the click.
