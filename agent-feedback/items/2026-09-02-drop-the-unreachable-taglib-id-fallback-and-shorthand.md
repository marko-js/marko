---
type: cleanup
impact: low
effort: low
site: packages/compiler/src/taglib/loader/loadTaglibFromProps.js › TaglibLoader#load
---

# Drop the unreachable taglib-id fallback and shorthand re-check

`TaglibLoader#load` guards its package.json lookup with `if (!taglib.id)` — the fix for #73 that reads a sibling `package.json` and uses its `name` as the taglib id, falling back to the file path. `Taglib`'s constructor already runs `this.filePath = this.path = this.id = filePath`, so `taglib.id` is always truthy by then and the whole block is dead: the id is the file path, never the package name.

The same file's `"*"` handler in `loadTagFromProps.js` (`TagLoader#"*"`) has a second dead spot: the first pass over `parts` returns `false` for any part that starts with neither `@` nor `<`, so the identical `else { return false; }` in the second pass cannot run.

Check: coverage over the full suite leaves `loadTaglibFromProps.js` lines 74-88 and `loadTagFromProps.js` line 270 unhit; a fresh `taglib._loader.createTaglib(p)` reports `id === p` before any props load.
