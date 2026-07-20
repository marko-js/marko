# Agent Feedback

Actionable observations that were **out of scope for the task that surfaced them**. If something is in scope, fix it instead. Do not expand a task's diff to fix issues recorded here.

## When to add an entry

While working on any task, record anything a future contributor should act on:

- a suspected bug you couldn't pursue → `bugs.md`
- duplication, dead code, inconsistency, refactor opportunities → `cleanup.md`
- runtime speed or bundle size opportunities → `perf.md`
- friction in builds, tests, tooling, or repo workflows → `dx.md`
- code or docs that were confusing, and what would have clarified them → `unclear.md`

## Rules

1. **Search the category file first.** If an entry already covers it, don't duplicate; append a corroborating sentence only if you have new information.
2. **Be self-contained.** Include enough detail (paths, symbols, reasoning) that someone can act without re-discovering your analysis. Never reference "my earlier analysis" or conversation context.
3. **Cite by stable symbol, not line number.** Line numbers rot with the next edit; anchor the primary citation to the nearest enclosing stable symbol (exported function, class, variable, or a heading for docs). A line number may appear in the body as a secondary hint.
4. **Append to the end** of the category file.
5. Entries are **removed when resolved** (delete, don't mark done; git history is the archive).
6. **Verify before recording.** A guess is not feedback.

## Resolving a "won't fix" item

When a maintainer has explicitly deemed an item "won't fix" / "not worth it", resolve it by adding a brief inline comment at the code site that captures the decision (so it is not re-filed), then remove the entry. Only on such an explicit call — never on your own initiative.

## Entry format

```md
## <one-line imperative summary>

`<primary/file/path.ts>` › `<nearestStableSymbol>` | 2026-07-02 | impact:<low|med|high> | effort:<low|med|high>

<2–6 sentences: the problem, why it matters, and a concrete suggested direction,
ending with the check that re-verifies the claim (a command, input, or
observation). Cut evidence beyond what a fixer needs to act; further detail is
re-derived from the citation. Additional file paths inline as needed.>
```
