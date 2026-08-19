---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › getSignal
---

# Elide the closure wrapper when the closed-over binding never subscribes

`getSignal`'s cross-section branch always wraps the child render fn -- in `_if_closure`/`_for_closure` via `setClosureSignalBuilder` (core/if.ts, core/for.ts) or else in `_closure_get` -- even when the closed-over binding is client-immutable, i.e. `binding.sources` is undefined and the owner never pushes the signal. Compiling `<const/greeting="hi"/>` with `<if=input.show><div>${greeting}</div></if>` to DOM gives `_const(4)` with no downstream and `_if_closure(0, 0, fn)` used only as the `_if` content setup, which `_content` immediately unwraps (`setup._ || setup`, dom/renderer.ts) -- a dead closure plus a runtime import. The `_closure_get` form is worse: its returned signal has no `._`, so it becomes the setup itself and runs `subscribeToScopeSet` (`ownerScope[accessor] ||= new Set()`, `add`, `trackCleanup`) on every render into a set nothing iterates -- see committed `known-define-tag-empty-section-closure/__snapshots__/dom.bundle.js`, `_if(0, "<div> </div>", "D ", _closure_get(2, ...))` beside `const $count = _const(1)`. Emit the bare render fn when the binding has no sources, keeping the `underTryPlaceholder` resume registration when one is required; the dynamic `_closure` join the original entry also flagged needs no change, since it is already gated on `binding.sources`.

Check: by compiling that `<if>` template with `-o dom`: `_if_closure` must disappear.
