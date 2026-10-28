import type { TestConfig } from "../../main.test";

// A controlled `<let>` selects a branch: it follows its controller, so a patch
// re-selects it.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "" }, { v: "a" }, { v: "b" }],
};
