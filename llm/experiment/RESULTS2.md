# Results — experiment 2: guided compiler errors (no cheat sheet)

Protocol: `EXPERIMENT2.md`. Subjects: claude-haiku-4-5 (low effort), no cheat
sheet, one repair attempt per broken app, n=2 replicates, paired on the 22
frozen broken C0 apps from experiment 1 (identical broken code in both arms).

## Interventions shipped

Marko (`@marko/compiler` + `@marko/runtime-tags`), all verified by new
error-snapshot fixtures and a full green test suite:

- **G1 args-form hints** — `<if(cond)>` / `<else-if(c)>` / `<else(c)>` /
  `<await(x) p>` / `<show(x)>` now append the value-attribute form (e.g.
  "Write the condition as a value attribute instead: `` `<if=condition>` ``").
- **G2 bare-statement hints** — `let count = 0;` at template root and slash-less
  `<let count=0>` / `const x = 1;` explain the tag-variable form
  (`<let/count=...>`) and `static` for module scope.
- **G3 curated tag aliases** — unknown-tag errors consult an alias table before
  Levenshtein: `slot` → `<${input.content}/>`, `state` → `<let>`, `fragment` →
  "multiple roots are fine" (previously `<slot>` suggested `<set>`).
- **G4 JSX-brace hints** — two paths: attribute values that only parse once
  unwrapped (`on:click={() => ...}`) get "values are plain JavaScript
  expressions, not JSX; remove the wrapping `{ }`" appended to the parse error;
  object-literal handler values (`onClick={handler}`) get the same guidance
  from the handler assertion.
- **G5 `<await>` attribute-tag hint** — `<@placeholder>`/`<@catch>` on
  `<await>` now point at wrapping `<try>`. (Also fixes the long-standing
  "Tag not support nested attribute tags." typo.)

@marko/run:

- **G6 lookalike-route warnings** — dev/build warnings for `+`-prefixed files
  matching no routable type (`+server.js` → "handlers are named
  `+handler.<ext>`") and `[param]`-bracketed file/dir names → "dynamic path
  segments are written `$param`".
- **G7 named verb-export warning** — the "no http verb exports" warning now
  names found lowercase verb exports and shows `export const GET = Run.GET(handler)`.

Guardrails: full marko suite green after snapshot regeneration (reviewed); run
repo route-builder suites green; all 11 experiment reference solutions pass
11/11 under the patched builds (no behavior change).

## Arm A — stock errors (marko 6.3.2 / @marko/run 0.11.4)

Repaired-to-pass: **1/44 (2.3%)**. The only success was on t2-temperature,
where the stock `<let>` message is already the most instructive of the set —
and the "fix" abandoned reactive state for vanilla DOM mutation. Replicates
confirm round 1's n=1 estimate (2/16) was, if anything, optimistic.

Subject cost: 132 repair generations across the three arms, ~2.96M tokens.

## Arm B — guided errors

| outcome | Arm A (stock) | Arm B (guided) | Arm B2 (+route-suffix warning) |
|---|---|---|---|
| repaired to full pass | 1/44 (2.3%) | 3/44 (6.8%) | 4/44 (9.1%) |
| repaired to compiling/serving app | 9/44 (20%) | 16/44 (36%) | 15/44 (34%) |

Per-mechanism (compiles-after-repair, n=4 per app pair):

- **G3 slot alias**: t6-layout 2/4 → 4/4 compiling, 0/4 → 3-4/4 full pass — the
  cleanest win; the alias text is essentially the whole fix for a layout.
- **G6 lookalike warnings**: t7-products 1/4 → 4/4 compiling-and-routing
  (subjects renamed `[id].marko` per the warning); t8-guestbook 1/4 → 2-3/4.
  Full passes still 0 — the routed apps then fail on hallucinated data-loading
  APIs (`getData`, `(req, res)` handlers), the next unguided layer.
- **G1/G2/G4 hints all land their step**: subjects reliably applied the exact
  fix each hint described (braces removed, value-attribute forms adopted).
  t1–t5/h1/h2 still fail to compile because the fixed line reveals the next
  wrong-dialect construct (e.g. braces fixed → `on:click` name error the
  subject never saw; `<state {` and Svelte `{#if}` blocks die in
  `htmljs-parser` where no hint site exists yet).

## The central finding

**Guided errors reliably convert their own error into a correct edit, but a
single repair round advances exactly one error, and control haiku's apps
carry 2–4 stacked wrong-dialect constructs.** Message quality doubled
compile-recovery (9/44 → 16/44) and full passes tripled from a tiny base
(1 → 3-4/44), but passes are bounded by error depth, not message quality.
Two corollaries, both now recorded as agent-feedback:

- The translator throws on the first error per template; a collect-and-continue
  mode (the parse layer already aggregates) would let one round fix several
  mistakes at once.
- Arm B2's route-suffix warning (`$id.marko` → "needs `+page`") was added after
  observing Arm B subjects renaming `[id].marko` → `$id.marko`; it cannot show
  up in this experiment's single-round evidence (the mistake it catches only
  exists in repaired output) — its aggregate delta vs Arm B (3→4 passes,
  16→15 compiles) is sampling noise at n=44. It ships on direct evidence of
  the failure it prevents, and a two-round loop would measure it.

Contrast with experiment 1: the cheat sheet fixes all layers at once
(87.5–100% first-pass); guided errors fix one layer per round-trip. For
agents, docs-in-context beat error-driven repair by an order of magnitude;
guided errors are still worth shipping because they compound across rounds,
help humans, and cost nothing at runtime.

## Notes

- None of the 22 broken apps triggers any stock warning or usable pointer for
  the @marko/run failure shapes (`[id].marko`, `+server.js` are silently
  non-routable); Arm A evidence is honest about that.
- Evidence pipeline identical in both arms: compile error text when fatal,
  otherwise failed checks + framework warning lines captured from the dev
  server log.

## Side result — Run-namespace cheat sheet (v4)

Prompted by review feedback that the @marko/run docs taught the deprecated
plain-export style: cheat sheet + reference rewritten around the global `Run`
namespace (`Run.GET(handler)`, `Run.ALL(...)` middleware, validation options,
`Run.href`). Re-validated: t7-products / t8-guestbook / h3-admin at n=2 →
**6/6 first-pass**, and all six generated handlers/middleware idiomatically
used `Run.*` (zero legacy exports). Reference solutions updated to `Run.*` and
re-validated 11/11.
