---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/assets.ts › withLoadAssets
---

# Return a lazily loaded tag's tag variable in SSR and after resume

`withLoadAssets` returns `writeWaitReady(assetId, renderer, input)`, and `html/writer.ts` › `writeWaitReady` renders through `body.render(renderer, input)` and returns nothing, so the renderer's return value is dropped. A child imported `with { load: "render" }` that has a `<return>` gives its Tag variable `undefined` during SSR, and nothing reaches the resumed parent Scope, so a handler calling it throws after resume; CSR gets the function. The lazy-tag-var-return* fixtures only mount the child on the client. Direction: capture the renderer's return in `writeWaitReady`, return it from `withLoadAssets`, and serialize it into the parent Scope from the ready channel; add an SSR fixture.

Check: fixture with `child.marko` = `<let/n=0><p>n ${n}</p><return=() => n++>` and template `import Child from "./child.marko" with { load: "render" }` + `<Child/api/><button.inc onClick() { api() }>inc</button><div.type>${typeof api}</div>`, `equivalent: false`, steps `[{}, wait, clickInc]`: `ssr` fails with `TypeError: $scope.api is not a function`, while `render-csr.debug.md` shows `function` and then `n 1`. With steps `[{}, wait]` the `ssr` run completes and `writes.debug.html` has `<div class=type>undefined`.
