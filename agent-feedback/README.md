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
3. **Append to the end** of the category file.
4. Entries are **removed when resolved** (delete, don't mark done; git history is the archive).
5. Verify claims before recording. A guess is not feedback.

## Resolving a "won't fix" item

When a maintainer has explicitly deemed an item "won't fix" / "not worth it", resolve it by adding a brief inline comment at the code site that captures the decision (so it is not re-filed), then remove the entry. Only on such an explicit call — never on your own initiative.

## Entry format

```md
## <one-line imperative summary>

`<primary/file/path.ts:line>` | 2026-07-02 | impact:<low|med|high> | effort:<low|med|high>

<2–6 sentences: the problem, why it matters, and a concrete suggested direction.
Additional file paths inline as needed.>
```
