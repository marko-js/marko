---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › isStaticMarkup
---

# Resume dynamic content inside a declarative shadow root

A `<template shadowrootmode>` is replaced as it parses by a shadow root on its parent, so the page walker never reaches the marks Marko writes inside it, and the `template-content` feature, which walks a `<template>`'s `content` from a marker after it, leaves such templates out. Resuming control flow or a placeholder inside one throws as it did before that feature. Walk the host's `shadowRoot` from the same marker (an open root; a closed one is unreachable and could be rejected), with the client walker entering it the way it enters `content`.

Check: in a browser with declarative shadow DOM, SSR `<let/n=0/><div><template shadowrootmode="open"><span>${n}</span></template></div><button onClick() { n++ }>inc</button>` and click: the span inside the shadow root keeps showing 0.
