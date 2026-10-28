import type { TestConfig } from "../../main.test";

// patch-unassigned-let-global-join without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ $global: { v: "a", serializedGlobals: ["v"] }, w: "1" }],
};
