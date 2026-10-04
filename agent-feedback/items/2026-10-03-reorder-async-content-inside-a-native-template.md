---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/inlined-runtimes.ts › REORDER_RUNTIME_CODE
---

# Reorder async content inside a native `<template>`

A `<try>` with an `@placeholder` inside a `<template>` streams its content out of order, and the reorder runtime looks its placeholder up through the page walker's lookup, which never sees the `<template>`'s `content`. Resume then throws reading `previousSibling` of an undefined target. Either let the reorder runtime find targets inside a walked `content` (behind the `template-content` latch) or report a compile error for an out-of-order placeholder inside a `<template>`.

Check: a fixture with `<template><try><@placeholder>loading</@placeholder><await|v|=resolveAfter("done", 1)><b>${v}</b></await></try></template>` fails in `ssr` with `TypeError: Cannot read properties of undefined (reading 'previousSibling')`.
