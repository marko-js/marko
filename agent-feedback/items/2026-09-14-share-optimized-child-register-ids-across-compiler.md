---
type: bug
impact: med
effort: med
site: packages/compiler/src/babel-utils/tags.js › getTemplateId
---

# Share optimized child register ids across compiler instances

Under `optimizeKnownTemplates` a child register id is `registered.id + registered.children.size` where `children` lives in a module-level `idCache` keyed by the known-templates array instance. Two compiler instances (separate processes, a dep-optimized duplicate module, or merely two array instances with equal contents) allocate the counter in their own first-request order, so the html and dom outputs of one template can hand the same child key different ids — and resume then looks up ids the client never registered. Ids only agree today because typical builds run both outputs through one process, one module instance, and one cached array.

Check: `compileFile(f, { output, optimize: true, optimizeKnownTemplates: [f] })` for `"html"` then `"dom"` (fresh array literal each call) on a template whose outputs register in different orders — e.g. two effect `script`s where only the first reads `input` — and compare `_script(...)`/register id literals: the same content hash gets a different short id per output.
