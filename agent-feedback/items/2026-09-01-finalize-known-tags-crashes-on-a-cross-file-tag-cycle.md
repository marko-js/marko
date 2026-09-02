---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › finalizeKnownTags
---

# Finalize known tags without a content section on a cross-file tag cycle

Mutually recursive custom tags in separate files (`tags/cyc-a` renders
`cyc-b`, which renders `cyc-a`) crash analyze: the inner call site's tag
extra never receives its content section (the child is mid-analysis when
loaded), and `finalizeKnownTags` dereferences it unconditionally
("Cannot read properties of undefined (reading 'paramReasonGroups')").
The error surfaces attributed to an unrelated tag of the template that
first imports the cycle. Skip (or defer) the call site whose content
section is absent, and give the cycle a real diagnostic if it cannot be
supported; the DOM composition half is filed separately
(2026-08-17-compose-child-templates-lazily-across-an-import-cycle).

Check: `pnpm run compile -- -o html -d` on a template rendering `<cyc-a/>`
with the two mutually recursive tags above; mode-agnostic.
