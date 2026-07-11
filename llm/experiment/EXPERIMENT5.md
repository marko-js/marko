# Experiment 5 — capability sweep — protocol (pre-registered)

Everything so far is calibrated on claude-haiku-4-5 at low effort. This sweep
asks whether the guidance stack is a weak-model crutch or a
dialect-knowledge necessity: does the sheet still pay — and does unguided
output improve — as subject capability rises?

## Subjects (tiers)

- **haiku-high** — the baseline model at high reasoning effort: isolates
  *reasoning depth* from *model knowledge* (same weights as every prior
  round).
- **sonnet-low** — claude-sonnet at low effort: the tier real coding agents
  typically run.

Baselines for comparison: the accumulated haiku-low results (greenfield C0 ≈
0%, C1 ≈ 87–100%; e1-filter C0 1/3 with the let-derive trap).

## Materials (all frozen)

- **Greenfield**: t1-counter, t2-temperature, t3-todos, t4-tabs, h2-search,
  t8-guestbook — spanning trivial state, change handlers, list state, the
  attr-tag trap, live filtering, and @marko/run handlers (`Run` namespace).
  Prompts built by the experiment-1 builder with the current v7 sheets.
- **Edit mode**: e1-filter C0 (app only, no sheets) — the cell whose
  derived-state trap every haiku-low failure shared.

## Design

- Greenfield: 6 tasks × {C0, C1} × n=2 per tier = 24 generations/tier.
- Edit: e1-filter C0 × n=3 per tier.
- 54 generations total; identical prompts across tiers (tier is the only
  variable); graded by the existing task graders; idiom audit on e1.

## Hypotheses

- **H5.1 (knowledge binds, not reasoning)**: haiku-high C0 stays near
  haiku-low C0 — wrong-dialect priors are knowledge gaps that more
  reasoning cannot fill.
- **H5.2 (the sheet still pays at sonnet)**: sonnet-low C0 < sonnet-low C1,
  with the gap concentrated in trap-heavy tasks (t4 attr-tags, t8 `Run`
  namespace); C1 stays at/near ceiling.
- **H5.3 (no harm)**: C1 ≥ C0 at every tier — the sheet does not collide
  with stronger priors.
- **H5.4 (trap persistence, genuinely uncertain)**: the e1 let-vs-const
  derived-state mistake appears at higher tiers too — the
  repo-lacks-an-example effect is about available evidence, not capability.

## Metrics

Pass rate per task × condition × tier; per-task C1−C0 gap by tier; e1
let-vs-const choice (hand-read) and idiom audit; failure taxonomy for C0
fails (wrong-dialect vs behavioral vs framework-API hallucination).
