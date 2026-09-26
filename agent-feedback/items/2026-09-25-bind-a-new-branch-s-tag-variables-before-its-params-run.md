---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/dom/signals.ts › _var
---

# Bind a new branch's tag variables before its params run

A known child's tag variable is bound by `_var` in its section's setup, which `renderer.ts › setupBranch` and `_child_setup` queue, while a new branch's params run synchronously before `control-flow.ts › loop` inserts it. The child's first return therefore reaches the variable only when `_var` replays it from `AccessorProp.ReturnValue` during that queued setup, so content that reads the variable is written into an already inserted branch (an extra text or attribute mutation per new row) instead of arriving with it like param-driven content. Binding at creation needs every `_var` a section reaches, including those inside known child templates' `$setup` exports, to run before params: for example a separately exported function holding a section's `_var` calls, which parents call from their own and which `createBranch` and `_child_setup` run synchronously.

Check: `pnpm test -- --grep "runtime-tags/translator custom-tag-var-return-before-setup "`, then read `render-csr.debug.md`: the click step logs `INSERT: p:nth-of-type(4) + :is(p, p)` followed by `UPDATE: p:nth-of-type(5)::text " " => "c"` and `UPDATE: p:nth-of-type(6)::text " " => "c"`.
