---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/dom/placeholder.feat.ts › registeredValues[PLACEHOLDER_DISMISS_REGISTER_ID]
---

# Run runtime-owned effects off resume data instead of registered ids

The placeholder dismiss and the dynamic-tag script are runtime code registered under a fixed id only so the effects channel can name them: every streamed try body ships `_f <branchId>` and every native dynamic tag with a script ships `_d <branchId>`, and the id needs a reserved slot in `registeredValues` that template ids must avoid (`meta.ts`). Both effects fire at facts the resume data already carries: the try body's `BranchEnd` marker lands the branch that ends the placeholder, and the dynamic tag's `BranchEndNativeTag` marker names the branch the script targets. Dispatching them from those markers (or a scope prop the serializer already writes) drops the id and space per instance from the wire, the registrations from the bundle, and the reserved-id coupling with `encodeTemplateId`; `_e` (the tag-var getter) is registered but only written when a tag var holds it, so it can stay.

Check: `try-placeholder-stateful-template-id-collision/__snapshots__/writes.html` carries `_.push("_f 3")` beside a `<!--M_]1 P3 2-->` marker for the same body; `bound-attr-dynamic-tag` writes `_d <id>` per native dynamic tag.
