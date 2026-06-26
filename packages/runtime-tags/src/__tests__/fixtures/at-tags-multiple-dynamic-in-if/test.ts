import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ cond: true }, { cond: false }, { cond: true }],
};
