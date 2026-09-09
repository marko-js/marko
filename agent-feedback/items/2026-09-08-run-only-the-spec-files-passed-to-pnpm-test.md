---
type: dx
impact: med
effort: low
site: scripts/test-parallel.js › runProcess
---

# Run only the spec files passed to `pnpm test`

Now that the parallel runner is `pnpm test`, a spec file passed on the command
line is appended to every worker's mocha args, so it runs once per worker on top
of the full suite instead of on its own. Splitting positional args from flags in
`main` and, when any are present, packing only those files into bins would make
`pnpm test -- <file>` the single-file run it reads as, and drop the workaround
line in `AGENTS.md` that points at `pnpm exec mocha` instead.

Check: `MARKO_TEST_WORKERS=2 pnpm test -- packages/runtime-tags/src/__tests__/evaluate.test.ts`
reports 28 more passing than `MARKO_TEST_WORKERS=2 pnpm test` alone, because that
file's 28 tests run a second time in the worker that does not already own it. Each
additional worker adds another copy; `pnpm exec mocha` on the same file reports 28.
