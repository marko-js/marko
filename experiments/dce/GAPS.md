# Pruning gaps: where Marko ships/serializes more than it needs (ESM)

These are concrete, reproduced cases where user code (not just runtime) is
included on the client or serialized into the HTML when it can never be used
there. Repros are in this folder; measured with the rolldown harness
(`optimize: true`). Run e.g. `node -r ~ts experiments/dce/probe.ts ./TrySync.marko`.

## Gap 1 (= the maintainer's #1 and #3): `<try>` is unconditionally client-resumable

A `<try>` always treats its catch/placeholder as resumable, regardless of whether
the body can ever re-render (and therefore throw / show placeholder) on the
client. This bloats **both** outputs:

- **DOM bundle.** `core/try.ts:197-202` emits `_enable_catch()` unconditionally,
  and the catch/placeholder content sections are emitted with **`_content_resume`**
  (chosen in `visitors/program/dom.ts:119` via `getSectionRegisterReasons`).
  `_content_resume` is _not_ in `pureDOMFunctions` — it self-registers, so it is a
  non-pure top-level anchor that survives whenever the module is retained (e.g.
  for a sibling island).
- **HTML payload.** the catch boundary's resume data is serialized into the page
  (`...{C:"a",E:_(1,"K9ueTr5")}...`), id-matching the catch content.

### Reproduction (`TrySync.marko` — sync error boundary, static body, sibling button)

```marko
<try>
  <div>Static content that cannot throw on the client.</div>
  <@catch|err|><div class="error">Error boundary: ${err.message}</div></@catch>
</try>
<let/n=0/>
<button onClick() { n++ }>${n}</button>
```

| Variant                                     | DOM brotli | catch/placeholder shipped? |
| ------------------------------------------- | ---------: | -------------------------- |
| `TryNoIsland` (no sibling island)           |          0 | no — whole page eliminated |
| `TrySync` (static body + island)            |      3,206 | **yes (dead)**             |
| `TryConst` (`await resolveAfter(42)`)       |      3,235 | **yes (dead)**             |
| `TryStatic` (`await resolveAfter(input.x)`) |      3,255 | **yes (dead on a root)**   |
| `TryReactive` (`await resolveAfter(n)`)     |      4,072 | yes (legitimately needed)  |

The button baseline is ~1,700 b, so the try ships ~1,500 b of dead code in the
static cases. The catch can only fire on the client if the body re-renders on the
client (sync) or an async boundary resolves/rejects on the client (streaming).
For a **client-static body** none of that can happen.

### Proposed fix

Gate the try's client-resumability on the body section being client-reachable:

- if the try body section never updates on the client (no client signals/effects,
  not reached by client-mutable state) and is **sync** (no `<await>`), then:
  - skip `_enable_catch()`,
  - emit the catch/placeholder content as pure `_content` (or drop them), and
  - drop the catch/placeholder resume serialization.
- the async case stays conservative (a streamed boundary can still be pending /
  reject after hydration), unless the awaited expression and body are provably
  client-static too — a follow-up.

This is a per-section client-reachability check, the same analysis that already
prunes server-only `${input.*}` bindings; it just needs to also gate the try's
catch/placeholder registration + serialization.

## Gap 2 (the maintainer's #2): body content registered when not needed

Plain static body content passed to a component is already pruned
(`BodyContent.marko` → 1,704 b, only the island). The cases that leak are body
content fed to a **resumable construct** — the `@catch`/`@placeholder` of `<try>`
are exactly attribute-tag body content, so Gap 1 _is_ an instance of this. The
general rule: content attached to a section that is registered for resume inherits
that registration even when the content itself is client-static.

## Non-gap: server-only dependency residue is dependency hygiene

`serverdep.ts` (a server-only `heavy-lib` used in a static `<const>`) leaks ~138 b
— but tracing the bundle shows Marko fully prunes its own code (the child
template, `$setup`, `renderMarkdown`, the import binding). The residue is only
heavy-lib's own top-level `new Array(500).fill(0).map(...)` expression, kept
because the dep is not `sideEffects: false` and the `.map()` isn't provably pure.
"Pruning non-interactive templates from the root" does not help here because the
templates are _already_ pruned; the fix is dependency hygiene (or the bundler
plugin treating `.marko`-originated server-only imports as side-effect-free).

## Priority

Gap 1 is the clear win: it is real user-code/payload bloat, reproduces in the
common "static error boundary or static async section next to an island" shape,
and a single per-section client-reachability gate fixes both the DOM and HTML
sides. It needs care around async/streaming resume (keep that path conservative).

## Implementation plan (Gap 1)

Maintainer rule: _prune the placeholder when all `<await>` tags under a section
are server-only_ (extended here to catch + `_enable_catch` + serialization).

The existing signal for "this boundary resumes on the client" is the **try body
section's `serializeReason`** — already consulted by `<await>` via
`getSerializeGuard(section, bodySection?.serializeReason, true)`
(`core/await.ts`). An `<await>` is _server-only_ exactly when its body section is
not serialized, i.e. its value expression carries no client-reactive sources
(the same analysis that prunes server-only `${input.*}`). For a try, "all awaits
under the section are server-only" ⇒ the try body section has no client resume
reason.

Wiring (all gated on the try body section being client-unreachable):

1. `core/try.ts:197-202` — only emit `_enable_catch()` when the body can be
   pending/catch on the client.
2. `core/try.ts` (dom exit) / `visitors/program/dom.ts:119` — emit the
   catch/placeholder content as pure `_content` (so it tree-shakes) instead of
   `_content_resume`; or omit the props entirely.
3. HTML side (`core/try.ts` html exit + `signals.ts` `underTryPlaceholder`,
   `getResumeRegisterId(..., "pending")`) — skip the catch/placeholder resume
   serialization and the pending-effect registration for closures under a
   client-static placeholder.

Keep async conservative by definition: the moment any `<await>` under the section
is client-reactive, the body section gets a serialize reason and all three gates
fall back to today's behavior.

Validation: the 748-fixture suite has render + resume + serialize snapshots
(many `try*`/`await*`/`async*`). Run `npm test -- --grep "runtime-tags.*try"`
and the `await`/`async` subsets; expect smaller `dom.bundle.js` + `sizes.json` +
serialized-HTML snapshots for the client-static cases and **no change** for the
reactive ones. Then a broad run before landing.

### Prototype result (validated, then reverted) — the predicate must be stricter

A first prototype gated only `_enable_catch()` on
`bodySection.serializeReason || bodySection.serializeReasons.size`
(the try body section). Measured win on the client-static repros:

| fixture                 |        before | after `_enable_catch` gate |
| ----------------------- | ------------: | -------------------------: |
| TrySync                 |         3,206 |           **2,363** (−26%) |
| TryConst                |         3,235 |                  **2,383** |
| TryStatic / TryReactive | 3,255 / 4,072 |        unchanged (correct) |

But the full suite caught a real regression in
`async-reject-then-resolve-before-and-after-isolated-boundaries`: `_enable_catch`
was dropped from a template whose awaits are all server-only (constant args) yet
which (a) streams a **rejection** the client must handle and (b) has an
interactive `<button>` whose `_script` lives in the **`<await>` body section** — a
_descendant_ of the try body section. So the predicate was wrong on two counts:

1. **Descendants matter.** The try body section's `serializeReason` does not
   aggregate its descendant sections (e.g. the `<await>` content where an island
   lives). A correct predicate must consider the whole subtree.
2. **Server-only async still resumes via streaming.** Even an await with no
   client-reactive inputs can be flushed _pending_ and have its resolve/reject
   streamed after hydration, which the client handles through the same
   catch/pending machinery `_enable_catch()` enables. So "all awaits server-only"
   is **not** sufficient to drop `_enable_catch`.

**Refined safe predicate** (for dropping `_enable_catch` + catch/placeholder
resume): the try must be **sync** (no `<await>` anywhere in the subtree) _and_ the
entire try-body subtree must be client-static (no section under it has a client
serialize reason). That cleanly covers `TrySync` (the pure sync error-boundary
case) without touching any async/streaming path. The async cases need the
maintainer's streaming-resume semantics and are left conservative.

The prototype was reverted (no source change is committed); this section records
the validated magnitude and the exact safety constraints so the real fix can skip
the trap.
