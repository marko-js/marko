# Cheat-sheet experiment harness

Measures whether a dense Marko 6 / @marko/run cheat sheet can guide a weak
coding model to working solutions. Protocol in `EXPERIMENT.md`, findings in
`RESULTS.md`, sheets in `cheatsheets/` (v3 is the shipped version).

## Layout

- `tasks/<id>/spec.md` — the prompt-visible task (syntax-neutral, DOM contract)
- `tasks/<id>/given/` — files provided by the task (copied over agent output)
- `tasks/<id>/solution/` — reference solution (validates the grader)
- `tasks/<id>/grade.mjs` — deterministic checks (SSR / browser / HTTP)
- `harness/lib.mjs` — dev-server + Playwright + grading plumbing
- `harness/validate.mjs` — grades all reference solutions (must be 11/11)
- `harness/build-prompts.mjs` — emits run units `{runId, taskId, condition, prompt}`
- `harness/grade-round.mjs` — materializes generations, grades, prints the table
- `harness/dump-failures.mjs` — failed runs → markdown for failure labeling
- `harness/extract-journal.mjs` — Claude-workflow-specific: journal → generations
- `runs/<round>/results.trim.json` — graded outcomes (files + checks per run)

## Re-running

```sh
npm install                      # marko@6, @marko/run, playwright-core
node harness/validate.mjs        # 11/11 reference solutions must pass
node harness/build-prompts.mjs round9 v3 t1-counter t2-temperature --reps 2 --conditions C0,C1
# ...answer each unit's prompt with any model; write generations.json as
# [{runId, taskId, condition, rep, stage, files: [{path, content}]}]
node harness/grade-round.mjs round9 runs/round9/generations.json
```

The generator is pluggable: anything that turns a unit's `prompt` into a
`files` array can be graded. Subjects must not see graders or reference
solutions; give them only the prompt.

Chromium path is hardcoded for the original environment
(`/opt/pw-browsers/chromium` in `harness/lib.mjs`); point it at any Chromium.
