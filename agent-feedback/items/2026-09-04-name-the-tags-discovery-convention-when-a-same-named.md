---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › tagNotFoundError
---

# Name the `tags/` discovery convention when a same-named `.marko` sits in `components/`

`tagNotFoundError` builds its hint only from taglib tag names via edit distance, so a project that put its custom tags in `components/` — the convention in React, Vue, Svelte and Nuxt, and in Marko 5, whose translator sets `tagDiscoveryDirs` to `["components"]` against the Tags-API translator's `["tags"]` — gets a message that never names a directory. With `components/my-button.marko` present, `<my-button/>` reports ``Did you mean `<button>`?``, which points at a native HTML element and reads as a typo report, while `<user-profile-card/>` sitting beside `components/user-profile-card.marko` gets no hint at all; the identical tree compiles under `-t class`, so the compiler already holds both conventions and could name the mismatch. On the error path only, walk up from the template directory (the bound the finder already uses) stat-ing `<dir>/components/<tagName>.marko` and `<dir>/components/<tagName>/index.marko` through `getMarkoOpts().fileSystem`, and on a hit say ``Found `<path>`; Marko 6 discovers tags under a `tags/` directory (rename it, or set `"tags-dir"` in `marko.json`).`` — `lookup.discoveryDirs` already records which dirs were searched and is declared in `packages/compiler/babel-utils.d.ts`. The same rename is worth making in `packages/compiler/src/taglib/finder/index.js › findWithMeta`, whose walk comment still describes looking for "marko.json files or components/ directories", and in `packages/runtime-tags/cheatsheet.md`, which shows `src/tags/product-card.marko` as an example path without stating that `tags/` is the required directory name.

Check: With `components/my-button.marko` beside an `index.marko` containing `<my-button/>`, `pnpm run compile -- -o html -d /abs/index.marko` reports ``Unable to find entry point for [custom tag](…) `<my-button>`. Did you mean `<button>`?``; adding `-t class` to the same command compiles the same tree. Renaming both to `user-profile-card` produces the same error with no hint at all, and writing `{ "tags-dir": "./components" }` into a `marko.json` beside them compiles.
