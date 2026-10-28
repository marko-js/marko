import type { TestConfig } from "../../main.test";

// An unassigned `<let>` from `$global` joined with changing input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { v: "a", serializedGlobals: ["v"] }, w: "1" },
    { $global: { v: "a", serializedGlobals: ["v"] }, w: "2" },
  ],
};
