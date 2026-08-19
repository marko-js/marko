---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › getResumeRegisterId
---

# Register a module's resume values with one positional call instead of per-id registrations

Under `optimizeKnownTemplates` a register id is already `templateId + a sequential per-template counter` assigned in first-request order (`babel-utils/tags.js` › `getTemplateId`), yet every registration still spells the id as a string literal — 696 `_script(`, 196 `_resume(`, 109 `_content_resume(`, 38 `_var_resume(` and 24 `_hoist_resume(` sites across the committed `dom.bundle.js` corpus. A single trailing `_resume(templateId, [v0, v1, …])` whose runtime assigns `registeredValues[templateId + i] = v` drops the id argument from every helper (`_script`/`_var_resume`/`_content_resume` need id-less variants that push into the array) and subsumes the const-arrow factory inlining, since a single-use factory's binding disappears into the array literal; hash mode shrinks too, per-key hashes becoming one file hash plus a small int in the SSR payload. Two hazards make this a protocol change rather than a tweak: index agreement between the HTML and DOM compiles — ids match today because both derive the same key string, so the positional counter must be pinned to a canonical ordering computed in shared analyze, with a debug assertion that a served id resolves, or one output requesting a key the other never does silently shifts every later index — and lazy `load:` virtual modules, which register a subset of a template's values from a separate module and so need their own contiguous id space (`tid + module discriminator + index`).

Check: the size claim first: rewrite the registrations in a few built page entries into the array form and re-minify (~6-10 min bytes per site expected).
