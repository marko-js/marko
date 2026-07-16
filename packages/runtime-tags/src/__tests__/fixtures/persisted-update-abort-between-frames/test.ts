import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A navigation aborted between its fragment frame and boundary-body frame:
// every applied frame must stand alone, with later navigations unaffected.
const topics = {
  persisted: true,
  persistedCrossRoute: true,
};

export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Nav A: cross-route fragment; drop everything after frame 1 -- the
    // placeholder stays up, the body frame never applies.
    navigate(
      { $global: { ...topics, view: "reports", topic: "sales" } },
      undefined,
      1,
    ),
    clickCount,
    // Nav B supersedes: swap back home, destroying the pending try branch.
    navigate({ $global: { ...topics, view: "home" } }),
    clickCount,
    // Full-stream retry of the same route: no residue from the truncation.
    navigate({ $global: { ...topics, view: "reports", topic: "growth" } }),
    clickCount,
  ],
};
