# Persisted pages: cost model and release gates

Persisted pages are justified only if they preserve Marko's first-load
advantage. Smooth subsequent navigation does not compensate for turning an MPA
into an eagerly shipped SPA.

Earlier prototype measurements covered different modes and benchmark apps that
have since been removed. They are not a baseline for this implementation. New
numbers must be generated from reproducible production builds and reviewed next
to the non-persisted build of the same app.

## Current evidence

On 2026-07-13, production builds of the same `marko-ecommerce` item route
reported 10.0 kB raw / 5.0 kB gzip with `persisted: false` and 21.4 kB raw /
9.9 kB gzip with `persisted: true`. The persisted build keeps the generated
route trie, navigation engine (1.1 kB gzip), update applier (3.1 kB gzip), and
route update modules out of the initial graph. Moving the route trie behind the
first eligible navigation removed 1.4 kB raw / 0.4 kB gzip from every initial
route without adding a sequential load: it fetches in parallel with the
navigation engine. Browser inspection also confirms that server-only divergent
panel markup is absent from all client JavaScript.

That is useful phase-separation evidence, not an acceptable first-load result.
The largest eager regression is the shared Marko resume chunk (about 7.5 kB gzip in
the persisted build versus 4.1 kB in the ordinary build): update-only consumers
of the published multi-entry runtime cause additional shared symbols to be
retained in the eager chunk. Release remains blocked until the shared runtime
boundary is narrowed and representative budgets show minor, ratcheted overhead.

## Required comparisons

Every measurement records `persisted: false` and `persisted: true` for identical
source and routes:

- compressed initial document bytes, including resume markers;
- compressed eager JavaScript and the initial module graph;
- compressed first-navigation lazy JavaScript, separated into router, update
  runtime, route merge code, and app code;
- total JavaScript across several routes, to catch accidental retention of
  server render graphs;
- compressed update bytes versus the equivalent document;
- parse/apply time and allocations per streamed frame;
- server render time and time to first useful frame.

The matrix needs at least a static page, a small interactive page, a
request-hole-dense page, a keyed/reordered list, a streamed async route, and a
cross-route structural swap. Synthetic scale cases are useful only after the
focused cases identify what a byte belongs to.

## Hard gates

1. **Zero opt-out cost.** Non-persisted compiler output, server HTML, and client
   bundle snapshots remain unchanged. No persisted virtual entry is reachable.
2. **Phase separation.** The initial persisted page graph excludes
   `marko/dom-persisted`, compiled update merges, and alternate-route modules.
   No user expression, import, module statement, or renderer that an ordinary
   optimized DOM build tree-shakes may reappear in any persisted DOM or update
   chunk; its result must arrive only as a patch value or resumable fragment.
   Tests inspect the graph and explicit user-code sentinels, not only minified
   size.
3. **Serialization discipline.** A fixture proves each excluded class:
   client state, resume-only wiring, client-derived values, and unchanged sparse
   keys. Structural fragments contain only the newly appearing branch.
4. **Server isolation.** A page importing a deliberately large server-only
   dependency does not add it to any browser navigation chunk.
5. **Streaming behavior.** The first complete frame applies before a delayed
   frame resolves, without flushing effects or reorder work across frame or
   navigation boundaries.
6. **Progressive behavior.** The same link and form matrix succeeds with
   JavaScript disabled and after forced protocol fallback.
7. **A reviewed first-load budget.** Before release, representative applications
   establish and ratchet explicit gzip and execution budgets. A change that
   exceeds a ratchet needs attribution and approval, not a regenerated snapshot.

## Interpreting costs

Initial document spine is the feature's unavoidable pressure point: more live
structure must be addressable even when its current values are omitted. Compiler
work should first suppress markers for structure that can neither receive a
patch nor anchor a divergent fragment.

Initial JavaScript should contain only resume plus the small navigation shell.
The navigation engine and update applier are paid on first enhanced navigation.
Route update modules should be lazy per target, and server-rendered fragments
should prevent the client graph from growing with alternative page construction
paths.

Update payload size is secondary to correctness but should normally beat a
document because matched markup, client-owned state, and client-derived values
are absent. A fragment-heavy transition can approach HTML-over-the-wire size;
that is preferable to shipping its construction code on first load.

Snapshots are regression evidence, not a performance argument by themselves.
Reports must attribute changed bytes to named modules or marker classes so the
review can distinguish protocol necessity from accidental retention.
