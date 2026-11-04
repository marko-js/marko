import type { TestConfig } from "../../main.test";
// A function passed on through a middle template: the grandchild's script
// re-runs once per change of what the function captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
