import type { TestConfig } from "../../main.test";

// An effect reads a value derived in content no patch writes: after a
// patch it re-runs with the new value.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }],
};
