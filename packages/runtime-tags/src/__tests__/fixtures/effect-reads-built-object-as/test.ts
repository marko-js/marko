import type { TestConfig } from "../../main.test";

// patch-effect-reads-built-object-as without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
