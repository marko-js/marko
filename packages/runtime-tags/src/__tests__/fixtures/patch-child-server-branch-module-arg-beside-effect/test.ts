import type { TestConfig } from "../../main.test";

// An effect keeps the input's fill registration: it reaches neither the server
// branch's call nor the module it imports, which the plain build drops too.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: true },
    { label: "b", show: true },
  ],
};
