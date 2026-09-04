---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/attrs.ts › _attr
---

# Stringify a boolean `data-*` value instead of writing a valueless attribute

`<div data-active=true>` renders `data-active` with no value, so `el.dataset.active` reads `""` — falsy, the opposite of what was written — and `data-active=true` becomes indistinguishable from `data-active=""`. `data-active=false` disappears entirely, so neither boolean survives a round trip. `tags-html.d.ts` invites the mistake: the `data-*` template-literal index signature admits `boolean`, so a strict project type-checks it. Both runtimes agree on the wrong answer — SSR's `_attr` sends `true` down the HTML boolean-attribute path, and `normalizeAttrValue` in `src/dom/dom.ts` maps `true` to `""`. HTML boolean-attribute semantics do not apply to `data-*`; either write `"true"`/`"false"` for these names or drop `boolean` from the index signature so the mistake is a type error.

Check: `pnpm run compile -- -o html <file>` on `<div data-active=true data-inactive=false data-count=0>x</div>` emits `<div data-active data-count=0>x</div>`, dropping the `false` attribute entirely. The same input with `-o dom` bakes that identical string into `$template`, and a dynamic spelling (`<let/on=true>` plus `<div data-active=on data-inactive=!on>`) compiles to `_attr($scope["#div/0"], "data-active", $scope.on)`, so the browser path runs `normalizeAttrValue`, which returns `""` for `true` and `undefined` (removing the attribute) for `false` — leaving `el.dataset.active === ""` after mount.
