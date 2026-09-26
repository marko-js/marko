---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze
---

# Give a native `<noscript>` body no client presence

With scripting on, the page parser keeps `<noscript>` content as raw text, yet the translator walks and marks it like any element body. A resume comment written inside `<noscript>` becomes part of that text, so `<noscript><img src=`/px-${n}`></noscript>` throws `Cannot read properties of undefined (reading 'getAttribute')` on the first update after resume. The client template parse goes the other way: `dom/parse-html.ts › parseHTML` parses into a `<template>`, whose parser has scripting off, so a `<noscript>` tracking pixel inside an `<if>`/`<for>` rendered on the client inserts a live `<img>` that fires for JavaScript users. Direction: make a native `<noscript>` body server-only (no bindings, markers or walks inside, an empty `<noscript></noscript>` in DOM output) and report client-only constructs inside it (handlers, `<let>`, `<script>`, tag variables) as compile errors.

Check: fixture `<let/n=0>` + `<noscript><img src=`/px-${n}`></noscript>` + `<button onClick() { n++ }>${n}</button>`with`skip_csr: true`and steps`[{}, click]`: the ssr modes throw `reading 'getAttribute'`from`_attr`. `pnpm run compile -- -o dom -d`on`<let/show=false>`+`<if=show><noscript><img src="/px"></noscript></if>`clones`"<noscript><img src=/px></noscript>"`via`_if`, and in Chrome (not jsdom, which parses it as text) `t = document.createElement("template"); t.innerHTML = "<noscript><img src=x.png></noscript>"; t.content.querySelector("noscript img")` is an element.
