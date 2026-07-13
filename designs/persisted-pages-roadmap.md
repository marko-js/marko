# Persisted pages: release blockers and known limitations

This list is intentionally narrow. It records work needed to validate the
current design; speculative language features and unrelated framework cleanup do
not belong on the persisted-pages critical path.

## Release blockers

- **First-load budgets:** the current production comparison is 10.3 kB gzip
  persisted versus 5.0 kB ordinary on the representative item route. Narrow
  the shared runtime boundary, add a graph assertion that page entries cannot
  reach `marko/dom-persisted`, then establish and ratchet the full matrix in the
  cost model.
- **Initial spine pruning:** use compiler reachability to suppress persisted
  resume markers that cannot be patched and cannot anchor a fragment. Hole-dense
  templates must be included in the budget.
- **Controllable inputs:** define and test update semantics for `checkedValue`,
  controllables supplied through spreads, mixed state/`$global` values, and
  `<select>` re-synchronization after option values change. User edits must not
  be overwritten accidentally.
- **Compiler coverage:** audit attribute tags, hoisted references, dynamic
  spreads, text-only elements, and all loop/conditional forms for source
  classification, sparse capture, deterministic ids, and fragment anchors.
- **Pairing integrity:** turn unpairable scopes, duplicate ids, unexpected
  renderers, missing fragments, and stale boundary bodies into explicit protocol
  failures covered by fallback tests in optimized builds.
- **Async fragment matrix:** cover nested pending `<await>`/`<try>`, abort between
  frames, rejection, lazy resolution before and after its frame, and catch-only
  boundaries. Unsupported shapes must fail compilation or fall back clearly.
- **Navigation semantics:** complete accessibility and browser parity review for
  focus, title/head changes, hash navigation, scroll restoration, downloads,
  multipart forms, redirects, history traversal, and concurrent submissions.
- **Security review:** document the serializer-frame trust boundary, verify the
  nonce CSP path in production, reject incorrect MIME/origin/build/route data,
  and retain `no-store` on every custom update response.

## Known narrow gaps

- A guarded request-derived member of an `_or` join may not signal during a
  fresh branch when all non-global members are skipped by the update gate.
- Native dynamic branches use generic scope descent when no compiled renderer
  merge exists. The lazy-module queue distinguishes a not-yet-registered merge;
  more mixed native/component coverage is required before treating that
  distinction as a permanent invariant.
- Positional possession through changing loop order needs an explicit identity
  rule. Keyed identity is the supported preservation mechanism; uncertain
  positional cases should fall back.
- Fragment async bodies currently require a usable placeholder boundary for
  progressive delivery. This feature does not introduce a new placeholder
  lifecycle API.

## Deferred until after the gates

Prefetching, view transitions, application-level optimistic transitions,
offline caching, and public protocol customization may be explored later. They
must not increase initial cost or complicate the core compiler/runtime contract
before it is proven.
