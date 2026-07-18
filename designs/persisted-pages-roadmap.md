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
  resume markers that cannot be patched and cannot anchor a fragment. Hole-dense
  templates must be included in the budget.
- **Async fragment matrix:** cover nested pending `<await>`/`<try>`, abort between
  frames, rejection, lazy resolution before and after its frame, and catch-only
  boundaries. Unsupported shapes must fail compilation or fall back clearly.

## Validated

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
- **Race fallback:** stale boundary bodies and other genuine live-state races
  take the document-fallback path in optimized builds
  (`persisted-update-stale-boundary-body`; frame and application errors reach
  the transport through the `patch(fail?)` sink).
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
- Fragment async bodies currently require a usable placeholder boundary for
  progressive delivery. This feature does not introduce a new placeholder
  lifecycle API.

## Deferred until after the gates

Prefetching, view transitions, application-level optimistic transitions,
offline caching, and public protocol customization may be explored later. They
must not increase initial cost or complicate the core compiler/runtime contract
before it is proven.
