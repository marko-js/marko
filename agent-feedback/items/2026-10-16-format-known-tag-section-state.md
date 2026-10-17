---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/known-tag.ts › getTagVarBindings
---

# Reformat the `getTagVarBindings` declaration so lint passes on main

`pnpm run lint` fails on main: `oxfmt --check` wants the `createOutputSectionState(() => [] as t.Statement[])` call that declares `getTagVarBindings` on one line. lint-staged only formats staged files, so the next commit that touches another file still passes its hook while CI's lint step fails. Run `pnpm run format` on the file.

Check: `pnpm run lint` reports `packages/runtime-tags/src/translator/util/known-tag.ts`.
