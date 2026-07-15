# Persisted pages: architecture

This document describes the reviewable architecture, not the history of the
prototype. The feature has one flag: `persisted: true`. Marko automatically
updates matched structure with sparse values and delivers divergent structure
as resumable HTML.

## Build artifacts

The compiler shares one analyzed template model across four entry kinds:

- normal HTML output renders documents and update responses;
- normal DOM output resumes the initial document;
- `?update` contains compiled section merge functions;
- `?persisted` contains registrations needed while applying navigation data.

Register ids are preallocated during analysis so independently bundled entries
agree without relying on compile order. The build flag is constant: ordinary
builds do not emit persisted guards, virtual entries, route tables, or runtime.

The browser runtime is also phase-partitioned. The ordinary `marko/dom` facade
contains resume behavior. Persisted-only exports live in `marko/dom-persisted`,
whose main applier and fragment walker are navigation dependencies. A page must
not import that module merely because it was compiled by a persisted build.

## Compiler ownership

Serialization is decided from the same binding and section analysis used by
resumability and signals. A small bit lattice tracks why a scope or value is
needed:

- stateful/client-owned data exists so the live page can continue locally;
- request-derived data may change on a server navigation;
- a mixed dependency retains both reasons until the value and structural gates
  are evaluated.

The compiler emits two independent decisions:

1. **Spine:** whether resume markers, scope identity, and child relationships
   must exist so a future patch can address the live page.
2. **Value:** whether the current render must serialize a value.

An initial persisted document may need more spine than an ordinary document,
but it should not serialize request values solely because they can change later.
An update render emits request-derived inputs and captured holes, not
client-owned state, resume-only wiring, or values that a patched input causes an
existing client signal to derive.

Merge programs are emitted per compiler section. They pair a server patch scope
with a live scope and assign only present keys. Assignment uses existing signal
setters and scheduling; it is not a parallel reactive system. Templates with no
applicable values should not retain a bespoke merge graph.

## Document render and handoff

A normal request still produces a complete streaming HTML document. Persisted
documents additionally carry the minimum addressable spine and one internal
build identity used for negotiation. The page resumes through Marko's existing
registry and scope protocol.

`@marko/run` registers a small navigation shell after resume. The generated
matcher contains route indices and lazy loaders, not route pattern strings or
server handlers, and loads alongside the navigation engine on first use. The
shell validates native events; route matching, fetch negotiation, streaming
parsing, and history application load on the first enhanced navigation. Anchor
and form listeners are progressive enhancement:
unsupported targets, modified clicks, downloads, external URLs, and responses
outside the protocol follow browser behavior.

## Navigation negotiation

For an eligible navigation the adapter sends the original request with:

- `Accept: text/marko-patch`;
- the target and current build-stable route indices;
- the current build identity;
- a compact possession echo for dynamic branches the live page holds.

The server accepts patch mode only when its matcher, route index, and build
identity agree. A mismatched read is rejected before any work happens and the
client performs the original navigation; a mismatched mutation always reaches
its handler and renders the ordinary document instead. Patch responses use
`Content-Type: text/javascript` and `Cache-Control: no-store`; they vary by live
page state and must never enter a shared document cache.

The server is stateless. It renders the target route from the request just as it
would render a document, but the writer suppresses ordinary document bytes and
flushes newline-delimited serializer frames. Each frame is applied as an atomic
signal batch. Completed frames can update the page while later async work is
still pending.

Applications do not select document, update, or fragment modes. The generated
router privately records the current and target route identities. A negotiated
request produces a patch; Marko derives from those identities whether the patch
must seed fresh scopes and carry structural fragments. Fragments are patch
contents, not a separately configurable behavior.

The wire format is trusted application output encoded by Marko's serializer,
not user JSON. Run transports and splits the stream but does not interpret it.
Each generated update entry exposes a zero-argument `createPatch()` already
bound to its compiled merge. It executes frames through the same nonce-bearing
script path as document resumes, validates their fills, and applies them. MIME,
same-origin routing, build
identity, and fallback checks are part of the protocol boundary.

## Applying matched structure

`createPatch` owns frame decoding and delegates valid fills to `createUpdate`,
which owns one navigation epoch and patch-scope table. For each frame they:

1. decodes serializer values and extends patch scopes;
2. pairs patch scopes to live scopes top-down using compiled child identity;
3. runs the target route's merge program;
4. flushes Marko's normal queued signals, renders, reorders, and effects;
5. ignores results from a superseded navigation epoch.

Absent keys mean unchanged. This is essential for sparse frames and for
preserving client state. Effects run only after the frame that created or
updated their dependencies is complete.

## Structural divergence

The possession echo identifies the renderer held at each build-stable dynamic
site. When the target renderer differs, the server captures the new branch as a
fragment frame. The frame contains HTML, scope ids, resume data, and the boundary
identity required to replace exactly that branch.

`dom/update-fragment.ts` parses the fragment with a template element, walks
Marko's resume markers, stamps its scopes into the active update context, and
swaps it at the verified boundary. The fragment is immediately resumable; later
value or async frames address the same scopes. This keeps construction on the
server and avoids bundling alternative page renderers into the client.

A missing fragment, renderer mismatch, unpairable scope, or malformed boundary
is a protocol failure. The router abandons the update and loads the target
document. It must not guess from surrounding DOM.

## Streaming, async, reorder, and lazy modules

The update writer reuses the HTML writer's fork and flush order. Pending async
boundaries may therefore produce later frames. A fragment containing a pending
boundary sends its placeholder with the fragment and a separate boundary-body
entry when the body resolves; the shape composes recursively for nested
pending boundaries. Existing `<try>` behavior remains the error boundary;
persisted pages do not add a new pending-state API. An `<await>` that rejects
after a patch response begins streaming aborts the render (async catch
delivery is reorder-based, which patch responses suppress); the client falls
back to the document, whose reorder stream renders the same catch branch.

Reorder completions are epoch-gated client-side: the persisted reorder runtime
captures the render's navigation counter when it installs, and chunks from an
aborted or superseded navigation are ignored. Fragment walking understands the
same compressed marker
continuations as document resume.

Lazy children keep their normal ready gate. Resume batches and dynamic merges
that arrive before the lazy module are parked by key; module readiness flushes
them inside an update batch, then runs the normal scheduler. The initial page
does not eagerly load those modules because persisted navigation exists.

## Forms, history, and fallback

GET forms serialize into the target URL. POST forms use the browser-compatible
body. A direct POST response from the current route is applied as an update
(the validation-error case: the server re-renders the same page and the patch
preserves the user's live form state), while a PRG redirect is rematched and
renegotiated at its final URL before an update is accepted. A mutation is
never rejected before its handler runs; a mismatched mutation renders the
ordinary document and the client falls back.
History state, scroll restoration, cancellation, and popstate are coordinated by
the generated adapter, but correctness never depends on interception. The
fallback uses the intended final URL and request semantics.

Only one update owns the page at a time. Starting a navigation aborts the prior
fetch and advances the epoch. An error before or during apply is terminal for
that update; partially received data is not used as evidence that the remaining
tree is compatible.

## Invariants to defend in review

- Non-persisted output is unchanged.
- Initial page entries do not depend on `marko/dom-persisted`.
- Persisted compilation never revives user code that an ordinary optimized DOM
  build tree-shakes; server-derived results cross the wire only as patch values
  or resumable fragments.
- Compiler analysis, not runtime inspection, selects serialized values.
- Client-owned values are never overwritten by an update render.
- New structure is rendered on the server and arrives resumable.
- Id allocation is deterministic across HTML, DOM, update, and persisted entry
  compiles, including parallel builds.
- A frame settles through the ordinary Marko scheduler before the next frame.
- Async and reorder output cannot cross a navigation epoch.
- Update responses are non-cacheable and bound to a route/build match.
- Every uncertain case has a full-document fallback.

## Invariant traceability

Each invariant above, mapped to the evidence that pins it. Fixture names are
directories under `packages/runtime-tags/src/__tests__/fixtures/`; each
fixture asserts compiled output (html/dom bundle snapshots), streamed
document output, and the frame-by-frame mutation log of applied navigations
in debug and optimized builds.

| Invariant                                                                          | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Non-persisted output unchanged                                                     | The full-suite snapshot corpus (8975 baseline tests) doubles as the regression gate: every phase requires non-persisted `__snapshots__` byte-identical, and ordinary builds take no persisted code paths (`persisted` compile flag constant; runtime guards key off `state.patch`, unset outside patch renders).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Initial page entries do not depend on `marko/dom-persisted`                        | Structurally enforced by the entry split (the applier lives in its own module imported only by `?update` entries) and visible in every persisted fixture's dom bundle snapshot plus per-fixture `sizes.json`, where the page chunk and `update.js` are separate artifacts. The explicit graph-reachability assertion is a release blocker (roadmap, "First-load budgets"); end-to-end evidence lives in the ecommerce example's graph validation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| No revived tree-shaken user code; server results cross only as values or fragments | `dom_bundle_excludes` assertions (main.test.ts) check user-code sentinels against both the optimized dom bundle and the raw compiled `?update` sources: `persisted-slim-main`, `persisted-update-import-collision`, `persisted-update-export-collision`, `persisted-update-fragment`, `persisted-update-optimized-coverage`. The failure half is pinned by `persisted-update-missing-fragment`: with no fragment entry the applier throws rather than constructing divergent content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Compiler analysis selects serialized values                                        | The persisted fixtures' html bundle snapshots pin the emitted serialization guards per binding; `persisted-global-reads` / `persisted-global-reads-opt-out` pin the `$global` read promotion, `persisted-update-server-derived` and `persisted-update-signal-reuse` pin value gating, and `persisted-update-spread*` pin the analyzable-spread boundary (unsupported spreads fail compilation).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Client-owned values never overwritten                                              | The click-counter-survives pattern in nearly every `persisted-update-*` fixture; `persisted-update-csr-race` (a client write lands between frames and the later frame reads it back); `persisted-update-controllable-attrs` and `persisted-update-option-values` (user edits versus controllables); `_update_seed`'s generation gate (seeds apply only to scopes created during the apply).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| New structure server-rendered and resumable                                        | `persisted-update-fragment`, `persisted-update-fresh-page`, the `persisted-update-possession-*` family (hop, native, loop, nested, multiswap, positional), and `persisted-update-fragment-body-scope` (dom-less scope stamping). Interactivity of arrived fragments (effects run, later frames fill them) is asserted by clicks inside every fragment fixture.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Deterministic id allocation                                                        | Analysis-time preallocation with a translate-time tripwire (`preallocate-register-ids.ts`; any drift between the enumerated key set and a requested id is a compile error, exercised by every persisted fixture in both entry kinds); `persisted-update-import-collision` and `persisted-update-export-collision` pin the name-collision regressions; the test bundler's deterministic compile-order plugin (utils/bundle.ts) removes build-order luck from the evidence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| A frame settles before the next frame                                              | `createUpdate` flushes the scheduler (`run()`) inside each frame's apply window; the harness snapshots every intermediate frame (`persisted-update-await`, `persisted-update-fragment-await`, `persisted-update-fragment-nested-await`), and `betweenFrames` fixtures (`persisted-update-csr-race`, `persisted-update-superseded-frame`) interleave client renders between settled frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Async and reorder output cannot cross an epoch                                     | `persisted-update-navigate-pending-await` and `persisted-update-stale-reorder-cleanup` (pre-navigation reorder chunks land inert), `persisted-update-abort-between-frames` (dropped frames never touch the page, follow-up navigations clean), `persisted-update-lazy-double-nav` (parked lazy state is per navigation), `persisted-update-superseded-frame` (a late frame for a client-destroyed subtree skips silently).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Update responses non-cacheable, route/build bound                                  | Enforced in `@marko/run` (`matchesPatchRequest`, `createPatchMismatchResponse`, `applyPersistedResponseHeaders`) and covered by its render/client suites; untested from this repository, which never constructs HTTP responses. The marko-side halves are the negotiation facts riding `render()` options (pinned by every `navigate()` fixture) and the frame-shape validation below.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Every uncertain case falls back                                                    | The pairing-integrity failure matrix, each pinned as a loud apply failure with no committed effects: `persisted-update-missing-fragment` (an `<if>`, dynamic-tag, and fresh keyed item without their fragment entry), `persisted-update-stable-count` (stable loop count change), `persisted-update-stale-boundary-body` (boundary body for a settled boundary), `persisted-update-corrupt-fills` (a frame with no usable fills). Server-side aborts feed the same fallback: `persisted-update-fragment-bare-await`, `persisted-update-fragment-two-awaits`, `persisted-update-fragment-catch-only`, `persisted-update-possession-multiswap-async`, and rejection during a patch (`persisted-update-reject`, `persisted-update-catch-only-patch`). Defined non-failures are pinned too: duplicate and unknown scope ids (`persisted-update-corrupt-fills`), corrupted scope-id lists (`persisted-update-corrupt-scope-list`, degraded not loud; see `agent-feedback/bugs.md`), and the lost-echo path, where fragments for held keys swap in place instead of failing (`persisted-update-matched-key-fragment`). The router-side half (a throw becomes a document navigation without committing history) lives in `@marko/run`'s client suite. |
