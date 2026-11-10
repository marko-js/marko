import type { TestConfig } from "../../main.test";

// An effect reading a `<let>` member runs once in a child a patch creates where the
// server gives the `<let>` its value, whose fill carries only the member it reads.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { show: true, b: 1 }, { show: true, b: 1 }],
};
