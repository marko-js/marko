---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/__tests__/fixtures/lazy-tag-load-error/child.marko
---

# Simulate lazy-tag-load-error's module failure without a top-level throw

The fixture fails its lazy chunk with `client { throw new Error("load failed") }`, but the bundler drops the declarations after that top-level `throw` and still exports them, so `child.mjs` does not parse (`Export '$input_value' is not defined in module`). The fixture therefore exercises a parse failure, not an evaluation failure, and its render snapshots pin the SyntaxError's message where the comment promises "load failed". Direction: fail the module the way `lazy-tag-load-error-nested-placeholder` does (`await rejectAfter(…)` in `client {}`), or with `reject_load`.

Check: after `pnpm test -- --grep "runtime-tags/translator lazy-tag-load-error "`, `fixtures/lazy-tag-load-error/dist/debug/dom/child.mjs` exports `$input_value` without declaring it, and `__snapshots__/render-ssr.md` shows `Export '$input_value' is not defined in module`.
