import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

// The inline persisted reorder runtime's nav-epoch gate must drop a stale
// reorder completion WHOLE, not just its final swap. Setup: the initial
// document's `<await>` resolves server-side but its reorder chunk is not
// flushed (the placeholder stays showing), then a persisted navigation
// applies -- aborted after frame 1, before its boundary-body frame, so the
// placeholder and its reorder markers survive the apply untouched. When the
// pre-navigation response's buffered reorder chunk finally lands, the
// runtime's placeholder completion (`c()`) sees the advanced epoch and
// no-ops entirely: the cleanup walk must not delete the live DOM still
// sitting between the surviving markers (the placeholder content would
// vanish, leaving a hole), and the chunk's `runtime.j` resume-script
// callbacks must not run against the post-navigation page. The stale
// chunk's own content stays inert inside its hidden `<t>` wrapper.
// (Sibling fixture persisted-update-navigate-pending-await covers the
// non-aborted case, where the navigation's boundary body replaces the
// placeholder -- and its markers -- before the stale chunk arrives.)
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  // The scenario is inherently about the SSR streaming/reorder machinery
  // racing a persisted patch; there is no equivalent CSR concept.
  skip_csr: true,
  steps: [
    {
      heading: "First",
      value: "pre-nav-data",
      tick: 5,
      $global: { persisted: true },
    },
    // Deliberately do NOT flush: the placeholder stays shown and its reorder
    // markers stay live. Abort after frame 1 so the navigation never
    // delivers the boundary body -- the markers survive the apply.
    navigate(
      {
        heading: "Second",
        value: "post-nav-data",
        tick: 6,
        $global: { persisted: true },
      },
      undefined,
      1,
    ),
    // Only now let the original (pre-navigation) response's buffered
    // reorder chunk land -- after the navigation has bumped the epoch.
    flush,
  ],
};
