import type { TestConfig } from "../../main.test";

// A direct-alias consumer (`<const/x=input/>`) maps its feeders through
// the property-less link the same way rest does: patches re-render.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "l1" }, { label: "l2" }],
};
