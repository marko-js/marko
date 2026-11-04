import type { TestConfig } from "../../main.test";

// A child's script calling one of two functions with written captures it joins re-runs by their
// captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
