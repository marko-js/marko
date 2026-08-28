---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › normalizeTag
---

# Reach the `static` hint for `interface X { ... }` and `enum X { ... }`

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › knownWrongTags` maps `interface`, `type`, `enum`, `function`, `class`, `declare` and `async` to ``To declare module level JavaScript, prefix the statement with `static`.``, but that hint lives in `tagNotFoundError`, which runs after `normalizeTag`. A declaration whose `{ ... }` body follows the name directly puts the brace text in attribute position, so `normalizeTag`'s `attrNameReg` check throws `Invalid attribute name.` anchored on the `{` and the author never sees the hint: `interface P { id: number }` and `enum E { A }` fail that way on one line and spelled over several, while `type Row = { a: number }`, `function foo() {}`, `async function go() {}`, `declare const x: number` and bodyless `interface P` all reach it. The parse is fine and this is purely an ordering gap in the tags translator, since the same file under `-t class` reports `Unable to find entry point for custom tag <enum>.`, and `static interface P { id: number }` compiles clean, so the hint is the correct advice. Resolve a `knownWrongTags` name before validating attribute names, or defer the attribute-name error until tag resolution has run, so the two brace shapes get the same message the other spellings already get. The fixtures that pin the feature (`static-js-statement-error`, `static-type-error`) both use reachable spellings, so the guard wants the brace forms added.

Check: `pnpm run compile -- -o html -d /abs/iface.marko` on `interface P { id: number }` reports `Invalid attribute name.` with the caret under `{ id: number }`, and `enum E { A }` reports it under `{ A }`; `interface P extends Q` on the same command reports ``Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) `<interface>`. To declare module level JavaScript, prefix the statement with `static`.`` anchored on the name. Expect the second message for the brace forms too.
