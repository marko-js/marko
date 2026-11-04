import type { TestConfig } from "../../main.test";
// patch-child-effect-calls-owner-fn-literal with the function held by a const:
// the child takes it once, and its script depends on what it captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
