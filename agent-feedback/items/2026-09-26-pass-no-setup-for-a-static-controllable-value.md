---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze
---

# Pass no setup for a static controllable value

`native-tag.ts › analyze` merges `relatedControllable`'s attrs whenever one exists, even a plain attribute that `isDynamicControllable` later leaves in the template (a confident `value`, no change handler). The merge registers that literal as an expression with no reads, and `finalizeReferences` then adds a setup statement for it, so the template passes an empty `$setup` to `_template` instead of `0`. Direction: skip the merge when the controllable can never update (no change handler, not `special`, a confident first attr).

Check: `pnpm run compile -- -o dom` on `<input value="s" name=input.n/>` ends with `_template("…", $template, $walks, $setup, $input)`, while `<input title="s" name=input.n/>` passes `0`.
