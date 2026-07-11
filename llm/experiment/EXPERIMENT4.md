# Experiment 4 — edit tasks on a seeded realistic app — protocol (pre-registered)

Every prior experiment measured greenfield micro-tasks. Real agentic usage is
mostly *modification* of an existing codebase, where the surrounding code is
itself a form of documentation. This experiment measures (a) whether an
idiomatic seeded app substitutes for the cheat sheet when a weak subject edits
it, and (b) whether that effect is imitation of the surrounding style — i.e.
causal — rather than task ease.

## Materials

- **Seeded app** (`apps/recipes`): a compact idiomatic @marko/run app
  (~10 files) exercising the main surfaces — layout with `input.content`,
  home list loaded via handler `next({ recipes: loadRecipes() })` +
  `<try>`/`<await>`, `$id` detail page with a client-side notes editor
  (`<let/>`, `value:=`, immutable list updates), new-recipe form with a
  `value:=` live preview and POST→redirect (PRG) handler, `src/tags/`
  components (`recipe-card`, `star-rating`), async store. Verified live
  (fetch + Playwright) before any task is built from it.
- **Degraded variant** (`apps/recipes-degraded`): equivalent on all graded
  surfaces, but the interactive idioms are rewritten in
  working-but-non-idiomatic style (inputs synced with
  `onInput(e) { x = e.target.value }` listeners instead of change handlers /
  `value:=`). Only used by the imitation arm.

## Tasks (each: spec + behavioral grader + validated reference solution)

- **e1-filter** — add a live search box to the home list (`#q` input,
  case-insensitive title filter, `#match-count`). Exercises new interactive
  code added to an existing page.
- **e2-field** — add a `difficulty` field end to end: form select → handler →
  store → detail page. Exercises a coherent multi-file edit.
- **e3-extract** — the meta row (minutes + stars) is duplicated in
  `recipe-card` and the detail page; extract it into one reusable
  `src/tags/` component used by both, without changing rendering. Exercises
  refactoring + component creation; graded behaviorally plus source checks
  (duplication gone, one definition, both call sites use it).
- **e4-bugfix** — the base app's notes editor is planted with
  `notes.push(text)` instead of an immutable reassignment; the spec describes
  only the symptom (clicking Add never shows the note). Exercises
  symptom→cause debugging against the reactivity model.

Subjects receive the task spec plus ALL app files in the prompt (no tools) and
return only the files they create or modify; grading materializes the base app
under the returned files. Same subject as all prior rounds:
claude-haiku-4-5, low effort.

## Conditions

| condition | app in prompt | guidance |
|---|---|---|
| C0 | idiomatic | none — surrounding code only |
| C1 | idiomatic | both v7 cheat sheets in prompt |
| C0d (e1 only) | degraded | none |

n=3 per task per condition: e1–e4 × {C0, C1} × 3 = 24, plus e1 × C0d × 3 = 3;
27 generations total.

## Metrics

1. **Behavioral pass** per task/condition (primary: C1 − C0 gap, compared
   against experiment 1's greenfield gap where C0 was 0/22 and C1 87–100%).
2. **Idiom audit** (deterministic static scan of returned files, all
   conditions): vanilla-DOM escapes (`document.`, `addEventListener`,
   `innerHTML`), event-syncing (`onInput`/`onChange` writing `e.target.value`
   into state), wrong-dialect markers (`useState`, class blocks, `$`
   scriptlets, brace-wrapped attribute values), in-place state mutation
   (`.push(` on template state).
3. **Imitation flip (e1)**: fraction of generations using `value:=`/change
   handlers vs `onInput` syncing, C0 (idiomatic surroundings) vs C0d
   (degraded surroundings). The new code is graded identically in both.

## Hypotheses

- **H1**: C0 on the idiomatic app lands well above experiment 1's greenfield
  no-sheet floor (0%), and the C1−C0 gap is far smaller than greenfield's —
  surrounding code carries much of the sheet's load in edit mode.
- **H2**: C1 still wins where the edit needs syntax the surrounding app does
  not exemplify near the edit site, and remains the idiom-quality ceiling.
- **H3 (imitation causal)**: e1/C0 new code follows the app's change-handler
  style; e1/C0d flips toward `onInput` syncing despite an identical spec —
  i.e. subjects copy the repo, not an internal prior.

## Addendum — scaffold-content A/B (pre-registered before running)

Experiment 4's only failure mode was `<let/>` used for a derived value — the
one idiom the seeded app never demonstrates. If adding a single `<const/>`
exemplar to the app fixes it, "scaffolds should exemplify the core reactive
idioms" becomes a data-validated create-marko recommendation.

- **Variant** (`apps/recipes-const`): identical app except
  `src/tags/recipe-card.marko` computes its star string with
  `<const/stars="★".repeat(input.recipe.rating)>` — one derived-value
  example, in a file e1 subjects see but do not edit (repo-level, not
  edit-site, teaching — the same distance at which C0d's degraded style
  propagated).
- **Arm C0c**: e1-filter on the const-seeded app, no sheets, n=6.
- **Baseline**: e1-filter C0 pooled to n=6 (the three frozen exp4 runs plus
  three new replicates of the identical prompt).
- **Metrics**: behavioral pass; the let-vs-const choice for the filter
  derivation (hand-read, it is one line); idiom audit.
- **H-scaffold**: C0c's derived-state failures drop vs C0 (whose let-derive
  rate was 2/3, plus both C0d non-vanilla runs); pass rises accordingly.

## Threats & mitigations

- *Task ease confound (C0 high because tasks are easy)*: C0d isolates style
  from ease — same spec, same behavioral bar, different surroundings.
- *Grader leakage*: specs name only DOM contracts (ids, text, behavior),
  never Marko syntax; the e3 source checks assert duplication structure, not
  specific syntax.
- *Overlay hazard*: subjects returning a full-app dump could mask base files;
  the harness materializes base first, then returned files (returned files
  win), and the audit records which files were touched.
- *n=3 noise*: conclusions at task level are directional; the headline
  comparisons aggregate 12 runs per arm.
