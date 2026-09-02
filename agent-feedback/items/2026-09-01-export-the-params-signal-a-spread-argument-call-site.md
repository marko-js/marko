---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › translateDOM
---

# Export the params signal a spread-argument call site imports

A custom tag called with a spread argument (`<badge(...input.parts)/>`)
makes the parent's dom output import `$params2` from the child module,
but a child template only ever exports `$input` (its positional `input`
param signal), so the bundle fails with a missing export. Main's own
spread-argument fixtures only cover `<define>` renderers and dynamic tags,
which take the runtime path. Either export the params signal under the
name the call site expects, or route file children through the same
runtime apply path dynamic tags use.

Check: compile `<badge(...input.parts)/>` against a `tags/badge/index.marko`
of `<em>${input}</em>` with `pnpm run compile -- -o dom -d`: the parent
imports `{ $params2 as _badge_params }` that the child never declares.
