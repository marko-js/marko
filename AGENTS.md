# Marko Monorepo

Marko compiles `.marko` templates into optimized server (streaming HTML) and client (fine-grained DOM) JavaScript. pnpm workspaces; Node >= 22.18 (native TS type stripping + module.registerHooks). Primary development happens in `packages/runtime-tags`.

## Packages

- [`packages/compiler`](packages/compiler/AGENTS.md) — `@marko/compiler`. Translator-agnostic: parses `.marko` into a (patched) Babel AST, then hands off to a translator for codegen.
- [`packages/runtime-tags`](packages/runtime-tags/AGENTS.md) — `marko@6` / `@marko/runtime-tags`. The Marko 6 runtime **and** its translator. **Primary development.**
- [`packages/runtime-class`](packages/runtime-class/AGENTS.md) — `marko@5` (private package, published only as `marko`). Marko 5, in maintenance; its translator wraps the class-API translator with runtime-tags' interop layer.

A "translator" is the Babel-plugin half of a runtime package; the compiler loads it as `<pkg>/translator`. "Marko 6" is the runtime-tags version — the compiler stays 5.x.

## Commands

All from repo root. Tests and tooling run directly from TS source (native Node type stripping plus the `~ts` resolve hook for extensionless imports; package `exports` point at `src/` until publish), so no build step is needed to iterate.

```sh
pnpm test                                                 # whole suite fanned across CPU cores (~3x faster than serial)
pnpm test -- --grep "runtime-tags/translator <fixture> "  # scoped test run
pnpm run test:serial -- --grep "..."                      # same run in one process: bail at first failure, live output, --inspect-brk
pnpm test -- <file.test.ts>                               # only the given spec files (dirs and globs work too)
pnpm run test:update -- --grep "..."                      # regenerate snapshots (review the diff!)
pnpm run compile -- -o dom -d foo.marko                   # print compiled output (-o html for SSR; omit -d for optimized)
pnpm run build                                            # all packages -> dist/ + .d.ts
pnpm run build:sizes                                      # bundle-size table; diffs vs .sizes.json
pnpm run lint                                             # oxlint + oxfmt check
pnpm run format                                           # oxlint --fix + oxfmt write
pnpm run change                                           # add a changeset (required for user-facing changes)
```

Tests run from TS source and never catch a type error; `pnpm run build` does (a bare `tsc -b` at the root hangs on test files). Judge build and lint by exit code, never by the last line of output. Run revert experiments under `timeout`, since a broken change can loop a test forever, and leave no test process running.

`pnpm run compile` is the fastest way to inspect what the translator generates. It writes nothing: each compiled module, and then any module the translator generates for it, prints to stdout under a `// <resolved path>` header. (Pass `-t class` for the Marko 5 translator; `-t` also accepts a full translator module id.)

`pnpm run change` prompts, so write `.changeset/<name>.md` directly, naming the package that owns the changed code: `packages/compiler` is `@marko/compiler`, `packages/runtime-tags` is `@marko/runtime-tags`, `packages/runtime-class` is `marko`. `pnpm exec changeset status` catches a name that is no workspace package (it would break the release on `main`), not the wrong one. Restricting behavior that was already broken is a `patch` fix, never a breaking change.

## Repo invariants

- **Dependencies are patched.** `patches/` (pnpm patchedDependencies) adds Marko AST node types to `@babel/types`/`traverse`/`generator` and makes mocha print the `require()` error it drops when its `import()` fallback rescues a spec. Patch only to add Marko AST support, never Babel's behavior. Import Babel via `@marko/compiler/internal/babel` and helpers via `@marko/compiler/babel-utils`, never `@babel/*`. Bumping a patched dependency requires regenerating its patch.
- **Bundle size is a feature.** The pre-commit hook runs lint-staged, a full build, and `build:sizes`, staging `.sizes.json`/`.sizes/`: that diff is the change's size impact. Commits are slow by design. The floor is `.sizes/counter.ssr` and `.sizes/comments.ssr` (a resumed page with no async, reorder, lazy, or dynamic html): code for an optional feature, even one `?.`, must fold out of them. Lint rules whose fix rewrites runtime code into larger output stay off in `.oxlintrc.json` (`unicorn/prefer-string-starts-ends-with`, `unicorn/no-new-array`); enabling one means checking `build:sizes` first.
- **Snapshots and sizes are generated.** Never hand-edit _or delete_ `__snapshots__/**`, fixture `sizes.json`, or `.sizes*`; regenerate with `pnpm run test:update` (which also prunes stale snapshots after a green run) and the commit hook.
- **CI** (`.github/workflows/ci.yml`): build + lint on Node 26; tests on Node 22/24/26 (zcov coverage). Releases go out via changesets on push to `main`.

## Conventions

Organize files top-down (progressive disclosure): public API/exports first, then orchestration, helpers, and low-level detail last — use function-declaration hoisting.

Comments are a last resort and never exceed two lines: prefer self-describing code, and when one is needed it captures intent — never what the code was or what was removed. Wording is plain and direct, with no invented shorthand.

One system per question. Before adding a field, flag, helper, state container, parameter, test config, or module, find what already answers it and extend that; where it falls short, replace it and move its callers over. A second system beside it, above all one built for a single feature, signals a problem not looked at as a whole: say in the summary why nothing existing fits.

Fix causes, in full. Name the mechanism that produced the bad state (an order, an ownership, a missing fact) and remove it; a workaround that tolerates it is a finding. Fix the whole class in one change, a fixture per case, as the full model-level version even when a narrow fix works. A second bug of the same class means the model is wrong: re-examine it with probes across the class. Record a fact where it is intrinsic, not for the syntax shapes a walk recognizes. Before calling a failure a bug, check whether it is the code enforcing a rule (the serializer throwing on a value it cannot serialize); never build around a failure.

Every line needs a reason you can name. No guards, `?.`, fallbacks, casts (`as never`, `as any`, or one the type already satisfies), or parameters for states the design rules out; lean on the invariant (`!`, or a `MARKO_DEBUG` assert). Name checks, dependency method overrides, and machine heuristics are hacks: find the structural fix.

Measure on the bundled build that ships (`pnpm run build`), not the TS source that tests and tooling run: V8 inlines the bundle's module-level function declarations but not those of an ES module, so source timings can mislead. Count bytes (min and brotli), allocations, runtime per call, and compile time; lines are never the only measure. A perf or config knob ships only with a measured win and never restates a default; a change for speed or size that measures within noise is dropped, with the numbers reported. Simplifying the compiler (one fact or check replacing duplicates) needs no speed win: weigh what it deletes and makes hold by construction, counting lines in aggregate.

Don't bend the code around an edge case. Input the design has no reason to support (a `NaN` loop key) gets a compile error or `MARKO_DEBUG` error, not runtime handling every caller pays for. Harden the invariant, then rely on it.

Write the direct form: direct loops, a `reduce` for an accumulating loop. When review catches one site, grep for the same shape and fix every site. No rest or spread to copy, extend, or strip an object: share one record, or key a collection by the field it lacks. Client runtime code, where bundle size comes first, may keep a spread that `build:sizes` shows is smallest, but it is still a red flag to justify. No function that only forwards, and no type named for a single use. A helper every caller guards takes the `undefined` itself, and a flag is set as `flag ||= condition`.

Don't add Babel `NodePath` helper calls (`findParent`, `find`, `getFunctionParent`, …): walk `parentPath` and compare node types directly; existing uses are migrated later.

Names come from the code: the vocabulary of neighboring code, [`CONTEXT.md`](packages/runtime-tags/CONTEXT.md), and the markojs.com docs. Never coin a term, and grep added lines for each `_Avoid_` term and its word forms. Comments (JSDoc included) must be true: check each one a diff touches.

Test through existing fixture families; add a test file only when no fixture can reach the behavior. A fix adds a fixture that fails without it, and so does every branch or statement a change adds: revert each and confirm a fixture fails. Code no fixture needs is deleted. Mechanical lines (renames, moves, plumbing a proven value) need no revert, and a line is proven once: re-prove only lines that changed or whose fixture's output changed. A worthwhile improvement no fixture shows gets one. Test and harness code meets the same bar: no allocation-heavy idioms (`split(...).length`, spreading every descendant to filter), no sleeps where a condition exists, no assertion pinning a known bug as passing.

Marko language reference: <https://markojs.com/llms.txt> lists every docs page; append `.md` to any docs URL for markdown.

## Review

Nothing reaches review until its author has made it optimal, clean, unified and cohesive: read every source hunk against these docs, and each distinct change in the generated output (debug and optimized) once. A change repeated across hundreds of snapshots is one change: read a sample, not every file. A reviewer reads the same way, and each finding quotes the code, names the rule, and gives the concrete fix, measured where bytes are involved. Start with the big picture:

- Why does each touched construct exist in this shape? Trace every wrapper, field, flag, parameter, helper and loop to its producers and consumers; a structure whose reason the change removes goes too.
- Does the fix remove the cause or tolerate it? What existing fact, pointer, pass or helper already answers each addition?
- What does the change make redundant elsewhere, and how would the code read if written today with it in mind?
- State a claimed invariant (an ordering, "every Z is covered"), then check it from both ends: every producer and every consumer, each backed by a fixture or a cited reason it cannot occur.

Keep a change small and complete on its own: no dependency on another open PR, no known bug left for a later one. A change that stands alone (a rename, helper types, a fix, an analysis fact other code reads) lands first as its own PR. A refactor may change output when the abstraction improves it; state each change with its reason, fixture and measurement. A brief to another agent gives the problem, its numbers and constraints, and leaves the implementation to be derived from existing mechanisms.

## Agent feedback

Anything actionable but out of scope for the current task (suspected bug, cleanup, perf or size win, tooling friction, confusing code) must be filed in [`agent-feedback/`](agent-feedback/README.md) before finishing. Never drop it silently. Never fix it inside an unrelated diff. In scope, so fixed rather than filed: a defect in code the diff touches or exposes, and anything in the unreleased feature a branch builds (which also takes no changesets). A deliberate limitation gets a site comment, not an item.
