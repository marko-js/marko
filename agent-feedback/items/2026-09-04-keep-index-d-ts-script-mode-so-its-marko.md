---
type: bug
impact: high
effort: low
site: packages/runtime-tags/index.d.ts
---

# Keep `index.d.ts` script-mode so its `*.marko` module declaration applies

`index.d.ts` opens with `import "./tags-html";`, which makes the file a module. Its `declare module "*.marko"` block is therefore a module _augmentation_ rather than an ambient declaration, and no consumer ever gets a type for `import Page from "./page.marko"`. TypeScript reports the defect against this file directly: supply a working wildcard shim alongside it and it emits `TS2666: Exports and export assignments are not permitted in module augmentations` pointing at `export default template`. Neither `"types": ["marko"]` nor an explicit `import "marko"` helps — both resolve the `Marko` namespace (which works, because `declare global` is the module escape hatch) and leave `TS2307` on every `.marko` import. Replace the leading import with `/// <reference path="./tags-html.d.ts" />`, or move the wildcard into its own script-mode `.d.ts`.

Check: in an empty directory run `npm i marko@6 typescript`, add a `page.marko`, an `app.ts` containing `import Page from "./page.marko"`, and a tsconfig with `"moduleResolution": "bundler"`; `npx tsc --noEmit` reports `TS2307: Cannot find module './page.marko' or its corresponding type declarations.` — unchanged by adding `"types": ["marko"]`, by `import "marko"`, or by switching to `moduleResolution: "node16"`.
