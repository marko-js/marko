# Agent Feedback

Actionable observations that were out of scope for the task that surfaced them. In scope: fix it. Out of scope: file it here. Never expand a task's diff to fix an item recorded here.

One item per file in `items/`, named `YYYY-MM-DD-<slug>.md`. Convention and triage skill: [DylanPiercey/skills](https://github.com/DylanPiercey/skills).

## When to file

Anything a future contributor should act on:

- `bug`: a suspected defect left unpursued
- `cleanup`: duplication, dead code, inconsistency, refactor opportunity
- `perf`: speed, memory, payload or bundle size, build time
- `dx`: friction in builds, tests, tooling, or repo workflows
- `unclear`: code or docs that were confusing, and what would have clarified them

## Rules

1. **Verify first.** A guess is not feedback. Every item ends with a check that reproduces the claim.
2. **Dedupe first.** `grep -ril '<path or symbol>' agent-feedback/items`. If a file covers it, edit that file only when you add new information.
3. **Check the code site.** An intent comment there means the behavior is deliberate. Do not file it.
4. **Self-contained.** Paths, symbols, reasoning. Never reference conversation context or "earlier analysis".
5. **Cite by stable symbol**, never line number.
6. **State the defect and the check.** Never describe what works. Never narrate a landed fix.
7. **Direction is preventive for `unclear` and `dx`.** Name what would have stopped the trip: a comment, a doc line, a lint rule, a compile error, a debug-only warning. The goal is that the next agent does not hit it.
8. **Resolve by deleting the file in the same PR as the fix.** A partial fix rewrites the file to what remains.
9. **Won't-fix is a maintainer's call, never an agent's.** Add a comment (two lines max) at the code site stating the behavior and why it is deliberate, then delete the file. The comment is what stops re-filing. Never consult git history to learn whether something was resolved; if it is not in `items/` and not commented at the site, it is unresolved.

## Item format

`items/YYYY-MM-DD-<slug>.md`:

```md
---
type: bug | cleanup | perf | dx | unclear
impact: high | med | low
effort: high | med | low
site: <path/to/file.ts> › <nearestStableSymbol>
---

# <one-line imperative title>

<2-6 sentences: the problem, why it matters, a concrete direction. Cut evidence a fixer can re-derive from the site.>

Check: <command, input, or observation that reproduces the claim>
```

`impact`: what breaks or is lost if ignored. `effort`: expected size of the fix. Both are the filer's estimate; triage re-judges.

## Repo notes

Repro:

- Translator claims: `pnpm run compile -- -o html|dom -d <file>` and read the output.
- Runtime claims: write `./*.tmp.mjs` inside the repo (module resolution fails elsewhere), run with `node -r ~ts`, delete after.
- Scoped tests: `pnpm test -- --grep "runtime-tags/translator <fixture> "`.

Guard tests:

- Fold into existing fixture families under `packages/*/src/__tests__/fixtures*`; no one-off test files.
- Snapshots: `pnpm run test:update -- --grep "..."` per fixture; `pnpm run test:update:parallel` repo-wide (plain `test:update` bails at the first failure and skips the rest).
- Compile errors: `error_compiler: true` + snapshot. Runtime dev errors: snapshot under `## Console` with `skip_optimize: true`. SSR-only errors: `error_html: true, skip_csr: true`.
- Debug-only diagnostics (`MARKO_DEBUG` `console.error`) must not change optimized output; match the controllable-select diagnostic pattern.

Pre-ship:

- `pnpm run test:parallel`.
- Runtime changes: `pnpm run build && pnpm run build:sizes`. Bundle size is a feature; report any non-zero delta before committing. Then `git checkout -- .sizes*`; the pre-commit hook regenerates them.
- Pre-commit is slow by design (lint-staged, full build, tsc, sizes). On hook failure grep its output for `error TS`.
- Changeset only for user-facing changes: write `.changeset/<name>.md` directly, verify with `pnpm exec changeset status`.

Gotchas:

- Translator/compiler-only fixes cost no runtime bytes; prefer them when directions are equal.
- `MARKO_AGENT_FIX_GUIDE`/`CLAUDECODE` env can leak "Fix guide: READ ..." lines into error snapshots. The terminal env is the cause, not the fix.
- Never `git stash` without explicit paths; other workspaces share this checkout's stash list.
