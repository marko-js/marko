import type { TestConfig } from "../../main.test";

// An input object carrying a method the child reads in an effect: the patch
// writes the object, so the method must be a registered function.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "a" }, { label: "b" }],
};
