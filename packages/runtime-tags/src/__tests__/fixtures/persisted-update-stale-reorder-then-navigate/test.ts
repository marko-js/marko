import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

// A stale pre-navigation reorder flush must be inert as a whole so the next
// navigation's boundary body still lands in the live page, interactive.
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
    // Abort after frame 1 so the placeholder and its markers survive.
    navigate(
      {
        heading: "Second",
        value: "second-data",
        tick: 6,
        $global: { persisted: true },
      },
      undefined,
      1,
    ),
    // The pre-navigation reorder chunk lands after the epoch advanced.
    flush,
    // A later navigation resolves the still-pending boundary; its body must
    // reach the live placeholder, untouched by the stale flush.
    navigate({
      heading: "Third",
      value: "third-data",
      tick: 7,
      $global: { persisted: true },
    }),
    // The delivered body is live and interactive.
    (container: Element) => {
      container.querySelector<HTMLButtonElement>("main button")!.click();
    },
  ],
};
