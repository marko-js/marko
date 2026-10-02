import type { TestConfig } from "../../main.test";

// An alias of an attribute tag `<for>` param is read lexically in its section.
export const config: TestConfig = {
  steps: [{ items: ["a", "b"] }],
};
