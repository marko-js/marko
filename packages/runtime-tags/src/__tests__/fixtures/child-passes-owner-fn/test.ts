import type { TestConfig } from "../../main.test";
// patch-child-passes-owner-fn without patches: the script runs once per change
// of what the function reads.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
