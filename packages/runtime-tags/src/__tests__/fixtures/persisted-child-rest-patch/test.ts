import type { TestConfig } from "../../main.test";

// A pure-rest child's input group maps its feeders (the rest link sits
// between property hops): patches re-render the child, never stale.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "l1" }, { label: "l2" }, { label: "l3" }],
};
