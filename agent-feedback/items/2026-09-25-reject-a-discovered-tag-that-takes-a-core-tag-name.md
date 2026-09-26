---
type: bug
impact: med
effort: low
site: packages/compiler/src/taglib/lookup/index.js › merge
---

# Report a discovered tag that takes a Marko 6 core tag's name instead of merging it

`TaglibLookup.addTaglib` merges same-named tag defs, so a discovered `tags/log.marko` becomes the core `<log>` def carrying the user's `template` and `taglibId`, and nothing tells the author the name is reserved. `packages/runtime-tags/src/translator/visitors/tag/index.ts` dispatches on the core `analyzer`/`translator` hooks, so the user's template is silently ignored and `<log="hello"/>` still compiles to `console.log("hello")`. `util/is-core-tag.ts › isCoreTag` checks `taglibId`, which now names the user's taglib, so core tags that look for each other break: with `tags/if.marko` present, `<if=x>a</if><else>b</else>` fails with "must have a preceding `<if=cond>`". Direction: report a diagnostic naming the file when a def with a `template` or `renderer` merges onto a Marko 6 core tag name, emitted from the core taglib's `migrate` visitor so the language server shows it. Exempt hook-only defs and the translator's own taglibs; native HTML names, which a template may deliberately shadow, are unaffected.

Check: in a directory with `tags/log.marko` `<div class="mine">${input.value}</div>`, `tags/if.marko` `<div><${input.content}/></div>`, `index.marko` `<log="hello"/>`, and `index2.marko` `<if=input.x>a</if>\n<else>b</else>`: `pnpm run compile -- -o html -d <dir>/index.marko` emits `console.log("hello")` with no diagnostic, and the same command on `index2.marko` fails with "must have a preceding `<if=cond>` or `<else if=cond>`."
