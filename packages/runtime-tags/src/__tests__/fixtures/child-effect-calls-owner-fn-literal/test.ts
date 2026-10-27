import type { TestConfig } from "../../main.test";
// patch-child-effect-calls-owner-fn-literal without patches: the script runs once per change of what the
// function reads.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
