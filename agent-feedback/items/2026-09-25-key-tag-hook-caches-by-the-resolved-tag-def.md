---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-plugin/plugins/transform.js › getTransformersForTag
---

# Key the per-tag transformer and migrator caches by the resolved tag def, not the raw name

`getTransformersForTag` and `getMigratorsForTag` (`plugins/migrate.js`) cache each hook list under `name.value || "*"`, but fill it from `getTagDef`, which resolves an attribute tag through its parent (`list-a:item`). The first `<@item>` in a file therefore fixes the hooks for every later `<@item>`: a `<list-b><@item/>` runs `<list-a>`'s nested `<item>` transformer, or loses its own. The same key files every dynamic tag under `"*"`, and the `tagName !== "*"` check then skips the `<*>` def, so wildcard migrators and transformers never see `<${x}>` tags. Direction: cache by the resolved tagDef, with one entry for tags that have none. Then either add the `<*>` hooks for dynamic tags or comment at the site why they are excluded.

Check: in a directory with `marko.json` `{ "<list-a>": { "template": "./list.marko", "<item>": { "transform": "./t.cjs" } }, "<list-b>": { "template": "./list.marko", "<item>": {} } }`, `t.cjs` `module.exports = (tag, t) => { tag.node.attributes.push(t.markoAttribute("fromA", t.booleanLiteral(true))); };`, `list.marko` `<for|item| of=input.item>${item.x}</for>`, and `index.marko` `<list-a><@item x=1/></list-a>` + `<list-b><@item x=2/></list-b>`, `pnpm run compile -- -o html -d <dir>/index.marko` emits `fromA: true` in both `_attrTag` calls. A file with only the `<list-b>` line emits it in neither. Adding `"<*>": { "transform": "./log.cjs" }` with a logging hook prints for `<div/>` but not for `<${input.x}/>`.
