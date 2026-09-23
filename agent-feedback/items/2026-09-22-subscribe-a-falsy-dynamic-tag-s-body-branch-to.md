---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › _dynamic_tag
---

# Subscribe a falsy dynamic tag's body branch to its hoist scope set

When the tag name is falsy, `_dynamic_tag` renders the body via `setConditionalRenderer(..., normalizedRenderer || getContent(scope), ...)`, but its `subscribeToScopeSet` calls cover only the string-name path and `normalizedRenderer?.[RendererProp.Accessor]`, so the body branch it just created never joins the owner's `ClosureScopes:<section>` set. A native tag variable in that body read from outside it (`<${tag}><input/el/></>` plus `el()` in a handler, a `<const>` function, or `onMount`/`onUpdate`) compiles to `_hoist("#input/0", "ClosureScopes:<n>")`, which walks that set, so any client-created falsy-name body yields `undefined` and an empty iterable while a `"div"` name yields the element; only the initial resume of a server-rendered falsy name works, because the server serializes the set. Subscribing whichever renderer was passed to `setConditionalRenderer` fixes the CSR and client-toggle cases. A guard that toggles the name after resume also needs `signals.ts › traverse` to skip destroyed scopes: `subscribeToScopeSet` registers no unsubscribe for a resumed set's adopted members, so the destroyed server branch stays first in the set and the getter returns its detached element.

Check: add a scratch fixture `packages/runtime-tags/src/__tests__/fixtures/x/template.marko`

```marko
<let/tag=input.tag>
<let/result="">
<${tag}><input/el/></>
<button.check onClick() { result = `${el() === document.querySelector("input")}/${[...el].length}`; }/>
<button.toggle onClick() { tag = tag ? null : "div"; }/>
<output>${result}</output>
```

with a `test.ts` exporting `{ equivalent: false, steps: [{ tag: null }, check, toggle, check, toggle, check] }` (`check`/`toggle` click `.check`/`.toggle`), run `pnpm run test:update -- --grep "runtime-tags/translator x "`, and read the `output` lines: `render-csr.debug.md` shows `false/0`, `true/1`, `false/0` (null, div, null) where every step should be `true/1`, and `render-ssr.debug.md` shows `true/1`, `false/2`, `false/1`.
