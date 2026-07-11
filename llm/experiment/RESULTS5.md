# Results — experiment 5: capability sweep

Protocol: `EXPERIMENT5.md`. Frozen materials (6 greenfield tasks with the v7
sheets, plus the e1-filter edit cell), identical prompts per tier; only the
subject changed.

## Headline

| arm | greenfield C0 | greenfield C1 | e1-filter C0 (edit mode) |
|---|---|---|---|
| haiku-low (accumulated baseline) | 0/22 | 87–100% | 4/6, of which 4 vanilla-DOM |
| haiku-high | 0/12 | **12/12** | 3/3 — **all vanilla-DOM** |
| sonnet-low | 0/12 | 9/12 | 0/3 (2 let-derive, 1 hybrid) |

## H5.1 confirmed — reasoning does not buy dialect knowledge

haiku-high's unguided output fails exactly like haiku-low's, with the same
wrong-dialect classes (Svelte-style `@click`/`<script>let x=0</script>`,
slash-less `<let x = 20>`, `todos.push(...)` mutations, `on-click=(e) => {}`
forms). Zero greenfield passes at either effort level. Reasoning effort is
spent executing the wrong prior more carefully.

## Sonnet's prior is stronger — and differently wrong

sonnet-low C0 writes confident, well-structured **Marko 5**: `class {
onCreate() { this.state = ... } }`, `on-click('method')`, `state` bindings.
It "knows Marko" — the old one — and never escapes to vanilla DOM the way
haiku does. 0/12 greenfield, 0/3 on the edit cell. More capable models can
have *more* dangerous priors for a recently-changed dialect: the output looks
professional and is entirely the wrong API.

## The sheet pays at every tier (H5.2/H5.3 confirmed)

C1 ≥ C0 in every cell; no evidence of sheet/prior collision. haiku-high +
sheet is a perfect 12/12 (including t4-tabs and t8-guestbook, the trap
tasks). sonnet + sheet went 0/12 → 9/12, and its three residual failures are
instructive:

- **2× a genuinely new trap only a stronger subject exposes**: both h2-search
  C1 runs wrote flawless Marko 6 except `by=city` on
  `<for|city| of=results>` — the `by=` expression evaluates in the
  *surrounding* scope, so the loop param is not visible and SSR dies with
  "city is not defined". The v7 sheet showed only the `by="id"` string form;
  sonnet diligently applied "key the loop" to a primitive list and guessed
  the wrong form. haiku never hit this because haiku omits `by=` when
  there's no obvious id. Guidance tuned on weak subjects had a
  stronger-subject gap. **Fixed in v8** (property-string vs function form
  spelled out, plus a DON'T row); a compiler hint for
  `by=<loop param name>` is recorded as a candidate guided error.
- **1× under-returned files** (t8: page without its handler) — a
  completeness slip, not a dialect failure.

## H5.4 confirmed — the derived-state trap is tier-independent

The e1 edit cell (app only, no sheet) fails on `<let/>`-as-derived-value at
every tier that attempts reactive filtering: haiku-low mixed let-derive with
vanilla escapes; sonnet-low let-derives confidently (2/3); haiku-high sidesteps
it by *always* escaping to `document.getElementById` + `style.display` — which
passes behaviorally and is exactly the non-idiomatic outcome the audit exists
to catch. No tier, at any effort, reliably produces idiomatic derived state
without the rule being stated. Combined with the scaffold A/B null result
(RESULTS4 addendum), the let-vs-const distinction is a *semantic rule* that
neither capability nor a syntax exemplar supplies — only stating the rule
does (C1: idiomatic at every tier).

## Interpretation

The guidance stack is not a weak-model crutch. Capability changes the
*failure texture* — haiku guesses React/Svelte, sonnet writes fluent Marko 5,
high effort finds behavioral escape hatches — but the need for
dialect-in-context is constant, and pass-without-idiom becomes the dominant
risk as capability rises. For real deployments (sonnet-class agents), the
sheet-in-context remains the difference between 0% and ~75–100%, and its
content needs occasional strong-subject probes: weak subjects under-exercise
the guidance (omitting `by=`) and so cannot reveal every gap.

Subject cost: exp5 54 generations (~1.43M tokens), exp4b 9 generations
(~0.21M tokens).
