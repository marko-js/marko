# Persisted pages: release blockers and known limitations

This list is intentionally narrow. It records work needed to validate the
current design; speculative language features and unrelated framework cleanup do
not belong on the persisted-pages critical path. Blockers that have since been
validated are recorded under "Validated" so their evidence stays discoverable.

## Release blockers

- **First-load budgets:** the budget is ratcheted, not fixed. The ecommerce
  application's `validate:sizes` gate currently holds the persisted item route
  at about 26.8 kB raw / 11.8 kB gzip versus 10.0 / 5.0 non-persisted (see the
  cost model's dated first-load evidence). Narrow the shared runtime boundary,
  add a graph assertion that page entries cannot reach `marko/dom-persisted`,
  then establish and ratchet the full matrix in the cost model.
- **Initial spine pruning:** use compiler reachability to suppress persisted
  resume markers that cannot be patched. Hole-dense templates must be
  included in the budget.
- **Async boundary matrix:** cover nested pending `<await>`/`<try>`, abort between
  frames, rejection, lazy resolution before and after its frame, and catch-only
  boundaries. Unsupported shapes must fail compilation or fall back clearly.
- **Sparse spread protocol:** request-derived spreads (including mixed
  client-state/request spreads and controllables supplied through spreads)
  currently fail compilation. Real component APIs pass request data through
  spreads, so this is a ship blocker, not a documented limitation: design a
  sparse spread protocol (server-emitted per-key presence, client-owned keys
  untouched, the controllable change gate applied per captured key) and keep
  the compile error only for shapes the protocol cannot prove.

## Validated

- **Construction everywhere (one delivery tier):** every section constructs
  from its wire shell — dynamic hops (including escaped and lazily loaded
  targets), `<if>` branches, keyed and stable loops, contentless native
  rebuilds, statically inlined child templates (composed into parent shells
  through the server registry), `<try>`/`<await>` boundaries (pending
  placeholders build client-side from their registered content renderers and
  settle frames swap the completed body in), and load-tag children (DOM from
  the child's root shell; behavior at ready). Constructed branches adopt
  their patch scopes (one scope-identity rule, as document resume binds
  scopes), so fills, closures, and effects need no transfer step. The
  replacement capture path, the possession token codec, the route
  descriptor, and the `x-marko-have` exchange are deleted; the wire is
  fills, shells, effects, and ready batches only.
- **Controllable inputs (spreads excluded):** captured
  `value`/`checked`/`checkedValue`/`open` values assert only in frames where
  the capture changed versus what a patch previously asserted, so user edits
  survive re-dispatched frames and unchanged navigations while a changed
  server value wins the live control (`persisted-update-controllable-frames`,
  `-controllable-resubmit`, `-checked-groups`, `-select-resync`, and the
  controlled-`<select>` re-selection after option values change). Controllables
  supplied through spreads remain a compile error under persisted builds.
- **Compiler coverage:** focused persisted fixtures provide evidence for
  attribute tags, hoisted references, text-only nodes, an
  `<if>`/`<else-if>`/`<else>` chain, and representative native, dynamic, and
  custom content (`persisted-update-optimized-coverage`). Its optimized DOM
  audit excludes the server-only `getTitle`/`server title` sentinels while
  navigations exercise each branch. Request-derived spreads without a sparse
  protocol remain unsupported; static/analyzable spreads, client-state-only
  spreads, and the existing controllable/event paths remain available.
- **Race fallback:** frames are idempotent (a replayed settle frame no-ops;
  `persisted-update-replayed-settle-frame`), and genuine live-state failures
  reach the transport through the `patch(fail?)` sink for the
  document-fallback path.
- **Navigation semantics:** focus, scroll restoration, hash navigation, and
  history traversal completed browser-parity review and behave like document
  navigations; per-route title/head metadata (`<title>`, `<meta>`, `<link>`
  attributes) follows patches, including cross-route
  (`persisted-update-title`). Downloads, multipart forms, redirects, and
  concurrent submissions ride the transport's document semantics with the
  full-document fallback (architecture, "Forms, history, and fallback").
- **Security review:** the serializer-frame trust boundary is documented
  (wire-format, "Trust boundary"), the nonce CSP path is validated in
  production, incorrect MIME/origin/build/route data is rejected (the
  `content-type` check plus the echoed `x-marko-build` header), and every
  custom update response stays `no-store`.

## Known narrow gaps

- A guarded request-derived member of an `_or` join may not signal during a
  fresh branch when all non-global members are skipped by the update gate.
- Controllable values mixing client state with request data ride the same
  capture and change gate (the per-accessor record keeps a re-dispatched frame
  from clobbering a client re-render), but no dedicated fixture pins the mixed
  shape yet.
- Native dynamic branches use generic scope descent when no compiled renderer
  merge exists. The lazy-module queue distinguishes a not-yet-registered merge;
  more mixed native/component coverage is required before treating that
  distinction as a permanent invariant.
- Async catch delivery during a patch stays reorder-based, so an `<await>`
  rejection aborts the patch into the document fallback rather than shipping
  a catch branch frame.

## Resolved correctness sweep (2026-07-21)

Same-route hops on pages with settled async boundaries exposed a family of
"persisted documents elide resume linkage that update dispatch needs"; all
of it is now fixed and pinned by `persisted-update-matched-static-await`
plus the e-commerce `item-hop-validate` browser leg:

- Values-free settled `<await>` bodies now always resume-mark, so
  resumed pages pair their boundaries.
- The writer owns one invariant (`forcesLink` in `html/writer.ts`): a
  persisted render always serializes branch linkage and resume markers for
  any section updates can pair into — those carrying a construct anchor
  id — so `<for>`, `<if>`, and `<await>` documents all resume-link
  uniformly with no per-tag translator special cases.
- Resume effect entries whose registry id is not yet registered park on
  the render (`RenderData.pe`) and retry on later effect passes — the
  persisted entry's registrations land when it lazy-loads and the nav
  entry's ready call drains them; documents no longer need every
  update-registered id in the eagerly-loaded bundle.
- `_update_branch`/`_update_for` fail into document navigation instead of
  throwing when an anchor is genuinely absent (deploy-skew safety).
- The mutation Set-Cookie loss was downstream of the apply crash (the
  fallback reload raced the session commit) and no longer reproduces:
  8/8 browser runs keep the session with the apply fixed.

## Deferred until after the gates

Prefetching, view transitions, application-level optimistic transitions,
offline caching, and public protocol customization may be explored later. They
must not increase initial cost or complicate the core compiler/runtime contract
before it is proven.
