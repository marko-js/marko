# Experiment 2 — guided compiler errors (no cheat sheet) — protocol (pre-registered)

Goal: measure whether improving Marko's compiler errors and @marko/run's dev
warnings turns a one-shot repair attempt from a dead end into a fix, for a weak
subject (claude-haiku-4-5, low effort) working **without any cheat sheet**.

## Design (paired, two arms)

- **First attempts are frozen**: the 22 broken C0 (no-sheet) generations from
  experiment 1 (16 core from round 1 + 6 held-out from round 4) are reused
  verbatim. First-attempt content cannot depend on error messages, so pairing
  the arms on identical broken code isolates the error-message variable.
- **Arm A (stock)**: evidence harvested by grading each broken app under
  published marko 6.3.2 / @marko/run 0.11.4 (already captured in experiment 1's
  ungraded-run artifacts, including server logs).
- **Arm B (guided)**: the same 22 apps regraded under locally built packages
  containing the error/warning improvements; fresh evidence harvested.
- **Repair**: per app per arm, haiku-low gets the original task spec, its own
  broken files, and the arm's failure evidence — one repair attempt, n=2
  replicates (88 repair runs total). Repairs are graded under the arm's own
  compiler (behavior of correct code is identical across arms; improvements
  change messages only).
- Repair prompts are built by one shared pipeline for both arms:
  compile-error text when fatal, otherwise failed-check list plus any
  framework guidance lines captured from the dev-server log. Round 1's earlier
  repair data (n=1, checks-only evidence) remains reported but is superseded by
  Arm A for comparison purposes.

## Interventions (each tied to observed failure evidence)

Marko repo (compiler + runtime-tags translator):

- **G1 args-form hint** — `<if(cond)>`, `<await(x) p>`, `<show(x)>` etc.
  currently die with "Tag does not support arguments." Add the tag's correct
  value-attribute form to the message. Evidence: most common line-level error
  (5/16 round-1 control runs).
- **G2 bare-statement hint** — `let x = 20;` at template root (and
  `<let x=20>` without the slash) errors with "only supports the `value=`
  attribute". Add: tag-variable form `<let/x=20>` and `static` for module
  scope. Evidence: 2 control runs + repair thrash.
- **G3 curated tag aliases** — unknown tags consult an alias table before
  Levenshtein: `slot` → render content with `<${input.content}/>`; `state` →
  `<let/x=…>`. Evidence: `<slot/>` in 2/2 control layouts (suggested `<set>`).
- **G4 JSX-brace hint** — attribute values wrapped in braces. Two paths:
  (a) values that parse as object literals but must be functions
  (`onClick={fn}`) get a "remove the braces" hint from the handler assertion;
  (b) if cheaply reachable, arg/attr-value parse failures starting with `{`
  get the same hint. Evidence: brace values in 3 control runs; the existing
  good `on:click`→`onClick` suggestion is unreachable when braces break the
  parse first.
- **G5 `<await>` attribute-tag hint** — `<@pending>`/`<@fulfilled>`/`@catch`
  on `<await>` should point at `<try>` + `@placeholder`/`@catch`. Evidence:
  1 control run; plausible repair thrash direction.

@marko/run repo (vite plugin):

- **G6 lookalike-route warnings** — dev-time warning for high-confidence
  non-routable lookalikes: `+`-prefixed files matching no routable type
  (`+server.js`) and `[param]`-bracket names (`[id].marko`). Evidence: 4/4
  control run-task failures were silent 404s from these exact shapes.
- **G7 named verb-export warning** — "Did not find any http verb exports"
  additionally names found lowercase verb-like exports (`get`, `post`).
  Evidence: 1 control run + SvelteKit prior.

## Metrics & hypotheses

- Primary: repaired-to-pass rate, Arm B vs Arm A, paired per app.
  H-primary: Arm B > Arm A (stock arm expected ≈ round-1's 2/16).
- Per-mechanism attribution: each app is pre-labeled with the mechanisms its
  evidence exercises; an intervention is validated iff its labeled apps
  improve under Arm B.
- Secondary: error-thrash rate (failed repair dies on same vs different error
  class); idiom quality of passes (uses `<let/` reactive state vs vanilla-DOM
  escape hatch); token cost.
- Guardrails: marko repo error-snapshot suite must pass (updated snapshots
  reviewed deliberately); experiment-1 reference solutions must still grade
  11/11 under the patched build (no behavior change).

## Threats & mitigations

- **Evidence-pipeline asymmetry** — both arms use the same evidence builder;
  Arm A logs come from the same grading harness run against stock packages.
- **Sampling noise** — n=2 per app per arm; paired comparison; mechanism-level
  attribution rather than a single aggregate.
- **Overfitting messages to the subjects' exact code** — hints state the
  correct general form, never task-specific content; guardrail fixtures in the
  marko repo keep messages honest for human users too.
- **Repair-time contamination** — subjects still receive no cheat sheet;
  prompts are the experiment-1 C0 wrapper + previous files + evidence only.

## Extension — two-round repair loop (pre-registered before running)

Question: do guided errors *compound* across repair rounds, and does the
round-2-only route-suffix warning (G6b) become measurable once the mistake it
targets exists in repaired output?

- **Chaining rule**: every failed round-1 repair (from Arm A and Arm B2)
  becomes one round-2 unit: previous files = that repair's output, evidence =
  that repair's own graded failure (same unified pipeline: compile error, or
  failed checks + dev-server guidance lines). Round-1 passes are terminal.
  Chains whose round-1 repair returned no files terminate (recorded as such).
- **Arms**: A2R continues Arm A chains and is graded under stock packages;
  B2R continues Arm B2 chains and is graded under the shipped guided packages.
  Each original app carries two independent chains per arm (round-1 n=2).
- **Metrics**: cumulative pass after two rounds per arm; compile/serve ladder
  progression per round; mechanism attribution — specifically whether new
  hints surfaced by round-1 fixes (the `on:click` suggestion, the `$id.marko`
  suffix warning) convert their chains in round 2; evidence-progression rate
  (round-2 evidence differs from round-1) as the anti-stall measure.
- **Hypotheses**: (H1) B2R cumulative pass exceeds Arm B2 round-1 by more than
  A2R exceeds Arm A round-1 (compounding). (H2) B2R round-2 gains concentrate
  in chains whose round-1 output compiled or newly surfaced a guided message
  (t1 on:click, t6 remaining, t7 suffix warning). (H3) A2R chains mostly
  re-present the same stock error (stall), as in round 1.

## Extension 2 — multi-error reporting prototype (pre-registered before running)

The top API-shaped candidate from the two-round loop, prototyped in
runtime-tags: the analyze stage now collects every tag-level error (skipping
the failed tag's subtree) and throws them together from the program's analyze
exit, reusing the parse layer's aggregate format. Single-error templates are
byte-identical to before; identical duplicate messages dedupe; capped at 8.

- **Arm M1**: the 22 frozen broken apps regraded under the multi-error build
  (llms.md removed from the sandbox runtime so no fix-guide pointer appears —
  evidence format matches Arm B2 exactly, plus the extra errors). One repair,
  n=2, no cheat sheet, no tools. Graded under the same build.
- **Paired baseline**: Arm B2 (single guided error): 4/44 pass, 15/44 serving.
- **Reach audit first**: the intervention only differentiates on templates
  whose regrade surfaces 2+ analyze-layer errors at once (parse-layer errors
  already aggregate among themselves and mask the analyze stage). The audit
  count is reported before subject runs; per-template deltas are interpreted
  within reach.
- **Hypotheses**: (M-H1) among in-reach templates, errors-fixed-per-round
  exceeds 1 and compile-recovery beats B2's; (M-H2) out-of-reach templates
  match B2 (no regression from the mechanism itself); (M-H3) cascade noise
  stays low (spurious-error rate in evidence, hand-audited).
