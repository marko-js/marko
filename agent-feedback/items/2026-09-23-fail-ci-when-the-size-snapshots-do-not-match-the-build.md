---
type: dx
impact: med
effort: low
site: .github/workflows/ci.yml › build
---

# Fail CI when the size snapshots do not match the build

`.sizes.json` and `.sizes/` are regenerated only by the pre-commit hook, and a rebase replays commits without running it, so a branch can merge with a snapshot that no longer matches the runtime it ships: resolving a `.sizes/dom.js` conflict by keeping either side, or a clean textual merge of it, leaves the file stale, and the next unrelated PR then shows the runtime diff instead. The `build` job already builds; running `pnpm run build:sizes` after it and failing on `git diff --exit-code .sizes .sizes.json` would catch it in the PR that caused it.

Check: at `daeeb0e737` (which changed `packages/runtime-tags/src/dom/control-flow.ts`, `dom.ts` and `renderer.ts` without touching `.sizes*`), `pnpm run build && pnpm run build:sizes && git diff --stat .sizes .sizes.json` rewrites `.sizes/dom.js` and `.sizes.json`.
