---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/translator/visitors/program/html.ts › shell marker
---

# Set up a patch-constructed tag's state before its scripts run

A `<script>` in a tag a patch constructs for the first time runs with that
tag's own `<const>`/`<let>` state undefined, so a property read off it throws
and the patch rejects. A scope the flush creates from a shell runs only the
ids in the shell's `inits…!effects…` marker, never the tag's `$setup`, which
is where a literal initializer like `<const/bag={ items: [] }>` is created —
the effect id ships, the value that feeds it does not. Rendering the same
state into the DOM is fine, so only the effect path is affected. Any tag
holding a store for its scripts (a handle to an imperative library, an
accumulator across runs) breaks the first time a patch brings it onto the
page while a direct load of the same route works.

The marker's inits come from `getCreateInitClosures`, which walks
`referencedClosures` only, so section-local state is never a candidate;
`isPatchFillBinding` also excludes it, since a parentless section admits
only `sources.state` bindings. Widening both to admit locals with
`hasPatchEffectRead` does fix this case but is not the answer: it regresses
`patch-branch-local-effect`, `patch-branch-local-effect-mixed`,
`patch-child-input-object-method-effect` and `patch-effect-assigns-let` with
"A patch left the page unlike a fresh render".

Check: a fixture whose `template.marko` is `<if=input.show><probe/></if>`
and whose `tags/probe.marko` is

```marko
<const/bag={ items: [] as string[] }>
<script>
  bag.items.push("seen");
</script>
<p>probe</p>
```

with `config = { patches: true, skip_optimize: true, steps: () => [{ show:
false }, navigate(() => ({ show: true }))] }`. `pnpm test -- --grep
"<fixture> "` fails with "A patch unexpectedly rejected". A `<let>` fails the
same way; replacing the script with `<p>probe ${bag.items.length}</p>` passes.
