# Experiment 3 — surfacing the cheat sheet (pre-registered)

Question: what is the best way for a coding agent to *find* the cheat sheet
when it is not already in the prompt? Candidate mechanisms: ship the sheet
inside the installed packages and point to it (a) from compiler errors /
dev-server output, or (b) from a project `AGENTS.md`.

## Setup

- Same 22 frozen broken C0 apps; same guided-error evidence as Arm B2
  (shipped packages); one repair attempt; n=2 → 44 chains per condition.
- **Subjects now have file tools.** Each chain's broken app is materialized on
  disk; the prompt gives its absolute path and permits reading files (running
  commands/servers is forbidden). Previous files remain inline in the prompt
  (identical to prior arms) so the only cross-condition delta is the pointer.
- The cheat sheets (v5) are placed where an installed app would have them:
  `<app>/node_modules/marko/llms.md` and
  `<app>/node_modules/@marko/run/llms.md`.

## Conditions

| | pointer | where |
|---|---|---|
| P0 | none | sheet on disk, unadvertised (spontaneous-discovery control) |
| P1 | appended to failure evidence | compile errors end with `Marko 6 syntax reference: node_modules/marko/llms.md`; check-failure evidence adds the @marko/run pointer too (models the product printing it in compiler/dev output) |
| P2 | injected `AGENTS.md` | prompt carries the app's AGENTS.md content: "read node_modules/marko/llms.md (and @marko/run/llms.md) before writing Marko code" (models harnesses that auto-inject AGENTS.md) |
| P3 | full sheet in prompt | in-prompt ceiling anchor for the same broken apps + tools |

Reference anchors from prior arms (no tools): Arm B2 guided evidence 4/44;
exp-1 in-prompt sheet on fresh generation 87–100%.

## Metrics & hypotheses

- Primary: repaired-to-pass per condition; **sheet-read rate** (agent
  transcript contains a read of `llms.md`) and pass rate conditional on
  reading.
- Secondary: idiomatic-Marko rate among passes; input/output token cost per
  condition (the economic argument: P1/P2 pay a ~1-line pointer always and
  the sheet tokens only on demand, vs P3 paying the sheet every prompt).
- H1: P1 and P2 substantially exceed P0 and Arm B2 (the pointer causes
  discovery; discovery converts error-repair into the docs regime).
- H2: P3 is the ceiling; P1/P2 approach it to the extent subjects actually
  read the sheet (pass rate conditional on reading ≈ P3).
- H3: P0 ≈ Arm B2 (weak subjects do not spontaneously explore node_modules).
- Shipping rule: implement the winning mechanism(s) in the packages
  (sheets in the npm tarballs + the pointer at the measured surface), with
  repo tests/lint green.
