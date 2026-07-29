import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

// The inline reorder runtime's nav-epoch gate must drop a stale reorder
// completion whole: no cleanup walk over live DOM, no resume-script callbacks.
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
    // Deliberately not flushed, and the navigation aborts after frame 1, so
    // the live placeholder and its reorder markers survive the apply.
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
