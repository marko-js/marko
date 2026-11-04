import type { TestConfig } from "../../main.test";
// patch-child-effect-calls-input-method without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
