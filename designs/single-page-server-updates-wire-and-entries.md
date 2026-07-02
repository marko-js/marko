# Wire format & persisted entry proposals

Companion to [single-page-server-updates.md](./single-page-server-updates.md).
Status: experiment write-up + competing proposals for joint review.

Everything below is grounded in a real example compiled and rendered against
the current translator/runtime (debug runtime via the `~ts` register hook;
both debug and `optimize` compiles). Payloads and persisted-entry modules are
hand-authored against the real compiled accessors and then measured
(`esbuild --minify`, gzip). The harness and repro steps live in
[experiments/single-page-server-updates/](./experiments/single-page-server-updates/README.md). Caveats: the harness runs the debug runtime even
for optimized compiles (so a few props print debug names, e.g. `#LoopKey`
where prod emits `M`), and the harness's random 6-char `renderId` inflates
every marker by ~5 bytes vs the default `_`.

## The example

```marko
/* product.marko */
<let/expanded=false/>
<h1>${input.product.name}</h1>
<a href=`/products/${input.product.slug}/specs`>Specs</a>
<button onClick() { expanded = !expanded }>
  ${expanded ? "Hide" : "Show"} details
</button>
<section class=(expanded && input.product.featured && "spotlight")>
  <if=input.product.sale>
    <em>Save ${input.product.sale.percent}%</em>
  </if>
  <ul>
    <for|item| of=input.related by="id">
      <li><price-tag amount=item.price/> ${item.name}</li>
    </for>
  </ul>
</section>
```

```marko
/* tags/price-tag.marko */
<span class="price">$${input.amount.toFixed(2)}</span>
```

One template, every class: pure server text holes (`product.name`,
`item.name`, the price), a pure server attr hole (`href`), an input∩state
intersection (`class=`), a server-driven conditional with a server hole
inside, a keyed server-driven loop, a non-interactive child template, and
client state (`expanded`).

Compiled DOM output highlights (debug):

```js
// the input-apply chain exists in full:
export const $input_product_name = ($scope, v) => _text($scope["#text/0"], v);
export const $input_product_slug = ($scope, v) =>
  _attr($scope["#a/1"], "href", `/products/${v}/specs`);
export const $input_product_featured = _const(
  "input_product_featured",
  $input_product_featured__OR__expanded,
);
export const $input_product_sale = ($scope, v) => {
  $input_product_sale_percent($scope, v?.percent);
  $if($scope, v ? 0 : 1); // server-driven <if> = client _if signal + branch index
};
// the intersection the patch must trigger:
const $input_product_featured__OR__expanded = _or(17, ($scope) =>
  _attr_class(
    $scope["#section/4"],
    $scope.expanded && $scope.input_product_featured && "spotlight",
  ),
);
```

## Findings from the render experiments

These reshape the implementation estimate more than any format choice:

1. **Persisted-mode initial rendering nearly exists already.** The HTML output
   wraps every param-dependent marker, separator, scope, and branch mark in
   the runtime reason-guard system (`_serialize_guard($scope0_reason, <paramSourceIndex>)`,
   `_el_resume(…, guard)`, `_set_serialize_reason` flowing the reason into
   child templates). These guards exist today because a template rendered
   under a _stateful parent_ must serialize — persisted mode is exactly
   "the network is a stateful parent." Injecting one statement,
   `_set_serialize_reason(1)`, at the root of the compiled page produced,
   with **zero translator changes**: markers for every server-only hole,
   `<!>` separators, branch-end marks with branch ids
   (`<!--M…}1 g 7 5 3-->`), owner links (`{_:_(1)}`), child-scope links, and
   loop keys (`#LoopKey: 11/12/13`). The spine emerges automatically, and
   empty scopes (the `price-tag` instances) elide into fill deltas.
2. **The predicted value leak is real and needs a guard split.** Under seeded
   reason, `input_product_sale_percent: 20` serialized — the slot feeds the
   `<if>` body's closure, and today's guards are binary ("could change" ⇒
   markers _and_ value). Under persisted mode the patch always supplies fresh
   values before any trigger runs, so param-only slot values are dead weight
   initially. Required translator change: the reason becomes a small lattice
   (e.g. `1` = stateful parent ⇒ markers + values; `2` = persisted ⇒ markers
   only; merge when both), with `_serialize_guard` (markers) accepting both
   and `_serialize_if` (values) accepting only the stateful bit for
   param-only-reasoned props.
3. **Cross-template propagation is free.** The parent already passes its
   guard into children (`_set_serialize_reason($sg__input_related)` before
   `_priceTag(...)`); with the root seeded, the child's holes marked up
   without touching its compiled output.
4. **Per-request opt-out is confirmed**, not hypothetical: the seed is writer
   state, so a crawler render skips every persisted-mode byte.
5. **Measured initial cost** (this deliberately hole-dense worst case —
   ~430 B of HTML that is almost entirely holes):

   | render (walker runtime excluded) | raw   | gzip  |
   | -------------------------------- | ----- | ----- |
   | optimize, today                  | 429 B | 295 B |
   | optimize, persisted              | 748 B | 394 B |
   | debug, today                     | 513 B | 324 B |
   | debug, persisted                 | 955 B | 451 B |

   +319 B raw / +99 B gzip for 9 holes, a conditional, a keyed loop, three
   child tags — ≈ 11 B gzip per hole, before the ~50 B renderId artifact and
   the finding-2 value leak are removed. Real pages dilute this with static
   content; the number to watch in fixtures is gzip delta per hole.

---

## A. Wire format proposals

The navigation scenario measured throughout:
`/products/trailhead-40` → `/products/summit-65` — name, slug, and `featured`
change, the sale branch flips off (destroying the `<em>`), and the related
list reorders, drops item 11, and adds item 21.

| payload                                        | raw   | gzip  |
| ---------------------------------------------- | ----- | ----- |
| A1 — existing fill format (debug accessors)    | 435 B | 265 B |
| A1 — existing fill format (optimized)          | 252 B | 210 B |
| A1 + tier-2 pruning (kept items send key only) | 162 B | 164 B |
| A2 — nested positional (optimized)             | 167 B | 159 B |
| A3 — value fills + structure stream (opt)      | 213 B | 190 B |

Baseline for scale: the full-page persisted render is 1536 B _plus_ asset
refetch and full JS re-execution.

### A1 — the existing fill format, patch-space ids (recommended)

The payload **is** a resume payload: flat scope fills with patch-local ids,
structural props carried as regular serialized props, plus effect strings
that enter the merge.

```js
M._.r.push(
  (_) => [
    1,
    {
      "#text/0": "Summit 65L Pack", // placement value at the hole's accessor
      "#a/1": "/products/summit-65/specs", // final attr string
      input_product_featured: !1, // slot -> _or trigger
      "D:#text/5": 1, // conditional outcome: branch index
      "A:#ul/6": [_(2), _(3), _(4)], // loop pairing, patch-space refs
    },
    { "#LoopKey": 12, "#text/1": "Hip Belt", "#childScope/0": _(5), _: _(1) },
    {
      "#LoopKey": 21,
      "#text/1": "Ice Axe Loop",
      "#childScope/0": _(6),
      _: _(1),
    },
    { "#LoopKey": 13, "#text/1": "Dry Sack", "#childScope/0": _(7), _: _(1) },
    { "#text/0": "39.00" },
    { "#text/0": "11.50" },
    { "#text/0": "14.25" },
  ],
  ".spsu/product.marko#u 1",
); // effect: merge patch scope 1
```

- Pros: serializer, flush, gates, ready channels, cross-flush references all
  untouched; `_(id)` scope refs inside values keep working (backed by the
  per-navigation `patchId → Scope` map); debuggable — it reads like today's
  payloads; streaming identical to SSR; tier-2 pruning composes naturally
  (drop props/scopes, keep keys).
- Cons: structural props (`_: _(1)` owner refs, branch arrays) re-ship each
  navigation (~90 B raw here, mostly gzip-collapsed); ids cost ~1–2 B/scope.

### A2 — nested positional structure

One array per section in compile order; no scope ids; pairing implicit in
position + inline keys.

```js
M._.u.push([
  "Nv9Xq",
  [
    "Summit 65L Pack",
    "/products/summit-65/specs",
    !1,
    ,
    [1], // conditional outcome
    [
      [12, ["Hip Belt", ["39.00"]]],
      [21, ["Ice Axe Loop", ["11.50"]]],
      [13, ["Dry Sack", ["14.25"]]],
    ],
  ],
]);
```

- Pros: smallest naive payload; the merge consumes it in one pass.
- Cons: **breaks `_(id)`** — values that reference scopes (branch arrays,
  scope-bound registered factories, hoists) need a new path encoding or a
  ban; requires a second serializer grouping mode (`writeScopesRoot` sibling)
  with its own dedup/cycle handling at every nesting level; async subtrees
  need gate anchors, reintroducing ids anyway; absent values need positional
  holes (`,,`) and unchanged-value skipping needs sentinels; positional
  payloads are much harder to eyeball in a bug report. The measured win over
  A1 is ~50 B gzip — and pruned A1 (164 B) already lands within 5 B of it.

### A3 — value-only fills + merge-order structure stream

Fills carry only values; a parallel compact stream (`["Nv9Xq", 1, ["b",1],
["k",[12,2,5],…]]`) carries pairing in merge order.

- Pros: keeps the serializer for values; ~20 B gzip under A1.
- Cons: two encodings of the same structure that must agree (a class of
  desync bugs A1 cannot have); the server must sort emissions into
  client-merge order per frame — new writer machinery; savings are marginal
  after gzip and vanish under pruning.

**Verdict: A1.** The 25–50 B gzip a navigation could save with A2/A3 does not
buy back a second serializer mode, a broken reference model, or a
desync-prone dual encoding. Pruning (tier 2) closes most of the gap inside
A1's shape. Revisit only if fixture-scale measurements show structural props
dominating real payloads.

---

## B. Persisted entry proposals

All three were written out in full against the compiled accessors (both
templates), minified, and measured:

| variant                          | min   | min+gzip |
| -------------------------------- | ----- | -------- |
| B1 — opcode tables + interpreter | 546 B | 289 B    |
| B2 — compiled merge functions    | 850 B | 376 B    |
| B3 — per-section fns + effects   | 779 B | 350 B    |

(Debug-length ids/accessors inflate all three roughly equally; relative
sizes are the signal. Each variant also relies on a shared runtime in
`@marko/runtime-tags/dom/update` — largest for B1, smallest for B2.)

### B1 — opcode tables (data over code)

```js
import { _update_tables } from "@marko/runtime-tags/dom/update";
import { $input_product_featured } from "./product.marko";

_update_tables(".spsu/product.marko#u", {
  0: {
    "#text/0": "t", // text placement
    "#a/1": ["a", "href"], // attr placement
    input_product_featured: ["s", $input_product_featured], // slot + trigger
    input_product_sale_percent: "v", // slot only
    "#text/5": ["b", 1], // conditional: pair/swap via table 1
    "#ul/6": ["k", 2, "<li> <!></li>", " D%l b"], // keyed loop: table 2 + body clone
  },
  1: { "#text/0": "t" },
  2: { "#text/1": "t", "#childScope/0": ["c", ".spsu/tags/price-tag.marko#u"] },
});
```

- Pros: smallest per-template artifact (the recurring cost across an app);
  tables are introspectable (tooling, diagnostics, potential reuse for a
  partial-hydration split); adding a capability = new opcode, not new
  codegen in every template.
- Cons: a shared interpreter (~1–2 kB, one-time) executes every prop —
  indirection in stack traces; the opcode vocabulary is a mini-ABI that must
  be versioned with the runtime; direct signal references (the `["s", fn]`
  entries) still force imports, so the "pure data" story is only partial.

### B2 — compiled merge functions (code over data)

```js
const $for_content__update = (patch, live) => {
  _place_text(patch, live, "#text/1");
  if ("#childScope/0" in patch) _priceTag_update(patch["#childScope/0"], live["#childScope/0"]);
};
export const $update = _register_update(".spsu/product.marko#u", (patch, live) => {
  _place_text(patch, live, "#text/0");
  _place_attr(patch, live, "#a/1", "href");
  if ("input_product_featured" in patch) $input_product_featured(live, patch.input_product_featured);
  ...
  _pair_branch(patch, live, "#text/5", [$if_content__update]);
  _pair_keyed(patch, live, "#ul/6", $for_content__update, "<li> <!></li>", " D%l b");
});
```

- Pros: matches how the runtime is built everywhere else (compiled behavior,
  no interpreters); debuggable (a breakpoint in `$for_content__update` means
  something); minifier/tree-shaker operate at full strength; no opcode ABI.
- Cons: ~30% larger gzip per template — a recurring cost that scales with
  app size while B1's interpreter cost is constant; codegen surface is
  larger (every prop kind is a translate case emitting statements rather
  than a table entry).

### B3 — per-section registration, server-driven entry (effects as the driver)

Sections register `(patch, live) => …` under per-section ids with a _pairing
path_ from their owner; the **server** emits one effect per serialized
section instance (`"Nv9Xq 1 Nv9Xq/2 2 3 4 Pt3aa 5 6 7"` — 35 B raw / gzip-
friendly for this navigation). No client recursion driver at all: each frame's
effects say exactly which merges to run, which makes multi-frame/async
streaming trivial (a late frame's effects re-enter wherever data arrived) and
makes out-of-order arrival safe (a child merge lazily resolves its owner
pairing up the chain).

- Pros: zero recursion/driver state across frames — the payload drives
  everything, exactly like `_script` effects today; sections absent from a
  frame cost nothing client-side.
- Cons: per-instance effect bytes scale with loop size (a 1000-item loop ≈
  4 kB pre-gzip of effect ids per navigation, vs zero under table/function
  recursion); pairing paths duplicate structure the owner's props already
  express.

### Synthesis (recommended): B1 tables, B3 entry points

The variants differ on two independent axes — _how a section's props are
described_ (table vs code) and _who drives descent_ (client recursion vs
server effects). The measured sweet spot combines them:

- **Within a template**: table-driven recursion (B1) for control flow — loops
  and conditionals descend via the owner's `k`/`b` entries, so effect bytes
  do not scale with item count.
- **Between templates and between frames**: B3-style entry effects — one
  effect per template-root patch scope per frame (`"<updateId> <patchScopeId>"`),
  which is also the natural anchor for async frames and for dynamic-tag
  boundaries (registry lookup instead of import).
- Direct signal references stay in the tables (`["s", $input_product_featured]`)
  so slot writes reuse existing dirty-checking `_const`/`_or` machinery, and
  `MARKO_DEBUG` builds wrap the interpreter with pairing assertions
  (template/section id echo from finding 2's debug serialization).

Estimated costs on the example: entry ≈ B1's 289 B gzip; per-navigation
effect overhead ≈ 10–35 B; shared interpreter runtime ≈ 1–2 kB one-time,
lazy.

### The loop-body axis (cuts across all B variants)

Fresh loop items / flipped branches need their DOM built client-side. Two
strategies, chosen per section by the compiler:

1. **Clone + merge** (placement-only, shown above): the persisted entry
   carries the section's `template`/`walks` strings (compiler-split into a
   tiny shared module so the DOM output and persisted entry don't duplicate
   them); fresh branches clone, walk-bind, then merge patch values. No
   expressions ship; per-new-item wire = its hole values.
2. **Reconcile-by-input**: drive the existing `$input_related → _for_of`
   chain with the new collection; the existing keyed reconciler + body render
   code build items. Requires the body's render expressions to be shippable
   and shipped — right when the body is interactive anyway (its module is
   already loaded) and its expressions are pure; wrong when the body has
   server-only compute.

Default: clone + merge (consistent with placement-only); the compiler may
pick reconcile-by-input when the body's chain is already client-resident.

---

## Open questions for review

- **Opcode vocabulary scope** (B1): text, attr(+name), slot, slot+trigger,
  branch, keyed loop, child scope, hoist/getter, tag-variable… what else is
  load-bearing enough to freeze into the ABI v1?
- **`template`/`walks` splitting**: worth a shared module per template, or
  should persisted entries duplicate the (usually short) body strings for
  fresh-branch cloning?
- **Effect ordering**: entry effects are emitted in server completion order;
  child-before-owner arrival is handled by lazy owner resolution — confirm no
  case needs stronger ordering (suspected fine given fills always precede the
  effects that reference them within a frame).
- **The guard-split lattice** (finding 2): confirm `2`-bit reason merging
  composes through `addOwnerSerializeReason`/`mergeSerializeReasons` without
  widening every reason type in the translator.
- **Fill-format extension**: `"D:#text/5": 1` (conditional outcome) rides an
  existing prefix; loop pairing rides `BranchScopes` arrays — verify no
  resume-path consumer misreads these on the _initial_ render when the same
  props serialize for the spine.
