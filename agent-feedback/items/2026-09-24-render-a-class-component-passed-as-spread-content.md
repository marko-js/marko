---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _attr_content
---

# Render a Class API component a Tags parent passes as a spread's `content`

A Class body entering a Tags template is converted to a Tags renderer at the boundary (`toTagsInput` in `packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js` and `runtime-html.js`), but a Tags template that passes a Class component itself as `content=ClassThing` crosses no boundary. `_attr_content` has no compat hook, so a Tags child written as `<div ...input/>` renders nothing on the server or the client, with no debug error, while `<div ...input><${input.content}/></div>` renders it through `patchDynamicTag`. Convert a Class template that reaches `_attr_content` the way `patchDynamicTag` does, through a patch point that costs nothing in bundles without the compat layer.

Check: a `fixtures-interop` fixture with template `import ClassThing from "<class-thing>"`, `<tags-spread id="spread-attr" content=ClassThing/>`, `<class-thing/>`, where `tags-spread` is `// use tags` plus `<div ...input/>`, snapshots `<div id="spread-attr" />` in `render.md`.
