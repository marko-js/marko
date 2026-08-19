---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/dom/signals.ts › _script
---

# Check whether the handler-setup `_script` registration is droppable

`_script(id, fn)` fuses a `_resume(id, fn)` registration with the effect-queuing closure it returns, and is the dominant resume root: 547 of 559 committed `dom.bundle.js` snapshots contain it, versus 73 `_content_resume` + 26 `_var_resume` + 17 `_hoist_resume`; 141 contain both `_script(` and a bare `_resume(`. A `<const>` handler registers twice -- `basic-counter-const-event-handler/__snapshots__/dom.bundle.js` ships `_const(3, _script("a1", ($scope) => _on($scope.a, "click", $scope.d)))` alongside `_resume("a0", $increment)`, and the resume payload carries both (`d: _(1, "a0")` plus `"a1 1"`). Determine whether the delegated-event resume path can reattach `_on` from the handler id alone -- `_on` (dom/event.ts) only sets `element["$click"] = handler` and delegates the type at the document, and the element accessor is already resumed via `_el_resume` -- which would make the setup registration droppable. If so, split construction from registration as `writeRegisteredFns` (`util/signals.ts:1109`) already does for registered fns; that seam is also what the 'parameter reason groups select client registration anchors' item needs. Most `_script` registrations are legitimate (effects must re-run at resume), so any win is confined to the event-handler-setup subset.

Check: `rg -l '_script\(' packages/runtime-tags/src/__tests__/fixtures/*/__snapshots__/dom.bundle.js | wc -l`.
