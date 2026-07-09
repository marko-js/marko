import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

// Async correctness audit, item 3 (designs/persisted-pages-roadmap.md
// "Correctness" -- the navigate-while-pending watch-list item, now
// resolved). Two defects, one per direction, when a persisted navigation
// applies while the live page's initial `<try>` placeholder is still
// showing (its resolved body's HTML chunk was generated server-side but not
// yet flushed into the browser -- no live branch is ever bound for it):
//
// 1. The navigation's own update render re-runs the same `<await>`
//    (matched accessor) with new input and resolves normally server-side.
//    Because the placeholder never dismissed client-side, `_update_branch`
//    (dom/update.ts) has no live branch to merge fills into for it -- so
//    instead of dispatching ordinary fills, the server delivers the
//    resolved body as markup (a boundary-body entry, keyed off the
//    pending-boundary possession echo) through the same two-frame apply
//    path (`applyBoundaryBody`) fragments already use for their own
//    pending boundary bodies. See `_have`/`_try` in dom/update.ts and
//    html/writer.ts, and the "Correctness" section of
//    designs/persisted-pages-roadmap.md.
// 2. The pre-navigation page's own document response is still trickling in
//    independently of the navigation (a real document is never unloaded by
//    a persisted navigation -- see "SPA-like continuity" in
//    designs/persisted-pages-architecture.md): once ITS buffered reorder
//    chunk is finally flushed into the browser (modeling slow network
//    delivery of the tail of the original response), its resume script
//    used to run against the marker comments still sitting where the
//    placeholder was with no notion of the persisted patch that had since
//    applied over it, inserting PRE-NAVIGATION data into the POST-
//    navigation page. The inline reorder runtime (`html/inlined-runtimes`)
//    captures a navigation epoch at its own (per-render) init and no-ops
//    its placeholder *swap* once a persisted apply has bumped that epoch
//    (`dom/resume`'s `bumpNavEpoch`, called from `dom/update`'s
//    `createUpdate` before any frame applies) -- confirmed below: the late
//    chunk's content lands inside its own still-hidden `<t>` wrapper
//    (`t > p::text("pre-nav-data")`) instead of being spliced into the live
//    `<section>`, so no `pre-nav-data` ever appears in the rendered page.
//    The reorder runtime's placeholder-teardown bookkeeping (clearing the
//    old "loading…" text) is unconditional and unrelated to this gate, so
//    it still runs -- leaving `<section />` empty momentarily before item
//    1's boundary-body apply fills it with the correct post-navigation
//    data.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  // The scenario is inherently about the SSR streaming/reorder machinery
  // racing a persisted patch; there is no equivalent CSR concept (a CSR
  // await is a real, per-navigation JS promise with its own supersede
  // guard -- see control-flow.ts's `thisPromise === scope[promiseAccessor]`
  // -- so it is unaffected by this document-level race).
  skip_csr: true,
  steps: [
    {
      title: "First",
      data: "pre-nav-data",
      tick: 5,
      $global: { persisted: true },
    },
    // Deliberately do NOT flush: the placeholder stays shown, so no live
    // branch is ever bound for the resolved (but already server-computed)
    // await body -- the client echoes this boundary as still pending on
    // the next navigate.
    navigate({
      title: "Second",
      data: "post-nav-data",
      tick: 6,
      $global: { persisted: true },
    }),
    // Only now let the original (pre-navigation) response's buffered
    // reorder chunk land -- after the navigation has already applied.
    flush,
  ],
};
