---
type: bug
impact: low
effort: low
site: packages/compiler/src/taglib/loader/scanTagsDir.js › scanTagsDir
---

# Report duplicate tag names within one tags directory instead of letting the last one win

`scanTagsDir` crawls grouping directories inline, and `Taglib.addTag` overwrites `this.tags[tag.name]`. Two entries that yield the same tag name, such as `tags/foo.marko` beside `tags/grp/foo.marko`, or `tags/foo.marko` beside `tags/foo/index.marko`, therefore resolve to whichever `readdirSync` lists last, with no diagnostic. Renaming the grouping directory silently changes which template `<foo>` renders. Direction: when `addTag` would replace a tag defined by a different file within one scan, report a compile error naming both paths, raised through `taglibConfig.onError` so the language server can show it and keep the lookup. Stop overwriting.

Check: with `tags/foo.marko` and `tags/aaa/foo.marko` beside an `index.marko` `<foo/>`, `pnpm run compile -- -o html -d <abs>/index.marko` imports `./tags/foo.marko`. After renaming `tags/aaa` to `tags/zzz`, a fresh run imports `./tags/zzz/foo.marko`, and neither run prints a warning.
