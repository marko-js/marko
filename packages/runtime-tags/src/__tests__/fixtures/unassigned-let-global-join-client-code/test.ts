import type { TestConfig } from "../../main.test";

// patch-unassigned-let-global-join-client-code without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { id: "u1", $global: { x: "a", serializedGlobals: ["x"] } },
    { id: "u1", $global: { x: "b", serializedGlobals: ["x"] } },
  ],
};
