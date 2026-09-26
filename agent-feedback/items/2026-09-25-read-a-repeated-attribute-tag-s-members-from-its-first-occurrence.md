---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › writeAttrsToSignals
---

# Read a repeated attribute tag's members from its first occurrence in DOM output

When a known child reads members of a repeated static attribute tag (`${input.item.foo}`), `writeAttrsToSignals` recurses into every `<@item>` occurrence, so each one writes the same member Signals and the last write wins; `analyzeAttrs` recurses per occurrence the same way. HTML passes `attrTags(first, …)`, where `input.item` is the first occurrence, so CSR renders a different value than SSR. The serialize reasons also follow the wrong occurrence: when the first reads state and a later one is static, the child's text node is not serialized and the first update after resume throws. Direction: send a repeated static name with a `.props` tree through the whole-object path (build `attrTags(...)` once), or let only the first occurrence feed member Signals in both analyze and translate; add a `known-tag-attr-tags-*` fixture with member reads.

Check: fixture `tags/child.marko` `<span>${input.item.foo} ${input.item.n}</span>`, `template.marko` `<let/n=1/><child><@item foo="first" n=n/><@item foo="second" n=2/></child><button onClick() { n++ }>inc</button>`, `equivalent: false`, steps `[{}, click]`: `render-csr.debug.md` renders `second 1`, `dom.bundle.debug.js` setup calls `$input_item_foo` with `"first"` and then `"second"`, and the ssr modes throw `Cannot read properties of undefined (reading 'data')` on the click.
