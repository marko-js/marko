---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/persisted/admission.ts › assertSupportedPatch
---

# Make the attr-tag early return's body-coverage contract explicit in persisted admission

`assertSupportedPatch`'s MarkoTag visitor returns early for any `@`-named tag.
Attribute-tag BODIES are still validated: the program traverse visits their
children (placeholders, tags, scriptlets) generically, and owners that admit
attr tags check the attr tags' own attribute expressions at the owner
(`<try>` via its `traverseFast`, templated children via the client-owned
child checks). Nothing leaks today, but that contract is implicit: the early
return looks like it skips the subtree when it only skips the attr-tag node
itself. Add a comment (or an assertion that the owner is one that performs
its own attr checks) so a future owner cannot admit attr tags while assuming
the early return already validated their attributes.

Check: the `tagName[0] === "@"` early return in `assertSupportedPatch`; the
owner-side attribute checks for `<try>` and for templated children inside
client-owned structure.
