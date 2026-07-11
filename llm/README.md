# LLM docs

Files optimized for feeding to coding models/agents working with Marko 6:

- `marko6-cheat sheet.md` — dense prompt-sized syntax sheet. Empirically
  validated: it lifts a weak model (haiku, low effort) from 0% to 100%
  first-pass on a graded task suite. Keep edits evidence-driven; the harness
  to re-validate lives in `experiment/`.
- `marko6-reference.md` — the comprehensive reference the sheet distills.
- `experiment/` — protocol, results, tasks, graders, and per-run data.

The @marko/run counterpart lives in `marko-js/run` under `llm/`.

## Surfacing the sheet to agents

The sheet ships inside the package as `node_modules/marko/llms.md` (and
`node_modules/@marko/run/llms.md`), and `@marko/vite` appends a pointer to
compile errors. Measured with weak tool-using subjects (n=44/condition):
unadvertised on disk it is read by 1/44; an informational reference line
8/44 (no pass gain); the shipped imperative wording 41/44, lifting
repaired-to-pass from 5/44 to 27/44; the full sheet in the prompt remains
the ceiling at 40/44. Details: `experiment/RESULTS3.md`.

Projects that keep an `AGENTS.md` should add the standing variant, which
independently reaches 22/44:

```md
Before writing or fixing any .marko file or route, read the short syntax
references shipped with the installed packages:

- node_modules/marko/llms.md (Marko 6 language)
- node_modules/@marko/run/llms.md (routing, handlers, middleware)
```
