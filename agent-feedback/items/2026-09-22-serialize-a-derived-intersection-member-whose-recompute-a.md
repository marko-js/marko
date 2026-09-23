---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › isSupersetSources
---

# Serialize a derived intersection member whose recompute a serialized const can skip

The intersection pass in `finalizeReferences` skips serializing a member whose sources are a superset of its partner's (`isSupersetSources`), assuming any change to the partner recomputes that member. The assumption fails when the recompute path runs through a dirty-checked binding that is itself serialized. Below, `show` (sources `list`, `flag`) is never written to the scope, but `list_length` is, because it intersects the state `flag`. After resume, `list = [...list]` stops at `_const("list_length")` (equal length), so `$list__OR__show` reads `scope.show` as `undefined` and silently renders the falsy branch in debug and optimize builds; `<for|x| of=(show ? list : [])>` empties a server-rendered list the same way, across every component instance whose input gets a fresh same-length array. Take the shortcut only when no binding between the partner's sources and the member has a serialize reason, or else give the member that reason. Forcing the shortcut off serializes `show: !0` and fixes the render.

```marko
<let/list=[1, 2]/>
<let/flag=false/>
<const/show=(list.length > 1 || flag)/>
<p>${show ? list.join() : "none"}</p>
<button onClick() { list = [...list] }/>
<button onClick() { flag = !flag }/>
```

Check: save that as `fixtures/<name>/template.marko` with `test.ts` `{ equivalent: false, steps: [{}, (document) => document.querySelector("button")!.click()] }` and run `pnpm run test:update -- --grep "runtime-tags/translator <name> "`. `render-ssr.md` and `render-ssr.debug.md` log `UPDATE: p::text "1,2" => "none"` after the click while `render-csr.debug.md` logs no change, and `writes.debug.html` serializes `list_length: 2` with no `show`.
