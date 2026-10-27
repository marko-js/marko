---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › initValue
---

# Give `<draft>` and `<action>` patch fills

`initValue` builds `_fill${helper}` for a binding whose reads a patch fills, but `_fill_draft` and `_fill_action` do not exist, so a `<draft>` or `<action>` a patch fill reaches imports a missing runtime export (the `helper as FillHelper` cast hides it from the type check). Patch mode is a later slice; it needs the fill variants beside `_fill_let` and a decision on what a fill does with a guess or an action's callable.

Check: compile a template with `<draft/d=input.x/>` read by a child receiving it through a patch fill with `pnpm run compile -- -o dom -d <file>` in patch mode and look for `_fill_draft` in the output.
