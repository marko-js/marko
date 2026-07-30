# Persisted pages: the shell wire format

Status: **design, not implemented.** Everything below the "What is already true"
section is unbuilt. This note exists because the shell encoding is a wire-format
decision that construction, nested anchors and loop iterations all inherit, and
it is cheaper to argue it here than to discover it three slices in.

Terms are [CONTEXT.md](./CONTEXT.md)'s. A _hole_ is a captured value keyed by the
accessor of the node that displays it. A _shell_ is a section's values-free
static structure. An _anchor_ is a place where a later render may substitute
different structure: a dynamic hop, an `<if>` branch, a loop iteration, a
`<try>`/`<await>` body.

## What is already true

Measured, not assumed:

- A hole applies generically. `fixtures/persisted-text-holes` updates a live
  document from a server frame while its optimized DOM bundle contains **no
  template code at all** — the resume comment already told the client which node
  accessor `a` names, so setting text needs none of the template's own code.
- Forcing a node marker inside a child section revives that section's renderer.
  Serializing the child scope emits its `_content_resume` id, so the DOM build
  retains the renderer and with it user expressions — measured as `err.message`
  reappearing for `fixtures/try-single-throw-sync` and `tagA` for
  `dynamic-tag-name`. This is why holes are currently root-section only.
- Forcing a persisted page entry to `init()` pulled in the whole template graph,
  because the entry's `init` branch also imports `./template.marko`. A persisted
  entry now starts the runtime without that import.
- The DOM build already computes a values-free structure per section:
  `$template` plus `$walks` (`translator/util/writer.ts` › `getSectionMeta`).
  This is a shell in all but name, and it is data — no expressions, no
  renderers.
- `@marko/run` now compiles one shell template per layout chain with the page as
  a dispatched slot, so a cross-route navigation has exactly one diverging
  anchor and the layout is the same template instance on both sides.

## The problem the encoding has to solve

A shell is per-section and therefore static. A resume marker is per-instance:
`<!--M_*3 a-->` carries the runtime comment prefix (`$global.runtimeId +
renderId`, known only at render time) and the scope id `3` (allocated in render
order). Neither can be baked into a static string.

Three routes were traced to deliver structure, and all three converge on the
compiler emitting a new per-route artifact:

1. Ship `$template`/`$walks` on the wire — they are built during DOM translate,
   the patch is written during HTML translate.
2. Derive the shell from the HTML output's own static literals — possible, since
   the HTML translate holds them, but it must classify every interpolated
   expression as structure or value, attributes included.
3. Ship shells in a per-route lazy client chunk behind the router — permitted by
   the "no eager mass" rule, but it is still a new artifact and it re-introduces
   a load before a patch can apply.

Route 2 is the one this note proposes, because the registry the goal describes
is explicitly server-side and that is where the HTML translate already lives.

## Proposed encoding

A shell is a string of static HTML in which every instance-specific token is
elided and every value is dropped:

- A reserved sentinel character stands for the comment prefix. The client knows its own prefix and
  substitutes.
- A marker's scope id is omitted. The patch names one **base scope id** for the
  constructed anchor, and the client assigns ids in walk order. This is sound
  because both sides traverse the same static structure in the same order — the
  server allocated ids by that same traversal.
- Values are dropped, not blanked to a sentinel: a hole's node is located by its
  marker, and its value arrives as a fill. A text hole therefore contributes an
  empty text node plus its marker.

A constructed anchor's frame entry is `(anchor accessor, shell id, base scope
id)` followed by the ordinary hole fills. The client compares the shell id
against what it holds at that anchor: equal means merge values, different means
replace the anchor's range with the shell, run the existing resume walker over
the inserted nodes, then apply the fills. `patch === live` for new structure, so
there is no transfer step and nested anchors construct recursively for free.

## Why this keeps the bundle honest

The shell is data. It contains no user expression, import, module statement or
renderer, so emitting it cannot violate no-revival — which is the whole reason
structure travels as a shell instead of as a retained renderer. The gate stays
the existing one: user-code sentinels over the optimized DOM bundle, run per
fixture, plus the recorded per-fixture bundle delta.

Attributes are the open sub-decision. A text hole is addressable because its
node carries a marker; an attribute has no marker of its own. Either the owning
element gets a marker and the fill names `(accessor, attribute)`, or attribute
values stay unpatchable and any template with a dynamic attribute keeps taking
the document fallback. The demo needs the former: `search/+page.marko` drives
`value=`, `class=` and `name=` from request data.

## Slices, each green on its own

1. **Shell emission.** Accumulate a parallel values-free stream per section
   during persisted HTML translate; emit it as a constant; snapshot it across
   the dynamism corpus. No wire or client change. Gate: no-revival plus
   byte-identical non-persisted output.
2. **Attribute holes.** Marker on the owning element, fill keyed by
   `(accessor, attribute)`. Gate: a fixture whose only dynamism is an
   attribute patches end to end in jsdom.
3. **Anchor identity on the wire.** Ship `(anchor, shell id, base scope id)`;
   the client compares and still refuses on mismatch. Gate: a same-route
   navigation with matching structure patches; a diverging one refuses. This
   replaces the current per-template `hasDivergentStructure()`, which refuses a
   whole render if any template anywhere contains a child section.
4. **Construction.** Range replacement, walk, recursive nesting. Gate: the
   ecommerce demo's `/search → /item/1` keeps the layout and its client state
   while the page slot rebuilds, verified in a browser and not only over HTTP.

Slice 3 is where the coarse refusal finally lifts, and slice 4 is the first one
a user can see. Nothing before slice 4 changes what the demo looks like, which
is worth saying plainly in any progress report.

## Rejected

- **Shipping the diverging slot's rendered markup.** Fast — it is doable inside
  `@marko/run` alone, using Marko's existing embedded-render support, and it
  would preserve the layout and its state. Rejected because it is the
  replacement-HTML tier the invariants forbid: a second delivery path that
  competes with the value protocol, and one that needs the target route's client
  chunk fetched before insertion or the inserted forms are dead.
- **Retaining the page's client renderer so the client can render it.** This is
  a second client renderer and a no-revival violation; it is what the shell
  mechanism exists to avoid.
