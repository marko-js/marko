# Cheat-sheet efficacy experiment — protocol (pre-registered)

Goal: measure whether (and which parts of) a dense Marko 6 / @marko/run cheat sheet
guides a weak coding model (claude-haiku-4-5, low reasoning effort) to working
solutions, and iterate on the sheet using failure evidence — without overfitting.

## Subjects & conditions

- Subject: `haiku` model, `low` reasoning effort, one-shot generation via
  structured output (`{files: [{path, content}]}`). No tools, no grader access,
  no file system — the subject sees only its prompt.
- Conditions per task:
  - **C0 (control):** task spec only. Measures the model's prior.
  - **C1 (treatment):** task spec + cheat sheet(s). Marko-only tasks get the
    marko6 sheet; @marko/run tasks additionally get the marko-run sheet.
- Prompts are otherwise identical between conditions (same wrapper text, same
  output instructions). Task specs are syntax-neutral: they specify requirements
  and DOM contracts (ids/texts), never Marko syntax.

## Tasks

- **Core set (iteration):** t1-counter, t2-temperature, t3-todos, t4-tabs,
  t5-await, t6-layout, t7-products, t8-guestbook. Tasks t6–t8 exercise @marko/run.
- **Held-out set (final validation only):** h1-drawer, h2-search, h3-admin.
  Never used while iterating on the sheet; guards against overfitting the sheet
  to the core tasks.
- Every task was solved by the experimenter first; graders validate those
  reference solutions 11/11 before any subject run.

## Measurement

- Deterministic graders only: compile/boot, SSR HTML assertions, real-browser
  interaction (Chromium), HTTP semantics (status/headers/JSON). Pass = all
  checks green. Grader output is recorded per run.
- **Repair round:** each failed first attempt gets exactly one repair attempt —
  same condition materials + its previous files + the compile error or failed
  check list. Measures error recoverability, mirroring agentic loops.
- Metrics per (task, condition): first-pass rate, post-repair pass rate,
  failure-mode labels, output token counts.
- Replicates: n=2 per cell per round (haiku sampling is stochastic). Cells whose
  verdict would change the cheat sheet get boosted to n=4 before acting.

## Failure taxonomy (labels applied to each failed run)

`jsx-ism` (React syntax), `marko5-ism` (class API, scriptlets, renderBody),
`bad-state-tag` (wrong let/const usage), `mutation` (in-place state mutation),
`wrong-event` (event attr shape), `wrong-bind` (missing/incorrect :=/Change),
`wrong-loop` (for syntax), `wrong-cond` (if/else syntax), `wrong-async`
(await/try shape), `attr-tags` (@tag misuse), `run-files` (wrong routable file
names/paths), `run-params` (params/$global access), `run-handler` (verb export /
next()/Response contract), `hallucinated-api`, `task-semantics` (valid Marko,
wrong behavior), `spec-dom` (behavior right, required ids/text wrong), `other`.
Labels are assigned from the diff + grader evidence; multiple labels allowed.

## Iteration rule (what makes a cheat-sheet edit "scientific")

1. Run round N (all core tasks, C0 + C1(vN), n=2).
2. Label failures; rank failure modes by frequency × fixability.
3. Draft sheet vN+1 as a **batch of edits, each tied to a hypothesis**
   ("adding X should fix failure mode Y on tasks Z").
4. Rerun the same tasks with identical prompts under C1(vN+1). C0 is not rerun
   (its inputs are unchanged); round-1 C0 remains the baseline.
5. An edit is validated iff its targeted failure mode drops without new
   regressions elsewhere. Regressions revert or refine the edit.
6. Final round: held-out tasks under C0 vs C1(final) test generalization.
7. Consistent Haiku failure modes that reflect real DX hazards (confusing
   errors, guessable-wrong syntax) are recorded in `marko/agent-feedback/`.

## Threats & mitigations

- **Sampling noise:** n=2 minimum, boost to n=4 on decision-relevant cells;
  compare failure *modes*, not just rates.
- **Overfitting:** held-out tasks; edits must state a mechanism, not encode
  task answers. The sheet may never mention task-specific ids/texts.
- **Grader bias:** graders validated against reference solutions and are
  condition-blind (they see only the materialized app).
- **Prompt leakage:** C0 and C1 share the same wrapper; specs avoid syntax hints.
