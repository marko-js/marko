---
type: bug
impact: med
effort: high
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js › create5to6Renderer
---

# Keep a Class parent's body mounted across its rerenders inside a Tags child

A Class parent creates a new body function on every render, and `create5to6Renderer` caches Tags renderers by that function, so each rerender hands the Tags child a renderer with a new key. The body's branch is destroyed and rebuilt, and any Class component inside the body loses its state: with `tags-spread` as `<div ...input/>` or `<div ...input><${input.content}/></div>`, a parent rendering `<tags-spread>Hello ${state.n}<class-thing/></tags-spread>` resets `<class-thing>` from `thing 1` to `thing 0` when it rerenders, and the mutation log removes and reinserts the whole body. The same body passed through a Tags child on to a Class child (`<class-child ...input/>`) keeps its state, because the Class child renders the body itself. Reuse the branch when the new body comes from the same parent render site, and rerender it in place.

Check: `packages/runtime-tags/src/__tests__/fixtures-interop/interop-spread-content-class-to-tags/__snapshots__/render.md` shows `thing 1` becoming `thing 0` on the second class click, while `interop-spread-content-roundtrip-class-to-tags-to-class` keeps `thing 1`.
