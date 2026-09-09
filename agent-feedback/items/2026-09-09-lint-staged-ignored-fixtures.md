---
type: dx
impact: low
effort: low
site: .lintstagedrc.json › staged fixture formatting
---

# Restage formatted fixtures inside ignored node_modules directories

The staged-file formatter accepts tracked fixtures beneath `packages/compiler/test/fixtures/taglib/node_modules`, but lint-staged's final staging operation rejects their ignored parent directory. This can leave formatter changes unstaged even though the lint and format commands succeeded. Configure fixture formatting/restaging to preserve these tracked fixtures, or document the required explicit force-add step.

Check: Stage a change to `packages/compiler/test/fixtures/taglib/node_modules/probe-elements/define/probe-badge.js`, then run `pnpm exec lint-staged --no-stash --no-hide-partially-staged`; the staging step reports that `packages/compiler/test/fixtures/taglib/node_modules` is ignored.
