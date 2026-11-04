import type { TestConfig } from "../../main.test";

// A promise that settles before the flush leaves no placeholder showing, so the
// patch ships no placeholder shell.
export const config: TestConfig = {
  patches: true,
  steps: [{ promise: Promise.resolve("a") }, { promise: Promise.resolve("b") }],
};
