import type { TestConfig } from "../../main.test";

// A flush whose try body renders without error but writes nothing still
// takes the body back from the `@catch` an earlier flush showed.
export const config: TestConfig = {
  patches: true,
  steps: [{ boom: false }, { boom: true }, { boom: false }],
};
