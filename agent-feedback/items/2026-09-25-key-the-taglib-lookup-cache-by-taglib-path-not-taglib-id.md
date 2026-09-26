---
type: bug
impact: low
effort: low
site: packages/compiler/src/taglib/index.js › buildLookup
---

# Key the taglib lookup cache by taglib path, not `taglib-id`

`buildLookup` caches each lookup in `lookupCache` under the sorted taglib ids alone, and a `marko.json` `"taglib-id"` replaces the file-path id. So two directories whose `marko.json` declare the same id share whichever lookup was built first in the process, and the other directory resolves that one's tags. Copying the `"taglib-id": "my-custom-tag-library"` example from `packages/runtime-class/docs/marko-json.md` into two packages of a monorepo is enough. `loadTaglibFromProps › taglibId` documents the id as keeping copies of one taglib from loading twice, and the docs call it a name for better errors; neither makes two unrelated directories one taglib. Direction: key the cache by the taglibs' file paths (the key also omits the translator, so add its identity), and keep the id only for de-duplicating inside one lookup (`addTaglib`).

Check: create sibling directories `a/` and `b/`, each with `marko.json` `{ "taglib-id": "shared", "<foo>": { "template": "./foo.marko" } }`, a `foo.marko`, and `index.marko` `<foo/>`. `pnpm run compile -- -o html -d <abs>/a/index.marko <abs>/b/index.marko` (one process) prints `import _foo from "../a/foo.marko"` under the `// <abs>/b/index.marko` header, while compiling `b/index.marko` alone prints `./foo.marko`.
