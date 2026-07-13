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
identity agree. Otherwise it returns a mismatch response and the client performs
the original navigation. Patch responses use
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
entry when the body resolves. Existing `<try>` behavior remains the error
boundary; persisted pages do not add a new pending-state API.

Reorder chunks carry a navigation epoch. Chunks from an aborted or superseded
navigation are ignored. Fragment walking understands the same compressed marker
continuations as document resume.

Lazy children keep their normal ready gate. Resume batches and dynamic merges
that arrive before the lazy module are parked by key; module readiness flushes
them inside an update batch, then runs the normal scheduler. The initial page
does not eagerly load those modules because persisted navigation exists.

## Forms, history, and fallback

GET forms serialize into the target URL. POST forms use the browser-compatible
body and redirect flow; a redirect is rematched before an update is accepted.
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
- Compiler analysis, not runtime inspection, selects serialized values.
- Client-owned values are never overwritten by an update render.
- New structure is rendered on the server and arrives resumable.
- Id allocation is deterministic across HTML, DOM, update, and persisted entry
  compiles, including parallel builds.
- A frame settles through the ordinary Marko scheduler before the next frame.
- Async and reorder output cannot cross a navigation epoch.
- Update responses are non-cacheable and bound to a route/build match.
- Every uncertain case has a full-document fallback.
