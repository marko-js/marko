---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › finalizeReferences
---

# Prune the statically known members of an attrs object rebuilt by a state signal

Conceptually an attrs object is recreated whenever a binding it reads changes, and `<@button onClick() { count++ }>${count}</>` reads `count` through the handler's assignment, so the parent rebuilds `attrTag({ onClick: ..., content: $button_content($scope) })` inside the `count` signal. That is the right model, but the members are statically known per scope: the handler only closes over `$scope` and the content renderer takes nothing from the value. The compiler already prunes statically known work elsewhere; here it could create the handler and renderer once in setup and only re-run the object literal, or skip the rebuild entirely when no member reads the changed binding, keeping `_content` out of the update path.

Check: parent `<let/count=0/><child><@button onClick() { count++ }>${count}</></child>`, child `<button ...input.button/>`; `pnpm run compile -- -o dom template.marko` puts `$button_content($scope)` inside `const $count = _let(1, ...)`.
