---
type: bug
impact: med
effort: low
site: packages/compiler/src/babel-utils/tags.js › encodeTemplateId
---

# Keep known-template ids from equaling another template's child register ids

Under `optimize` with `optimizeKnownTemplates`, `getTemplateId` gives template `i` the id `encodeTemplateId(i)` and each of its register keys the id `templateId + childIndex`, and both share the one `_resumed` registry. `encodeTemplateId` draws every character after the first from an alphabet that includes digits, so from index 2862 on a template id can end in digits: template 2862 is `"a0"`, the id of template 0's first child key, and template 2915 (`"a1"`) plus child 2 equals template 0 plus child 12. Whichever module evaluates last owns the `_resumed` slot, so resume silently runs a template renderer as an effect or the reverse; `@marko/vite` passes every `.marko` under the root plus `node_modules/.marko` as known templates, so large apps reach this count. Drawing the continuation characters from a digit-free alphabet makes a template id plus a decimal child index prefix-free (a separator character would make `runtime-tags/src/html/serializer.ts › toAccess` bracket every key), and a compiler test over at least 3000 known templates with ~20 keys each should assert uniqueness.

Check: in a `node -r ~ts` script at the repo root, build `known` as 3000 absolute `.marko` paths and `opts = { optimize: true, optimizeKnownTemplates: known }`: `getTemplateId(opts, known[2862])` (from `@marko/compiler/babel-utils`) returns `"a0"`, the same id as `getTemplateId(opts, known[0], "anyKey")`, and 3000 templates × 20 keys give 668 duplicate ids.
