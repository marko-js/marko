# Results — experiment 3: surfacing the cheat sheet

Protocol: `EXPERIMENT3.md`. Subjects: haiku-low **with file tools**, same 22
frozen broken apps and guided-error evidence as Arm B2, one repair attempt,
n=2 (44 runs/condition). Cheat sheets (v5) present on disk in every app at
`node_modules/marko/llms.md` and `node_modules/@marko/run/llms.md`.

## Conditions and headline results

| condition | pointer | pass | read the sheet | pass given read | pass given no read |
|---|---|---|---|---|---|
| Arm B2 (anchor, no tools) | none | 4/44 | — | — | — |
| P0 sheet on disk, unadvertised | none | 5/44 | 1/44 | 0/1 | 5/43 |
| P1 error-suffix pointer (informational) | "Marko 6 syntax reference: <path>" | 5/44 | 8/44 | 1/8 | 4/36 |
| P1b error-suffix pointer (imperative) | "Fix guide: READ <path> before writing your fix." | **27/44** | **41/44** | **27/41** | 0/3 |
| P2 AGENTS.md instruction (injected) | "read <path> before writing Marko code" | **22/44** | **34/44** | **22/34** | 0/10 |
| P3 full sheet in prompt (ceiling) | — | **40/44** | n/a | | |

## Findings so far

- **H3 confirmed — no spontaneous discovery.** With the sheet sitting
  unadvertised in `node_modules`, 1/44 subjects found it; P0 ≈ Arm B2.
  Shipping the file alone does nothing.
- **The informational error-suffix pointer failed (P1 = P0).** Only 8/44
  followed it, and those readers still failed (1/8) — reading a reference
  *after* the error, under output pressure, does not restructure the fix.
  Contrast P2, where reading precedes writing.
- **P2 is the causal story in miniature: every one of its 22 passes came from
  a subject that read the sheet (22/34 readers pass; 0/10 non-readers).**
  An imperative, standing instruction ("read X before writing") in
  AGENTS.md-style context converts a 9% condition into a 50% one.
- **P3 (in-prompt sheet) remains the ceiling at 91%** — consistent with
  experiment 1. The gap between P2 (50%) and P3 (91%) is the cost of
  indirection for a weak subject: partial reads, reading the wrong sheet for
  the layer at hand, or absorbing less from a tool result than from prompt
  context.

## Token economics (per repair prompt)

- P3 pays the sheet in every prompt (~2.6k tokens marko6+run).
- P2 pays ~90 tokens of AGENTS.md always + the sheet read (~2.6k) only when
  the subject follows it.
- P1/P1b pay ~25 tokens.
- Aggregate subject cost per 44-run condition: P0 1.05M, P1 1.05M, P2 1.16M,
  P3 1.10M tokens — the sheet reads and in-prompt sheet are within ~10% of
  each other at this task size; the economic argument favors pointers only
  when most turns don't need the sheet.

## The phrasing result (P1 vs P1b)

Identical mechanism, identical position (end of the failure evidence),
identical path — only the wording changed:

- "Marko 6 syntax reference: <path>" → 8/44 read, 5/44 pass.
- "Fix guide: READ <path> (Marko 6 syntax) before writing your fix." →
  **41/44 read, 27/44 pass** — better than the AGENTS.md route (22/44) and
  approaching the in-prompt ceiling (40/44).

Pass-given-read is uniform across routes (P1b 27/41 ≈ P2 22/34 ≈ 65%):
*reading is reading* — the surfacing mechanism only controls whether the
read happens, and imperative moment-of-need wording is what makes a weak
subject actually stop and read. All 15 of P1b's stateful-task passes used
idiomatic `<let/` reactive state; the sheet route produces real Marko, not
the vanilla-DOM escapes of the error-only regime.

## Shipped

1. **`llms.md` inside both packages** (`marko`, `@marko/run`) — prerequisite
   for every pointer mechanism; unadvertised it does nothing (P0).
2. **`@marko/vite`: compile errors end with the tested imperative pointer**
   ("Fix guide: READ node_modules/marko/llms.md (Marko 6 syntax) before
   writing a fix."), gated on `marko/llms.md` resolving from the project
   (Marko 5 apps unaffected) and scoped to the vite dev/build surface
   (editor diagnostics untouched). Verified end to end against a live dev
   server before shipping.
3. **`@marko/run`: the non-routable-lookalike warnings** end with "READ
   node_modules/@marko/run/llms.md before changing route files."
4. **AGENTS.md guidance documented** (`llm/README.md`): projects that keep an
   AGENTS.md should include the imperative read-before-writing pointer; the
   `create-marko` / `npm init marko` templates would be the natural place to
   scaffold it (out of scope for this workspace; recorded as a suggestion).

Recommendation stack by harness budget: put the sheet in the prompt when
affordable (91%); otherwise an AGENTS.md pointer plus the shipped error
pointer covers both the standing and moment-of-need channels (each
independently reaches 50–61%; their combination is untested here).

Experiment-3 subject cost: 220 generations, ~5.6M tokens.
