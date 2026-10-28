import type { TestConfig } from "../../main.test";

// An unassigned `<let>` joined with a changing `$global`, on a page with client
// code.
export const config: TestConfig = {
  patches: true,
  steps: [
    { id: "u1", $global: { x: "a", serializedGlobals: ["x"] } },
    { id: "u1", $global: { x: "b", serializedGlobals: ["x"] } },
  ],
};
