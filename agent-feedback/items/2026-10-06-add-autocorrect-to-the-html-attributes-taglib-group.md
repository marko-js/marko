---
type: cleanup
impact: low
effort: low
site: packages/compiler/src/taglib/marko-html.json › attribute-groups.html-attributes
---

# Add the global `autocorrect` attribute to the `html-attributes` taglib group

The `html-attributes` group declares `autocapitalize` with an `enum` but not the spec global attribute `autocorrect` (keywords `on` and `off`). `packages/runtime-tags/tags-html.d.ts` › `HTMLAttributes` types it, so the taglib metadata is out of sync with the type definitions. The compiler only stores `enum` on the attribute definition (`loadAttributeFromProps`) and the group's `"*": "string"` already accepts the attribute, so compilation is unaffected; the gap is in tooling that reads the taglib for attribute completion and enum hints. Add `"autocorrect": { "enum": ["on", "off"], "html": true }` next to `autocapitalize`.

Check: `rg -n "autocorrect|autocapitalize" packages/compiler/src/taglib/marko-html.json` lists only `autocapitalize`.
