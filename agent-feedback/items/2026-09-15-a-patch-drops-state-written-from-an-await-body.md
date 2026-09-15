---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/patch.ts › PatchState
---

# Carry state an await body writes through a patch navigation

A `<let>` assigned from inside an `<await>` body keeps its previous value
after a patch navigation, so every consumer of it — bound text and `<script>`
effects alike — renders one navigation behind. Data that reaches a template
through a promise is the common shape for a route's server data, so a
persisted app silently shows stale values wherever an await body feeds a
sibling.

Check: add a fixture whose template is

```marko
<let/seen=0>
<p id="bound">bound ${seen}</p>
<try>
  <await|value|=input.promise>
    <script>seen = value</script>
  </await>
  <@placeholder/>
  <@catch/>
</try>
```

with `config = { patches: true, steps: () => [{ promise: resolveAfter(1) },
navigate(() => ({ promise: resolveAfter(2) }))] }`, then
`pnpm test -- --grep "<fixture> "`. It fails `assertPatchedLikeFresh`: the
fresh render is `bound 2`, the patched page `bound 1`.
