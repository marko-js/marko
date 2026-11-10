import type { TestConfig } from "../../main.test";

// A child's script reading an object a call spreads from a literal re-runs by
// what the literal is built from.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
