---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/program/index.ts › translate
---

# Report a child template's analyze errors under error recovery

With `errorRecovery: true`, a template whose own analyze reported errors skips translate and returns them as diagnostics. A parent compiling a child template that has analyze errors does not: it returns none of the child's diagnostics and translates against the child's unfinalized analysis, which can surface a misleading parent error instead. Without `errorRecovery` the child's errors throw first. Carry a child's analyze failure to the parent (report it, and skip translating against that child) so the parent compile reports the real error.

Check: a child `tags/kid.marko` containing `<return/>` and a parent containing `<kid/x/>${x}`, compiled with `compileFileSync(parent, { output: "dom", errorRecovery: true, translator: "@marko/runtime-tags/translator" })`, reports "The `kid` tag does not `<return>` a value" rather than the child's missing-value error.
