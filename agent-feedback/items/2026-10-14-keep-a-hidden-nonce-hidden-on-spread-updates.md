---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/dom.ts › setAttribute
---

# Keep a connected element's hidden nonce hidden when a spread updates it

A browser hides a connected element's `nonce` attribute under a header CSP (`getAttribute("nonce")` returns `""`) so CSS selectors cannot read it. A client update of a `<script>` or `<style>` spread passes `{ nonce: $global.cspNonce, ...attrs }` to `_attrs`, whose `setAttribute` compares against `getAttribute` and so always writes the nonce back, visible again. Comparing `nonce` against the element's `.nonce` (or leaving it alone when equal) keeps it hidden.

Check: Chromium, header CSP `style-src 'nonce-N'`, a template `<html-style ...input.attrs>p {}</html-style>` with `$global.cspNonce = "N"`; after a client update of `input.attrs`, `document.querySelector("style").getAttribute("nonce")` is `"N"` where before it was `""`.
