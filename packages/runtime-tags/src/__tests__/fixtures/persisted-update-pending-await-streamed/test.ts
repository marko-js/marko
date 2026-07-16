import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// A token-proven pending boundary may resolve in a later update frame.
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
      title: "First",
      note: "pre-nav-note",
      tick: 4,
      $global: { persisted: true },
    },
    // Keep the placeholder live for the next navigation's token.
    navigate(
      {
        title: "Second",
        note: "the recommendation",
        tick: 7,
        $global: { persisted: true },
      },
      // Mutate sibling state between the synchronous and boundary frames.
      (container) => {
        container.querySelector<HTMLButtonElement>("button.clicks")!.click();
      },
    ),
    // Once settled, later navigations update the matched body normally.
    // through ordinary fills (a fine-grained text update in the snapshot,
    // not a boundary-body swap), preserving the counter yet again.
    navigate({
      title: "Third",
      note: "restocked",
      tick: 2,
      $global: { persisted: true },
    }),
  ],
};
