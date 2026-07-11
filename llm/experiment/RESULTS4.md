# Results — experiment 4: edit tasks on a seeded realistic app

Protocol: `EXPERIMENT4.md`. Subjects: claude-haiku-4-5 (low effort), no tools,
one shot. Materials: the `apps/recipes` seeded idiomatic app (verified live
before task construction), four edit tasks with behavioral graders and
validated reference solutions (`e4`'s planted-bug base also validated to FAIL
its grader), and a degraded-style app variant for the imitation arm.

## Headline: pass rates

| task | C0 (app only) | C1 (app + sheets) | C0d (degraded app) |
|---|---|---|---|
| e1-filter (new interactive code) | 1/3 | 3/3 | 1/3 |
| e2-field (multi-file feature) | 3/3 | 3/3 | — |
| e3-extract (refactor to component) | 3/3 | 3/3 | — |
| e4-bugfix (reactivity symptom) | 3/3 | 3/3 | — |
| **total** | **10/12 (83%)** | **12/12** | 1/3 |

**H1 confirmed, dramatically.** Greenfield tasks without guidance were 0/22
across experiment 1; the same subject editing an idiomatic app with no
guidance passes 83%. Surrounding code is the dominant guidance channel in
edit mode. The sheet still closes the last gap (C1 12/12) — see below for
exactly where.

## Idiom audit (deterministic scan of each run's returned files)

| condition | n | vanilla DOM | event-sync | change handlers | wrong dialect | scriptlets | state mutation |
|---|---|---|---|---|---|---|---|
| C0 | 12 | 1 | 0 | 11 | 0 | 0 | 0 |
| C1 | 12 | 0 | 0 | 12 | 0 | 0 | 0 |
| C0d | 3 | 1 | 2 | 0 | 0 | 0 | 0 |

Both vanilla-DOM escapes (`document.getElementById` + `addEventListener` +
`style.display` inside a `<script>`) **passed behaviorally** — behavioral
grading alone would count them as wins; the audit is what catches them. C1 is
the only audit-clean condition.

## The imitation flip (e1, identical spec, only surroundings differ)

| e1 condition | change-handler style | `onInput`/`e.target.value` sync | vanilla DOM |
|---|---|---|---|
| C0 — idiomatic app | 2/3 | 0/3 | 1/3 |
| C1 — app + sheets | 3/3 | 0/3 | 0/3 |
| C0d — degraded app | 0/3 | 2/3 | 1/3 |

**H3 confirmed: imitation is causal.** With `value:=` visible elsewhere in
the repo, new code uses it; replace those examples with
`onInput(e) { x = e.target.value }` listeners and every subject abandons
change handlers — two copy the degraded listener style verbatim, and one
(C0d.r1) also regressed to `<if(cond)>` args form (a compile error; it
received the shipped guided hint), suggesting off-idiom surroundings weaken
adherence generally, not just for the degraded pattern itself.

## The one residual trap: derived state

Every failed run in the whole experiment — all four of them — made the same
mistake: `<let/filtered=recipes.filter(...q...)>`. A `<let>` initializes
once, so the filter never re-runs as the query changes; the page renders but
never updates (or in C0d.r1, dies earlier on `<if(cond)>`). This is
precisely the one idiom the seeded app never exemplifies: the base app
contains no `<const/>` derived value. Every C1 run — with rule 3 ("derived
values: `<const/…>`, never an effect") in context — used `<const/>` or
`<show>` and passed 3/3.

**H2 confirmed in its sharpest form**: the sheet's residual value in edit
mode concentrates exactly where the repo lacks a nearby example of the
needed pattern. (A compiler-side hint for "`<let>` initializer references
reactive state" is NOT a clean candidate: initializing a `<let>` from
reactive input is legitimate and common — the app's own `star-rating` does
`<let/current=input.value ?? 0>` intentionally. The fix belongs in docs and
seeded examples, or in `<let>`/`<const>` documentation hints, not errors.)

## Interpretation

For agentic edit-mode work on Marko apps, the guidance stack ranks:

1. **Seeded idiomatic code** — carries ~83% alone, and its *style* is copied
   nearly verbatim (for better or worse: degraded repos beget degraded
   edits). Template/scaffold quality (create-marko) is agent documentation.
2. **Cheat sheet on top** — worth +17% pass here and, more importantly, it is
   the only condition with zero idiom violations; it covers patterns the repo
   happens not to demonstrate (derived values here) and inoculates against
   the vanilla-DOM escape hatch.
3. A seeded app should deliberately exemplify the core reactive idioms — a
   `<const/>` derived value, a `value:=` input, an immutable list update —
   because whatever it demonstrates is what agents will write.

Subject cost: 27 generations, ~0.66M tokens. Grand total across
experiments 1–4: ~650 subject generations.
