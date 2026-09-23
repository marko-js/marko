import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ list: [1, 2] }, { list: [1, 2, 3] }],
};
