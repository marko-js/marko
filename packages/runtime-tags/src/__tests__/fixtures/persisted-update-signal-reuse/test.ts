import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// Browser-code reuse: `input.label` mixes with client state in the class
// attr, so its value signal is registered and the update merge invokes it
// with the patched value -- the pure `${input.label}` text hole and the
// mixed class attr are then re-rendered client-side from patched scope
// values, so the update render skips their `_hole_value` captures entirely
// (no double-shipping). `input.count` has no state mixing and keeps the
// plain capture/placement path.
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
