import type { TestConfig } from "../../main.test";

// A read of an alias of a rest passes through it to the rest's source.
export const config: TestConfig = {
  steps: [{ obj: { a: 1, b: 2 } }],
};
