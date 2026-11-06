---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/await.ts › translate
---

# Report core tag diagnostics under error recovery instead of crashing in translate

With `errorRecovery: true` and a `dom` or `html` output, analyze records a core tag's validation error as a diagnostic, program analyze `exit` then skips finalization (`hasAnalyzeErrors()`), and translate still runs over that unfinalized analysis, so the compile throws a `TypeError` instead of returning the diagnostic. (The language server compiles only to `migrate` and is unaffected.) Shapes that crash in both `dom` and `html` output: `<await>` with no value, no body, or two params; `<const/x/>` with no value; `<let x=1/>` with no tag variable; `<show>` with no value; `<try>` with no body or no `@catch`; `<lifecycle/>` with no attributes crashes `dom` only. `<define>` without a tag variable and `<return>` without a value already handle this with a guard and a site comment. Skipping translation whenever analyze reported errors fixes the class in one place, which would let those two guards go; an error-recovery pass over the existing error fixtures would guard it, since no fixture compiles with error recovery today.

Check: compile each shape above with `compileFileSync(file, { output: "dom", errorRecovery: true, translator: "@marko/runtime-tags/translator" })` from a `check.tmp.mjs` run with `node -r ~ts`; each throws a `TypeError` (e.g. `<const/x/>`: "Cannot destructure property 'value' of 'valueAttr' as it is undefined.") instead of returning one diagnostic.
