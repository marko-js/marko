---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/known-tag.ts › writeAttrsToSignals
---

# Build a known child's rest input in one key order for HTML and DOM

When a known child reads `input` through a rest (`<const/{ first, ...rest }=input/>`), HTML passes the object `translateAttrs` builds, while `writeAttrsToSignals` builds `restProps` with attribute tags first and attributes last. `Object.keys(rest)` differs between SSR and CSR and changes order on the first update after resume. Direction: build `restProps` in `translateAttrs` order (or derive both from one ordering), and extend `known-tag-attr-tags-rest-order`, which covers only two static attribute tags, with a plain attribute and a dynamic group.

Check: fixture `tags/child.marko` `<const/{ first, ...rest }=input/><div>${first}:${Object.keys(rest).join(",")}</div>`, `template.marko` `<let/n=1/><button onClick() { n++ }>inc ${n}</button><child first=n s=n><@y v=1/><if=n><@z v=2/></if></child>`, `equivalent: false`, steps `[{}, click]`: `render-ssr.debug.md` shows `1:s,z,y` then `2:y,z,s`, while `render-csr.debug.md` shows `1:y,z,s`.
