import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// State-mixed holes re-render client-side from patched scope values, so the
// patch render skips their `_hole_value` captures (no double-shipping).
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { label: "alpha", count: 3, $global: { persisted: true } },
    clickButton,
    navigate({ label: "beta", count: 7, $global: { persisted: true } }),
    clickButton,
  ],
};
