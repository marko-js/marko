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
