---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/cheatsheet.md › Golden rules §10 / TypeScript
---

# Cheatsheet: `static type` for module-level type aliases in `.marko`

Rule 10 covers `static const` / `static function` so bare `function` is not parsed as a custom tag, but it does not mention type aliases. A root-level `type Row = …` in a `.marko` file fails the typecheck (`TS1005 ')' expected` and cascade parse errors); the working form is `static type Row = TreeRow<TreeFile>`. Agents fall back to inlining long generics on every `<const>` helper. Direction: extend rule 10 (and the common-mistakes table row for module-level values) with `static type Alias = …` next to `static const` / `static function`.

Check: `mtc` a tag with bare `type X = string` (fails) vs `static type X = string` used on a `<const>` param (passes).
