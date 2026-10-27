---
"@marko/runtime-tags": patch
---

A client update of a `<script>` or `<style>` that carries a CSP nonce no longer rewrites the element's `nonce` attribute. A browser serving a `script-src`/`style-src` nonce hides that attribute from `getAttribute` and `outerHTML` while still authorizing with it, and only the element's `nonce` property reports the value, so the writer saw a change on every pass and its write is what made the page's nonce readable to any script again. Hydrating a `<html-style>`/`<html-script>` the server stamped did the same, and a spread update of one re-did it on every render.
