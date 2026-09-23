---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/core/await.ts › patchContent
---

# Skip the await body shell when a client renderer builds the enclosing body

`_await` writes the body's shell id into `Pending` (and ships the shell) whenever the body has one. When a patch creates the enclosing body from a registered client renderer (`patch-dynamic-tag` swapping a dynamic tag's name), that renderer's setup runs first and its own `_await_content` builds the await branch, so the `Pending` patcher never reads the shipped shell. Dropping the id needs the translator to know the enclosing section is only ever created by its client renderer: a parent's shell walk can still create a known child template's root bare, and that case needs the shell.

Check: `packages/runtime-tags/src/__tests__/fixtures/patch-dynamic-tag-swap-await/__snapshots__/patches.js` ships the `<em> </em>` await body shell in its first flush, while the client builds that branch from `_await_content`.
