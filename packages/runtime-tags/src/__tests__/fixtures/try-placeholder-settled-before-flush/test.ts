import type { TestConfig } from "../../main.test";

// A promise that settles before the flush renders its body in place, with no
// placeholder.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ promise: Promise.resolve("a") }],
};
