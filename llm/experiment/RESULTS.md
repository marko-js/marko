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

## Post-review revisions (v4–v8)

Review passes on the shipped sheet, each revalidated with fresh subject
runs before landing:

- **v4** — the @marko/run sheet and reference rewritten around the `Run`
  namespace API (`Run.GET(handler)`, `Run.ALL(...)`, validation options,
  `Run.href`) after review noted the docs taught the deprecated plain-export
  style. Revalidated on t7/t8/h3 at n=2: 6/6, with every generated handler
  using `Run.*`.
- **v5** — review caught two marko6-sheet gaps: change handlers were shown
  only in passing without stating that the `*Change` handler is what turns an
  uncontrolled native input into a controlled one (`:=` being its shorthand),
  and the async section was titled "server streaming" although `<await>` also
  re-renders in the browser when handed a new promise (verified live:
  state → `<const>` → new promise → placeholder → new result). Both fixed with
  no size growth; revalidated on t2/t3/t5/h2 at n=2: 8/8.
- **v6** — review caught golden rule 1 overstating its constraint: it said
  text MUST live inside an element, but top-level text is legal with the concise-mode text
  prefix (`-- hello ${name}` — compiler-verified in html and dom output). The
  rule now offers both fixes, matching the DON'T-table row that already knew
  about `-- `. Same pass: the not-an-array fallback changed from
  `[...input.tab || []]` to `[...input.tab ?? []]` because the unescaped `||`
  inside a table-cell code span is parsed as a GFM column separator — prettier
  had re-flowed the packaged `llms.md` copy so the shipped row read as
  garbage split across phantom cells (the experiment sandbox used the
  unmangled source, so no result is affected). Revalidated on t1/t4 at n=2:
  4/4, with both t4 subjects adopting the `?? []` spread form verbatim
  (`runs/exp1-v6check`).
- **v7** — review flagged two missing pieces of guidance. (1) Golden rule 5's
  DOM-event demo *was* the event-syncing anti-pattern
  (`onInput(e) { q = e.target.value }`): agents commonly sync inputs through
  `onInput`/`onChange` listeners instead of the declarative change-handler
  pattern that makes the value's owner explicit. The rule now demos
  `onSubmit` + `preventDefault` and points at the change-handler rule, backed
  by a DON'T row (`value:=q` — the change handler owns the value). (2)
  Fetch-while-rendering: new async-section guidance to start data loads
  early, pass the promise through the template, and `<await>` where the data
  renders — fetching inside each component serializes requests (waterfalls).
  The run sheet's handler example now passes `entries: loadEntries()` and a
  contract bullet names `next(data)` promise-passing as the first-class
  version (verified live: unawaited promise through `next()` streams the
  shell + placeholder before the resolved content in one response). Both
  references extended to match. Revalidated on t2/h2/t8 at n=2: **6/6**, with
  both t2 runs using `valueChange` casts, both h2 runs `value:=q`, both t8
  runs `next({ entries })` → `$global.data`, and zero `onInput` listeners
  (`runs/exp1-v7check`).

Follow-up clarity probe (`runs/probe-v7-next`): review asked whether v7 makes
it unambiguous that promises are passed to `next()` for the template to
`<await>`. New held-out task `t9-headlines` (genuinely async store; the graded
contract requires the loading text to stream before the headline markup in a
single response, so awaiting in the handler and client-side fetching both
fail): 3/3 fresh subjects produced exactly the intended shape —
`next({ headlines: loadHeadlines() })` unawaited, `<try>` +
`<await|headlines|=$global.data.headlines>` + placeholder in the page. 2/3
passed all six checks; the one failure wrote CommonJS `require()` inside the
ESM handler (`require is not defined`), a module-system slip unrelated to the
pairing and a single occurrence — below the sheet's evidence bar for a new
line. Note the probe's spec fixes the architecture (load in the route layer);
it measures mechanism clarity given that requirement, not whether subjects
choose handler loading unprompted.
- **v7 → v8** — the capability sweep (`RESULTS5.md`) exposed a
  stronger-subject gap: sonnet diligently keyed a primitive list as
  `by=city` (the loop variable — but `by=` evaluates outside the loop, so
  SSR dies on an undefined reference; 2/2 h2-search C1 failures at
  sonnet-low, a form haiku never produces because it omits `by=`). The
  control-flow block gains the function-form line
  (`by=(city) => city`, with the not-in-scope warning) and a matching DON'T
  row. Revalidated on the exact failing cell (h2-search, C1, sonnet-low,
  n=2): **2/2**, both adopting `by=(city) => city` verbatim. The
  compiler-side hint is recorded in `agent-feedback/dx.md`.
