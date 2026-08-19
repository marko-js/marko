---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/core/await.ts › analyze
---

# Extend only-child marker elision to `<await>`/`<try>`

`<await>` and `<try>` unconditionally create a `#text` marker binding (`createBinding("#text", BindingType.dom, section)` in `await.ts` › `analyze` and `core/try.ts` › `analyze`), so neither takes the `getOnlyChildParentTagName` / `getOptimizedOnlyChildNodeBinding` path that `for`/`if`/`show` use to reuse the parent element as the marker, and `_try` (`packages/runtime-tags/src/html/writer.ts`) always writes BranchStart/BranchEnd marks even for a static body. Compiled to dom, `<div><if=input.c><b>hi</b></if></div>` yields `"<div></div>"` with walks `" b"`, while `<div><try><b>hi</b></try></div>` yields `"<div><!></div>"` with `"D%l"` — an extra comment node and a Replace visit per instance. Route both tags through `util/is-only-child-in-parent` and gate the `_try` branch marks on a non-static body.

Check: by rerunning that dom compile comparison.
