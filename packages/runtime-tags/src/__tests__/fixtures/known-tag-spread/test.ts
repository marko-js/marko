import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ settings: { a: 1, b: 2 } }, { settings: { a: 9, b: 10 } }],
};
