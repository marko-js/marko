---
type: unclear
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/solve-reasons.ts › bindingReaders
---

# Assert that reason queries name the current program's bindings

`bindingReaders` and `extraReaders` are module-level memos keyed by binding or extra, but they answer in the current program's terms: `readersOfDerives` compares against `getProgram()`'s `returnValueExpr`, and `mapParamReason` (`translator/util/reasons.ts`) judges a state binding foreign through `isForeignBinding`, against `getProgram()`'s section. A query about another template's section (for example `getRendererReason` on a known child's content section during the parent's compile) computes the wrong answer and caches it until `solveReasons` resets the memos, so the child's own translate reads the poisoned value. An assert in `getReasonForBinding`/`getRendererReason` that the binding's `section.program` is the current program's section would stop this at the first cross-template call.

Check: in `persisted-pages` compiles, call `getRendererReason` on a child template's content section from the parent's translate (patch fixture `patch-bind-returned-content-swap`): the child's `Content` renderer then compiles unregistered (`_content` instead of `_content_resume`).
