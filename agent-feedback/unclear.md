# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.

## Dynamic style values inside `<for>`/`<if>` are undocumented but load-bearing

`src/translator/core/style.ts:113` | 2026-07-09 | impact:low | effort:low

A `<style>` with `${...}` interpolations placed inside a `<for>` body gives
each iteration its own values (the emitted `<style class=sN>.sN~*{--x:v}`
shell precedes that iteration's siblings, and the latest preceding stylesheet
wins the tie), which is exactly what per-item styling wants — verified live
with 24 loop iterations resolving 24 distinct values. Nothing in the styling
docs says the feature composes with control flow, and two real traps sit next
to it: the emitted style ELEMENTS interleave with the loop's content, so
`nth-child` selectors over the siblings silently skip half their targets (use
`nth-of-type`), and any higher-specificity rule using the `animation:`
shorthand resets an interpolated `animation-delay` because the shorthand
implicitly sets delay to `0s`. A docs example of a dynamic style in a loop,
plus a note about element interleaving, would have saved the debugging session.
## `template.render` copies `$global` with an own-property spread — prototype members vanish

`packages/runtime-tags/src/html/template.ts` (`render`, ~line 44) normalizes
the caller's `$global` with `{ runtimeId, renderId, ...$global }`. An
own-enumerable spread silently drops anything a framework integration
defines on a class prototype: `@marko/run`'s context refactor
(rc.10 factory object → class) moved `params`/`search` getters and
`fetch`/`render`/`redirect`/`back` methods to the prototype, and every
template `$global.params` read became `undefined` with no error (fixed
downstream by making them own properties again). If the spread is
load-bearing (avoiding caller-object mutation), documenting "own enumerable
properties only" in the `$global` docs/types — or dev-warning when a
provided `$global` has enumerable prototype members — would have saved a
debugging cycle.

## `_have`'s scope-tree walk has no formal bound on what it treats as a scope

`packages/runtime-tags/src/dom/update.ts:136` (in `_have`) | 2026-07-08 | impact:low | effort:med

The possession-echo walk follows any object property whose value has a
numeric `[AccessorProp.Id]` (or is a `Set`/`Array`) as if it were a child
scope, with no independent signal that the object actually came from the
scope graph rather than user data that happens to shadow that shape (eg
an app object with a numeric `id`-like field at the same property key
family). It is safe today only because _two_ independent conditions must
both hold for a false possession entry to form: a string-valued
`ConditionalRenderer:`-prefixed key on the object, and a matching
`HOP_SITE_PREFIX` ("Z")-prefixed sibling key with a string value -- both
are reserved, compiler-emitted names a plain data object would not
plausibly carry. That safety argument is implicit and easy to invalidate
by a future change to either prefix's write site. A bounds-based walk (eg following only the known scope-link keys --
`AccessorProp.Owner`/`ParentBranch` and the `BranchScopes`/`ClosureScopes`/
`KeyedScopes`-prefixed collection props in `common/accessor.ts` -- instead
of "any object with a numeric Id") would make the invariant structural
instead of coincidental.

## Update stale `$global.persisted` reference in the compiler's persisted option doc

`packages/compiler/config.d.ts:56` | 2026-07-08 | impact:low | effort:low

The `persisted` compiler option's doc comment still says "a render with
`$global.persisted` set serializes resume markers…", but the render mode
moved off `$global` entirely (see "Gotchas for the next contributor" in
designs/persisted-pages-architecture.md): it now rides `render()`'s
second argument as `RenderOptions.persisted` (`PersistedRenderMode` in
packages/runtime-tags/src/common/types.ts:120-156, unwrapped by
html/template.ts into `State.persistedMode`). A reader wiring up a
persisted render from this comment would set a `$global` key that the
runtime no longer reads. Reword to reference `RenderOptions.persisted`.
