# LLM docs

Files optimized for feeding to coding models/agents working with Marko 6:

- `marko6-cheat sheet.md` — dense prompt-sized syntax sheet. Empirically
  validated: it lifts a weak model (haiku, low effort) from 0% to 100%
  first-pass on a graded task suite. Keep edits evidence-driven; the harness
  to re-validate lives in `experiment/`.
- `marko6-reference.md` — the comprehensive reference the sheet distills.
- `experiment/` — protocol, results, tasks, graders, and per-run data.

The @marko/run counterpart lives in `marko-js/run` under `llm/`.
