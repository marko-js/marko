---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/common/errors.ts › _hoist_read_error
---

# Keep the read-error stubs out of the optimized html runtime

`_hoist_read_error`, `_el_read_error` and `_signal_read_error` throw only in debug, but optimized html output references them, so `dist/html.mjs` exports them as empty functions, which `packages/runtime-tags/AGENTS.md` › `MARKO_DEBUG` rules out. Where the stub stands in for a getter that gets called (`((el) => el())(_el_read_error)`, from `visitors/program/html.ts`), it must stay a function; where it is called at the site, its value is `undefined` and optimized output can emit `void 0` instead, as the DOM's hoisted alias read does: `getHTMLReadBase`'s alias branch (`_hoist_read_error()`) and `$signal` on the server (`_signal_read_error()`, `visitors/referenced-identifier.ts`), which is that helper's only site.

Check: `grep -n "_read_error" packages/runtime-tags/dist/html.mjs` after `pnpm run build`, and `pnpm run compile -- -o html packages/runtime-tags/src/__tests__/fixtures/html-comment-abort-signal/template.marko`.
