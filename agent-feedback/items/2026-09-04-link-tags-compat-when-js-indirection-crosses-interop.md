---
type: bug
impact: high
effort: med
site: packages/runtime-class/src/translator/index.js › markInteropBoundary
---

# Link the tags-compat runtime when JS indirection crosses the interop boundary

`markInteropBoundary` only runs when `loadFileForTag`/`loadFileForImport` resolves a tag's binding to a `.marko` file, and `@marko/compiler`'s `resolveTagImport` resolves only requests ending in `.marko`, so a Class template that reaches a Tags template through any JS module — a barrel re-export, a dependency's JS entry, `import.meta.glob` — compiles without the `runtime/helpers/tags-compat/html*.mjs` side-effect import and SSR throws `TypeError: Cannot read properties of undefined (reading 'boundary')` in `_scope_reason`, because `dynamicTag.___runtimeCompat` and the `htmlCompat` patches were never installed. The break is order-dependent for `<${expr}/>`, which reads `___runtimeCompat` at call time and starts working once any other module in the process imports a Tags template directly, and permanent for `<Tag/>`, which compiles to `render-tag.js` and has no compat hook at all. The same gap silently drops output in the other direction: a Tags parent rendering a Class child through a JS barrel emits nothing for the child. Class→Class indirection through the identical barrel renders correctly, so nothing else about the pattern is unsupported and the failure has no diagnostic. Directions: resolve the boundary through JS re-exports, link the compat runtime from the `has5 && has6` signal already tracked in `packages/runtime-tags/src/translator/interop/index.js` › `patchTranslateProgram`, or at minimum have the Class `dynamic-tag`/`render-tag` helpers raise an actionable `MARKO_DEBUG` error when handed a Tags renderer with no compat installed.

Check: `printf '<let/c=0/>\n' > t.tmp.marko; printf 'export { default } from "./t.tmp.marko";\n' > b.tmp.js; printf '<!-- use class -->\nimport C from "./b.tmp.js";\n<div><${C}/></div>\n' > p.tmp.marko; printf '<!-- use class -->\nimport C from "./t.tmp.marko";\n<div><${C}/></div>\n' > d.tmp.marko; pnpm run compile -- -o html -d -t class p.tmp.marko d.tmp.marko && grep -c tags-compat p.tmp.marko.js d.tmp.marko.js` prints `p.tmp.marko.js:0` and `d.tmp.marko.js:1`.
