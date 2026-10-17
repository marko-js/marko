---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/dom.ts › markReturn
---

# Mark a `<return>` that only a local closure renders

Attribute tag content inside a `<for>` whose only client work is a `<return>` reading the loop param (`<for|n| until=2><@item><return=n * 10/></@item></for>`, rendered as `<${item.content}/value/>`) has neither a setup nor params: its `_return` sits in a local closure signal. `markReturn` then emits `_return_setup()` with no argument, and a debug build throws `Cannot set properties of undefined (setting 'returns')` when the module loads; the optimized build drops the call and works. The mark belongs on whatever the renderer exposes (the `_content_closures` setup wrapper copies it), so the content needs a setup to carry it, or `markReturn` should skip the mark and let the dynamic tag variable check accept content with local closures.

Check: `packages/runtime-tags/src/__tests__/fixtures/at-tags-for-loop-param-return/template.marko` with the `<let/x=10/>` line removed and `n * x` changed to `n * 10`, then `pnpm run test:update -- --grep "runtime-tags/translator at-tags-for-loop-param-return "`: the debug csr and ssr tests throw that TypeError, and `dom.bundle.debug.js` contains `_return_setup()`.
