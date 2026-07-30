import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ list: ["a"] }, { list: ["a", "b", "c"] }],
};
