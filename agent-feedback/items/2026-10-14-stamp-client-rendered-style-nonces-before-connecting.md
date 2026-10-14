---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _attr_nonce
---

# Stamp a client-rendered `<html-style>`'s nonce before it connects

A static `<html-style>` or `<html-script>` in a client-rendered branch gets its nonce from `_attr_nonce`, a setup statement. `setupBranch` queues setup (`queueRender(branch, setup, -1)`) and `setBranch` inserts the branch before it runs, so under `style-src 'nonce-…'` the browser has already refused the style, and a nonce set later does not re-check it. Stamp the nonce while the branch's nodes are created, before insertion, and only for sections the compiler knows contain these tags: for example a walk step, or a renderer the translator marks as holding nonce elements. Content created from a template with no setup (such as persisted pages' patch-created branches) needs the same stamp.

Check: serve a page with `Content-Security-Policy: style-src 'nonce-N'; script-src 'nonce-N'` whose template has `<let/show=false/><button onClick() { show = true }/><if=show><html-style>p { color: red }</html-style><p>x</p></if>`, with `$global.cspNonce = "N"` listed in `serializedGlobals`. Click in Chromium: the new style's `sheet` is `null` and a `style-src-elem` violation fires.
