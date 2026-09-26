---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/dynamic-tag.ts › _dynamic_tag
---

# Reject a string dynamic tag whose content the browser never parses into child nodes

A string dynamic tag writes its content through a nested `_dynamic_tag` call with resume comments, but when the name is a raw-text, RCDATA, or `<template>` element (`xmp`, `iframe`, `noscript`, `title`, `template`) the browser folds those comments into text or the template's `content` fragment, so the first update after resume throws `Cannot read properties of undefined (reading 'data')` in `_text`. The native tag form of the same shapes is a compile error (`visitors/tag/native-tag.ts › assertDetachedChildrenNotResumed`); only the dynamic name escapes it. Direction: under MARKO_DEBUG, throw in `_dynamic_tag` for these names when they have content, next to the existing `<textarea>` content check.

Check: fixture `<let/n=0>` + `<${input.tag}>${n}</>` + `<button onClick() { n++ }>${n}</button>` with `skip_csr: true` and steps `[{ tag: "xmp" }, click]`: the ssr modes throw `reading 'data'` in `_text`; `"title"`, `"template"` and `"iframe"` fail the same way.
