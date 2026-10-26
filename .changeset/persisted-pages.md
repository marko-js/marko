---
"@marko/runtime-tags": patch
---

Experimental: persisted pages. A template compiled with the `patches` option
answers a navigation with a patch render, a stream of flushes that update the
live page in place, so its state, focus and handlers survive. On the client,
`patch($global, signal)` (from `@marko/runtime-tags/dom/patch`) gives a
navigation's request headers and applies the response. On the server
(`@marko/runtime-tags/html/patch`), `patchRequestKind(headers, url)` tells a
patch request (a `PatchRequestKind`) apart from a document request,
`template.patch(input, headers)` renders it, `patchResponseHeaders(kind)` gives
the response its headers, and `setPatchBuild` names the build that pages and
patches must share. A patch updates values and creates content from data,
reusing client code only where the page already bundles it. It never resends a
shell the page holds. Builds without `patches` are unchanged.
