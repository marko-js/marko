# Results — cheat-sheet efficacy for haiku-low subjects

Subject model: claude-haiku-4-5, reasoning effort low, one-shot structured output,
no tools. Grading: deterministic (compile/boot → SSR assertions → real-browser
interaction → HTTP semantics). Protocol: `EXPERIMENT.md`. n=2 per cell unless noted.

## Round 1 — C0 (no sheet) vs C1 (v1 sheet), 8 core tasks

| task | C0 first-pass | C1 first-pass |
|---|---|---|
| t1-counter | 0/2 | 2/2 |
| t2-temperature | 0/2 | 2/2 |
| t3-todos | 0/2 | 2/2 |
| t4-tabs | 0/2 | 1/2 |
| t5-await | 0/2 | 2/2 |
| t6-layout | 0/2 | 2/2 |
| t7-products | 0/2 | 1/2 |
| t8-guestbook | 0/2 | 2/2 |
| **overall** | **0/16 (0%)** | **14/16 (87.5%)** |

### Repair round (one evidence-driven retry per failure)

| | C0 | C1 |
|---|---|---|
| repairs attempted | 16 | 2 |
| repaired to pass | 2 | 2 |
| **cumulative after repair** | **2/16 (12.5%)** | **16/16 (100%)** |

- 11/14 failed C0 repairs died on the *same* error class as the first attempt —
  the error→fix loop stalls without reference material.
- Both "successful" C0 repairs abandoned Marko: static HTML + vanilla
  `document.getElementById` mutation inside handlers/`<script>`. Behaviorally
  green, idiomatically bankrupt (no reactive state, nothing resumable). Passing
  is not the same as learning the framework.
- Both C1 repairs were true fixes (spread the attr-tag iterable; corrected an
  import depth) — the sheet gives the error somewhere to land.

### What control haiku writes (failure taxonomy, 16 runs)

Ranked by frequency; most runs earn several labels:

1. **Svelte** — `<script>let x = 0</script>`, `on:click={...}`, `{#if}/{#each}`,
   `<slot/>` (t1×2, t3, t6×2).
2. **Marko 4/5** — `<state {}>`, `$ scriptlets`, `renderBody()`,
   `<await(user from p)>` + `<else>`, `onCreate/this.state`, `<for(x of y) key=>`
   (t3, t4×2, t5×2).
3. **`<if(cond)>` call-form conditionals** — the single most common line-level
   error (5 runs; also `<await(user) p>`).
4. **SvelteKit/Next route conventions** — `[id].marko`, `+server.js`,
   `guestbook.marko` without `+page`, `export const get/post` lowercase,
   `(req, res)` Node signatures, hallucinated `getData()` loaders (t7×2, t8×2).
5. **JSX-isms** — brace-wrapped attr values `onClick={() => ...}`.
6. **Mutation** — `todos.push(...)` with no reassignment.

Every one of these classes was pre-listed in the v1 sheet's DON'T table, and
none of them appeared in any C1 run — 16/16 C1 runs produced parseable Marko 6
with `<let/x>` state and `onClick() {}` handlers.

### C1 failure analysis (drove v2)

- `t4-tabs.C1.r1`: treated the repeated-attr-tag iterable as an array
  (`input.tab || []` then `tabs[active]`) — the v1 sheet showed the spread idiom
  but did not state the trap. → **E1**: explicit "iterable, NOT an array;
  `input.tab[i]`/`.length` are undefined; spread first" + DON'T row.
- `t7-products.C1.r1`: relative import depth off by one in a nested handler
  (`../../../` for a 4-deep file). Not covered by v1. → **E2**: mechanical rule
  ("one `../` per directory after `src/`") with depth examples in the run sheet.

## Round 2 — C1 (v2 sheet), same tasks, decision cells at n=4

**20/20 first-pass (100%).** t4-tabs 4/4 (was 1/2) and t7-products 4/4 (was 1/2)
— both hypothesis edits validated with no regressions on the other six tasks:

- **E1 confirmed**: stating the attr-tag trap ("iterable, NOT an array") ended
  the `input.tab[i]` failures; every t4 run spread into an array first.
- **E2 confirmed**: the mechanical import-depth rule ended the `../` miscounts.

## Round 3 — ablation: v2-slim

v2-slim cuts 23% of the marko6 sheet (client-effects/`$signal`/element-ref
section, `<show>`, style note, one example block) and 19% of the run sheet
(middleware section + row, `back`/`fetch`/`render`, flat routes, 404/500 row).

**Core tasks: 16/16.** None of the cut content was load-bearing for the core
suite — sheet size can shrink substantially with zero core cost.

## Round 4 — held-out tasks (h1-drawer, h2-search, h3-admin)

Tasks never seen while iterating; measures generalization of the sheets.

| task | C0 | C1 (v2) | C1S (v2-slim) |
|---|---|---|---|
| h1-drawer | 0/2 | 2/2 | 2/2 |
| h2-search | 0/2 | 2/2 | 2/2 |
| h3-admin | 0/2 | 1/2 | 0/2 |
| **overall** | **0/6** | **5/6** | **4/6** |

- Both sheets generalize to unseen tasks; control stays at zero.
- **Slim's `<show>` cut cost nothing**: both slim h1 runs solved draft
  preservation by hoisting a `<let/notes>` above the `<if>` and binding the
  textarea with `value:=notes` — the binding idiom substituted for the missing
  tag. Multiple taught idioms compose into untaught solutions.
- **Slim's middleware cut was load-bearing**: slim runs guarded `/admin` with a
  `+handler.js`, which protects only that exact path, not the subtree —
  `/admin/dashboard` sailed through unauthenticated (or the run failed on M1
  below). Auth-shaped tasks need the middleware section.
- **New failure mechanism (M1) hit both conditions on h3**: writing the page as
  `<h1>Dashboard</h1>` + a bare `Secret metrics` line — concise mode parses the
  bare line as a `<Secret metrics>` tag → compile error → 500 on every route.
  Earlier tasks masked this because their DOM contracts demanded wrapper
  elements. → **E3**: golden-rule sentence + DON'T row ("bare text at template
  root parses as a tag; wrap it in an element or prefix with `--`").

## Round 5 — v3 confirmation (post-held-out refinement)

v3 = v2 + E3 (bare-text rule). Middleware stays (slim's cut reverted). The
h-tasks are no longer blind for this round; this is a targeted confirmation,
not a held-out test.

**8/8**: h3-admin 4/4 (was 1/2 under v2 — E3 confirmed), h1/h2 2/2 each (no
regression). v3 is the shipped sheet.

## Verdict

| condition | first-pass, all graded runs |
|---|---|
| no cheat sheet | 0/22 (0%) — plus 2/16 after error-driven repair, both by abandoning Marko for vanilla DOM |
| v1 sheet | 14/16 (87.5%), 16/16 after one repair |
| v2 sheet | 25/26 (96%) across core n-boost + held-out |
| v2-slim (−23%/−19%) | 20/22 (91%) — free on core, paid on middleware-shaped tasks |
| **v3 sheet (final)** | **8/8 on refreshed h-tasks; extends v2, which was 20/20 on core** |

The sheet is worth ~90 percentage points of first-pass success for a
haiku-low subject, and (more practically) it converts compile errors from
dead ends into one-round fixes. Three edits, each tied to one observed failure
mechanism and each verified by rerun, took it from 87.5% to 100% on every task
shape tried. The ablation shows most prose was expendable but the middleware
section and the not-an-array/bare-text traps are load-bearing.

Total subject cost: 112 haiku generations, ~2.58M subject tokens, ~45 min of
wall clock including grading (2-way agent concurrency).

## Cost accounting

- Round 1 generation: 32 runs, 722k subject tokens (~22.6k/run incl. reasoning).
- Round 1 repair: 18 runs, 407k subject tokens.
- v1 sheet adds ~1.6k input tokens (marko6) / ~2.6k (both sheets) per prompt —
  the entire treatment cost.
- Grading: ~2.5s/run wall clock (dev-server boot + assertions + browser).

## DX fallout recorded as agent-feedback

Four entries in `marko/agent-feedback/dx.md` (targeted `<if(cond)>` hint;
concise-mode bare-JS-statement hint; brace-wrapped attr values die before the
good suggestion; curated cross-framework tag aliases over Levenshtein) and one
in `unclear.md` (AttrTag numeric indexing silently undefined). @marko/run
findings (silently non-routable lookalike files) recorded with the run-repo
deliverables.
