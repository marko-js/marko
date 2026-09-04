---
type: bug
impact: high
effort: low
site: packages/runtime-class/src/translator/index.js › analyze.MarkoTag
---

# Resolve a Marko 5 custom tag from its imported binding, not the module's default export

`analyze.MarkoTag` treats any capitalized static tag name whose scope binding has `kind === "module"` as a default-export template import: it reads `binding.path.parent.source.value` without ever checking the specifier, stores it as `extra.relativePath` and pushes it into `meta.tags`, and `tag/custom-tag.js` then lets `relativePath` win over its own binding→`dynamicTag` branch and emits `importDefault(file, relativePath, tagName)`. So `import { Card } from "./components.js"` used as `<Card/>` compiles to a second `import _Card from "./components.js"` plus `_marko_tag(_Card, …)`, discarding the binding the template already declared; a barrel or component library with no default export fails at module link time, or under bundler interop inside `runtime/helpers/render-tag.js` on `handler._` with an error that names neither the tag nor the import. Consuming a component library through named exports is the ordinary shape, and it is silent at compile time. The same translator already gets the uncapitalized spelling right (`import { thing } from "./card.marko"` + `<thing/>` misses the `/^[A-Z]/` heuristic and reaches `dynamicTag`), and `packages/runtime-tags/src/translator/util/tag-name-type.ts › analyzeExpressionTagName` gates the equivalent branch on `decl.specifiers.some(t.isImportDefaultSpecifier)`. Gate the class translator's module-binding branch the same way so a named import falls through to the existing binding→`dynamicTag` path and stops being recorded in `meta.tags`. A guard fixture belongs beside the existing class-translator custom-tag fixtures, pinning both the named-import and default-import spellings.

Check: `pnpm run compile -- -o html -d t.marko -t class` on `import { Card } from "./barrel.js";` + `<Card/>` emits `import _Card from "./barrel.js"` and `_marko_tag(_Card, {}, out, …)`; dropping `-t class` emits `_dynamic_tag($scope0_id, "#text/0", Card, {}, …)` against the named binding.
