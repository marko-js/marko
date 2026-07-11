# Experiment 6 — making silent failures loud — protocol (pre-registered)

Experiment 5's error-channel analysis: guided-condition residual failures are
runtime or silent, outside the compile-error channel. Two interventions were
built in response, both now installed in the sandbox stack:

- **D1 — never-assigned `<let>` warning** (runtime-tags): a `<let>` whose
  variable is never assigned and whose initializer reads reactive values
  warns "computed once and will not update… use `<const/>`". Verified: fires
  on 7/7 frozen let-derive failures, 0/85 false positives on the known-good
  corpus, 16/16 reference solutions unaffected, 8522-test suite green.
- **D2 — warning surfacing** (@marko/vite): compile warnings print to the
  dev/build terminal as `[marko] warning: <file>:<line> <message>` (once per
  file+source version). Previously warnings were editor-only.
- (Shipped alongside: the `by=` loop-param guided error, exercised by its
  fixture; not separately measured here since v8 sheets already prevent it.)

## Arm W — does the warning convert the silent failure?

The 7 frozen let-derive chains (5 haiku-written, 2 sonnet-written broken
apps). Repair subject: haiku-low, no sheet, no tools, one round — the exact
regime where this failure previously either stalled or escaped to vanilla
DOM.

- **W0 (control)**: evidence = the failure as it stood — failed behavioral
  checks only (the app compiles and serves; nothing names the cause).
- **W1 (treatment)**: the same broken apps regraded under the patched stack;
  evidence = the same failed checks plus the dev-server guidance lines, which
  now include the `[marko] warning` naming the exact variable and fix.
- n=2 per chain per arm (28 repairs). Both arms graded under the patched
  stack (byte-identical behavior for correct code).
- **W-H1**: W1 repairs fix the derivation (`<const/>` or equivalent) and pass
  at a much higher rate than W0. **W-H2**: W1 repairs stay in idiomatic
  Marko (no vanilla-DOM escapes) more often than W0, since the message names
  an in-framework fix.

## Arm S — does the full stack convert a strong wrong prior?

All 18 frozen sonnet-low failures (12 greenfield Marko-5-dialect C0 apps, 3
e1 edit chains, and the 3 C1 residuals — two `by=` chains, which under the
patched stack now fail at compile time with the new guided error, and one
missing-handler chain). One repair round at sonnet-low **with file tools**,
exp3 P1b-style: the broken app materialized on disk with
`node_modules/marko/llms.md` and `node_modules/@marko/run/llms.md` (v8),
evidence regenerated under the patched stack (compile errors carry guided
hints + the imperative fix-guide pointer; the e1 chains now carry the D1
warning), the prompt appends the imperative pointer exactly as shipped.

- n=2 per chain (36 repairs), graded under the patched stack.
- **S-H1**: a majority of chains repair to full pass in one round (from a 0/15
  first-pass baseline). **S-H2**: repairs are idiomatic Marko 6 (the sheet
  route), not Marko 5 retries or vanilla escapes; sheet reads observable in
  tool logs. **S-H3**: the e1 chains specifically fix let→const per the D1
  warning.

## Metrics

Repaired-to-pass per arm; derivation-fix rate (hand-read: let→const/show);
idiom audit; for Arm S, sheet-read rate from tool transcripts and dialect of
the repaired output. Failure taxonomy for anything that still fails.
