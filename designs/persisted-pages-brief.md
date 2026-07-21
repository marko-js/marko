# Persisted pages: product brief

Persisted pages let an opt-in Marko application keep its live document during
navigation while the server remains responsible for routing, data access, and
rendering. Ordinary anchors and forms are the API. Without JavaScript, or when
an update cannot be proven safe, the browser performs the same request as an
ordinary multi-page application.

## Why this belongs in Marko

Marko already has the pieces a server-first navigation needs: compile-time
ownership analysis, streaming HTML, resumable scopes, stable renderer identity,
fine-grained signals, and keyed reordering. Persisted pages extend those pieces
instead of adding a second client renderer or application data protocol.

The intended result is SPA-like continuity with MPA-like architecture:

- request handlers and templates remain the source of truth;
- server-only imports and computations do not enter browser chunks;
- local state, focus, and user-edited controls survive matched navigation;
- changed server values update at signal granularity;
- new structure is constructed client-side from compile-time templates, or
  arrives as server-rendered, resumable HTML where construction cannot apply;
- async work can continue streaming after the first update frame;
- failure degrades to a document navigation, not a broken intermediate mode.

## User-facing model

Applications enable one build-wide `persisted: true` option. `@marko/run`
then generates the route table and navigation adapter. Eligible same-origin
links, GET forms, POST forms, redirects, and history traversal are enhanced;
their underlying web behavior remains intact.

A navigation is conceptually new server input applied to the current page.
Compiler-owned request values may change. Client-owned state is preserved.
When the target and current render trees share identity, a sparse value patch
drives the existing signal graph. At a divergent dynamic branch, the client
constructs the new branch from a values-free compile-time template shipped
with the patch, filling it from the same sparse values; branches that cannot
be constructed (those wrapping async boundaries or child templates) arrive as
server-rendered resumable HTML swapped at the known Marko boundary.

## Product constraints

These are requirements, not follow-up optimizations:

1. A build without `persisted: true` has no output or runtime cost.
2. Initial persisted-page JavaScript excludes the update applier, route merge
   programs, and code used only to render new structure.
3. Values are serialized only when the client cannot preserve or derive them.
4. Persisted compilation never revives user code that an ordinary optimized DOM
   build removes. Server-only expressions stay on the server; only their patch
   values or values-free construction templates cross
   the wire.
5. The protocol composes with serializer values, streamed async boundaries,
   keyed reorder, lazy modules, and compiled signals.
6. Links and forms remain valid HTML interactions and server responses remain
   valid documents when patch negotiation is absent.
7. No server session is required to calculate a patch.

## Non-goals

- Replacing Marko's document renderer with a client renderer.
- Shipping a generic JSON data layer or asking applications to duplicate one.
- Offline-first navigation.
- Preserving state across structurally unrelated routes without an explicit
  shared Marko boundary.
- Guessing identity by morphing arbitrary DOM.
- Introducing new async placeholder or optimistic-transition language APIs as
  part of this feature.

## Status

The implementation demonstrates the core path and has dedicated compiler,
runtime, router, and browser fixtures. It remains experimental. Release depends
on proving first-load cost, closing the cases listed in
`persisted-pages-roadmap.md`, and keeping the invariants in
`persisted-pages-cost-model.md` continuously measured.
