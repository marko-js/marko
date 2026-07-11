# Results — experiment 6: making silent failures loud

Protocol: `EXPERIMENT6.md`. Interventions under test: **D1** the
never-assigned `<let>` compile warning (runtime-tags) and **D2** terminal
surfacing of warnings (@marko/vite), with the `by=` loop-param guided error
shipped alongside. Implementation validated before measurement: warning fires
on 7/7 frozen let-derive failures and 0/85 known-good templates, 16/16
reference solutions unaffected, 8522-test suite green, end-to-end
`[marko] warning: <file>:<line> …` visible in the dev-server log.

## Arm W — the warning converts the silent failure

Paired repair on the 7 frozen let-derive chains (haiku-low, no sheet, no
tools, n=2): identical prompts except W1's evidence includes the new
dev-server warning line.

| per 14 repairs | W0 (silent checks) | W1 (+ warning) |
|---|---|---|
| repaired to full pass | 2 | **8** |
| fixed the derivation with `<const/>` | 0 | **11** |
| repeated the let-derive mistake | 4 | **0** |
| escaped to vanilla DOM | 10 | 3 |
| change handlers in the repair (audit) | 0 | 8 |

**W-H1/W-H2 confirmed.** With nothing naming the cause, a weak subject
either repeats the mistake or abandons the reactive model (10/14 vanilla —
the two W0 "passes" are both escapes). With the warning naming the variable
and the fix, 11/14 apply exactly `<const/>` and none repeat the mistake.
W1's residual failures are the next layer, not the same one: four
const-adopters then died on Marko-5 `on-input="…"` string handlers (the
native-handler assertion), the familiar one-layer-per-round bound. The
warning does for the silent regime what guided errors did for the loud one.

## Arm S — the full stack vs a strong wrong prior

One tool-enabled repair round (sonnet-low, n=2) over all 18 frozen
sonnet-low failures, apps on disk with v8 sheets, evidence regenerated under
the patched stack.

- **10/18 chains repaired to full pass in one round** (16/36 runs), from a
  0/18 first-pass baseline.
- **Every @marko/run-layer chain converted**: t8-guestbook 6/6 runs across
  all three chains (via still-supported plain verb exports — behavioral
  pass, partially idiomatic).
- **The `by=` guided error works in repair**: 3/4 runs on the two `by=`
  chains adopted `by=(city) => city` verbatim and passed; the fourth wrote
  `by=i` — the same trap with the index parameter — which the same error
  catches at compile, ready for the next round.
- **The D1 warning converted its sonnet chain too** (`e1….sl.r2` both reps
  pass with `<const/>`); `sl.r1` fixed the derivation and stalled on its
  handler layer; `sl.r3` fixed only what the warning named (its secondary
  never-assigned let) while its primary bug (an attribute swallowed by a
  custom tag) stayed unnamed and unfixed — warnings convert exactly what
  they name, no more.
- **Sheet-read compliance collapses at sonnet: 9/36 (25%)** versus haiku's
  41/44 under the identical imperative pointer (exp3). pass-given-read 5/9
  vs pass-given-no-read 11/27; the in-evidence guided hints carried much of
  the no-read load. Strong priors reduce moment-of-need reading — the
  standing channel (AGENTS.md / sheet-in-context) matters *more*, not less,
  for stronger models. Idiom residue concentrates in the no-read population
  (5 scriptlet and 5 event-sync flags among 36).

## Interpretation

The compile-time channel now covers the formerly silent derived-state
failure, and the measurement shows the general law extends to it: **agents
reliably fix what a message names, one layer per round; what nothing names
gets escaped around, not fixed.** For deployment: D1+D2 and the `by=` error
ship on this evidence; the remaining silent classes (behavioral wrongness
with no static signature, under-returned files) still belong to the
verification lane; and pointer phrasing tuned on weak subjects
under-performs on strong ones — the create-marko AGENTS.md scaffold is the
mechanism that does not depend on the subject choosing to read.

Costs: 23 regrades; Arm W 28 haiku repairs (~0.61M tokens); Arm S 36 sonnet
repairs (~1.10M tokens).

## Post-review revision — the intentional first-capture idiom

Maintainer review: a never-assigned `<let>` is *sometimes deliberate* — it is
the idiom for capturing a "first"/untracked value (`<let/initialPrice=price>`),
since `<let>`'s evaluate-once semantics are the snapshot primitive. The
shipped wording treated the shape as always-wrong. Since intent is not
statically separable (the mistaken derive and the intentional capture are
identical shapes), the fix is in the message, not the detection: the warning
now names both readings — "…captured once and will not update… Use
`<const/NAME=…>` for a derived value that recomputes; keep `<let>` if a
one-time capture of the initial value is intended." The reference doc
documents the idiom alongside the warning; no suppression mechanism exists in
the compiler and none was invented.

Conversion re-measured with the reworded message (same 7 chains, fresh
evidence, n=2 — `runs/exp6/results-w1r`): **12/14 `<const/>` adoption, 0
repeat-mistakes, 2 vanilla escapes, 10/14 pass** — statistically
indistinguishable from the original wording (11/0/3, 8/14). Naming the
legitimate reading does not dilute the fix signal; the conversion power
lives in naming the variable, the cause, and the concrete alternative.
