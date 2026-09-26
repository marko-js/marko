---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › getDynamicTagInputBindings
---

# Map a dynamic tag's attributes to its known templates per prop, as a known tag does

A dynamic tag whose name resolves only to known templates (`tagNameTemplates`) maps them through `{ value: tagExtra }`, the one expression every attribute is merged into, where a known tag maps each prop to its own attribute through `KnownExprs`. So an attribute no candidate reads is still evaluated, passed in the input object and subscribed to, and each candidate's reads and serialize reasons land on the whole tag. Building per-attribute `KnownExprs` for such a tag and taking the union of each candidate's prop tree over them would prune unread attributes and narrow reasons as the known tag path does; beyond that, the tag could call each candidate's known-tag signals instead of building an input object.

Check: with `A` and `B` both rendering only `${input.title}`, compile `<${x ? A : B} title="hi" unused=count/>` (`pnpm run compile -- -o dom -d <file>`): it passes `unused: $scope.d` and re-renders from an `_or` on `count`, while `<A title="hi" unused=count/>` omits `unused` and never updates for `count`.
