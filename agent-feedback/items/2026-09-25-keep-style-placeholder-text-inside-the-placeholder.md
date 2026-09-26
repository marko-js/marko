---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/style.ts › getStyleImportPath
---

# Emit a `<style>` text node's value in the source-mapped css

With `sourceMaps` set, `getStyleImportPath` copies each located MarkoText child from `file.code` and rewrites only placeholders, while without source maps it joins each text's `value`. A `transform` plugin that edits a `<style>` text's `value` therefore changes the css only when source maps are off, and `@marko/vite` compiles with `sourceMaps: true`. Calling `magicString.update` on every text node is not the fix: it maps every line of the updated chunk to the chunk's first position. Update only a text whose `value` differs from `file.code.slice(start, end)`, and pin it with a fixture whose `marko.json` `transform` rewrites style text, compiled from `translator-api.test.ts` with and without source maps.

Check: in a directory whose `marko.json` is `{ "transform": "./t.mjs" }`, with `t.mjs` default-exporting `{ MarkoText(path) { path.node.value = path.node.value.replace("red", "blue"); } }`, compile a `template.marko` of `<style>` + newline + `.a { color: red; width: ${input.w} }` + newline + `</style>` through a `node -r ~ts` script calling `compileFileSync` with `output: "html"`, `translator: "@marko/runtime-tags/translator"` and a `resolveVirtualDependency(from, dep)` that logs `dep.code`; `sourceMaps: false` logs `color: blue` and `sourceMaps: true` logs `color: red`.
