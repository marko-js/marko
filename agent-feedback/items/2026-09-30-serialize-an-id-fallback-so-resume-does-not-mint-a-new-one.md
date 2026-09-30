---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/id.ts › translate
---

# Serialize an `<id>` fallback so resume does not mint a new one

When an `<id>`'s `value` is nullish, the server's generated fallback is not written to the tag variable's `IdFallback` slot, so the first recompute after resume mints a new client id: the element's `id` changes on an update that leaves the value nullish, while the client render keeps its id. The site's own comment says the slot exists so "a nullish value cannot re-mint on every recompute". Anything that captured the old id (CSS, `#fragment` links, `aria-*` references) goes stale. Serialize the fallback when the value's source can change on the client.

Check: a fixture `<let/value=undefined/>\n<id/x=value/>\n<div id=x>${x}</div>\n<button onClick() { value = null }>clear</button>` with `equivalent: false` and steps `[{}, click("button")]`: `render-ssr.md` logs `UPDATE: #cM_0[id] "sM_1" => "cM_0"` after the click, while `render-csr.md` changes nothing.
