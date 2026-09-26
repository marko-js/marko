---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-utils/tags.js › getTagDef
---

# Re-resolve `getTagDef` when a tag's name changes after it was memoized

`getTagDef` memoizes `node.tagDef` on first call and returns it whenever it is not `undefined`, but migrate and transform call it (`getMigratorsForTag`, `getTransformersForTag`) before the name is final. `normalizeTag` in `packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts` rewrites a bound PascalCase `<Foo>` to an identifier name without clearing the memo (only its native-tag branch assigns `node.tagDef`), and a taglib transformer that assigns `tag.node.name` leaves it stale too. Analyze then dispatches on the old def, while translate works on a clone with no `tagDef` and re-resolves from the new name. So a taglib `<Foo>` `analyze` hook runs for a tag that is really the imported `Foo` and the dom output drops the child's template, and a `<section>` a transformer renames to `my-tag` renders as a native `<my-tag>` even though `tags/my-tag.marko` exists. Direction: memoize together with the name the def was resolved from and recompute when `node.name` differs, so every rename is covered without each writer resetting the memo.

Check: (a) In a directory with `marko.json` `{ "<Foo>": { "analyze": "./hooks.cjs", "translate": "./hooks.cjs" } }`, `hooks.cjs` `exports.enter = () => console.error("Foo hook");`, `other.marko` `<div>other</div>`, and `index.marko` `import Foo from "./other.marko";` + `<Foo/>`, run `pnpm run compile -- -o dom -d <dir>/index.marko`. It prints "Foo hook" once and emits `$template = "<!><!>"` with `_Foo_template` imported but unused; without the `marko.json` it emits `<!>${_Foo_template}<!>`. (b) In a directory with `marko.json` `{ "<section>": { "transform": "./rename.cjs" } }`, `rename.cjs` `module.exports = (tag, t) => { tag.node.name = t.stringLiteral("my-tag"); };`, `tags/my-tag.marko`, and `index.marko` `<section/>`, `-o html` emits `_html("<my-tag></my-tag>")` instead of rendering the template.
