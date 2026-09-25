---
type: perf
impact: low
effort: low
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js › addTagsEvents
---

# Cache the handler `addTagsEvents` binds for a Class parent's `on-x`

The browser `addTagsEvents` allocates a new closure per render for each `on-x("method")` binding it folds into the Tags child's `onX` input. The child's input signal dirty-checks by identity (`_const` in `dom/signals.ts` compares with `!==`), so every Class-parent re-render re-executes the child's `_on` attach signal even though the target method is unchanged — the re-attach is cheap, the signal re-run is the waste. Cache the bound function per `(component, methodName, extraArgs)`; string-method handlers are the common case.

Check: two renders of a Class parent with `on-click("handle")` must hand the Tags child the same function reference.
