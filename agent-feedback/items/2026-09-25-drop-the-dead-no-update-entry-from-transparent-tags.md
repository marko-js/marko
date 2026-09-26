---
type: cleanup
impact: low
effort: low
site: packages/compiler/src/babel-utils/tags.js › TRANSPARENT_TAGS
---

# Drop the dead `_no-update` entry from `TRANSPARENT_TAGS`

`TRANSPARENT_TAGS` lists `_no-update`, but no taglib defines that tag and nothing creates it (runtime-class's `no-update*` directives wrap in `_preserve`), so `isTransparentTag` never matches it. The entry misleads readers into thinking it is a `parseOptions.controlFlow` tag. Remove it.

Check: `git grep -n "_no-update" -- packages` matches only the `TRANSPARENT_TAGS` entry.
