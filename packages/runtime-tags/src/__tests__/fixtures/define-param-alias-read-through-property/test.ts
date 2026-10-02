import type { TestConfig } from "../../main.test";

// Only the params a body reads through an alias of its input are passed in.
export const config: TestConfig = {
  steps: [{ x: 1, y: 2 }],
};
