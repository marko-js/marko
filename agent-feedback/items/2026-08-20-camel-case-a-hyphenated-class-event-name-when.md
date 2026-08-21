---
type: bug
impact: high
effort: low
site: packages/runtime-class/src/runtime/helpers/dynamic-tag.js › addTagsEvents
---

# Camel-case a hyphenated Class event name when folding it into a Tags child's `onX`

`addTagsEvents` builds the Tags-side prop with `"on" + eventName.charAt(0).toUpperCase() + eventName.slice(1)`, which only camel-cases the first segment: a Class parent's `<tags-child on-set-filter("handleSetFilter")/>` compiles to the custom event `set-filter` and lands on the child as `onSet-filter`, so the child's `input.onSetFilter` is never populated and the binding is a silent no-op. Single-word `on-ping(...)` happens to survive, which is why the existing `interop-event-class-to-tags` fixture passes and hides it, and the multi-word `on-x-y("method")` spelling is what every Marko 5 template already contains — an incremental migration makes exactly this edit on every converted child. `attrsToCamelCase`, a few lines up in the same file, already routes plain dashed attribute names through `changeCase.___dashToCamelCase`; the event path just does not. Run `eventName` through `___dashToCamelCase` before capitalizing and pin it with a multi-word interop fixture (the sibling perf item on this symbol is about caching the bound handler, not the name).

Check: an interop fixture whose Class parent binds `<tags-footer on-set-filter("handleSetFilter")/>` onto a Tags child calling `input.onSetFilter(...)` fails its `ssr` step with `TypeError: $scope.input_onSetFilter is not a function`, while the same fixture spelled `onSetFilter("handleSetFilter")` passes all steps; both spellings should pass.
