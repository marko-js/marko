import type { TestConfig } from "../../main.test";
// patch-child-effect-reads-object-literal without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
