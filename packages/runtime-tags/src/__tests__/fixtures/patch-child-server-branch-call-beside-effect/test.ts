import type { TestConfig } from "../../main.test";

// An effect keeps the input's fill registration: it reaches no dispatch into the server
// branch's call, whose code the plain build drops too.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: true },
    { label: "b", show: true },
  ],
};
