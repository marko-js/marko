---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/visitors/program/dom.ts › translate.exit
---

# Render a cross-file template cycle closed by a `load` import or a tag variable

Modules in an import cycle evaluate in whichever order the entry reaches them, so a member can be read before its own module runs: a cycle whose closing tag reads a tag variable fails with "Cannot access '$template' before initialization", and one closed by a `with { load: "render" }` import fails with "Cannot read properties of undefined (reading 'id')". Make a cycle member's module safe to read early: export its template and walks as function declarations (hoisted) and read them by calling, import the cycle's other members after its other imports, build a `load` tag's setup module from those calls, and wrap `withLoadAssets` on first use rather than at module evaluation.

Check: a fixture whose `template.marko` is `<b depth=0/>`, `tags/a.marko` is `<let/extra=0/>`, `<button.more onClick() { extra++ }>more</button>`, `<b/value depth=input.depth + 1 + extra/>`, `<i>${value}</i>`, and `tags/b.marko` is `<return=input.depth * 10/>`, `<span>b ${input.depth}</span>`, `<if=input.depth < 2><a depth=input.depth/></if>`: optimize ssr throws `ReferenceError: Cannot access '$template' before initialization`. With `tags/a.marko` importing `import B from "./b.marko" with { load: "render" }` and rendering `<B which=w depth=input.depth + 1/>`, debug ssr throws `TypeError: Cannot read properties of undefined (reading 'id')`.
